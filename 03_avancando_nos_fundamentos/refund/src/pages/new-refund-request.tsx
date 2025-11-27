import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { useReceipt } from "@/contexts/receipts/hooks/use-receipt";
import { CloudArrowUpIcon } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  refundRequestSchema,
  type RefundRequestSchema,
} from "@/contexts/refunds/schemas";
import { useRefund } from "@/contexts/refunds/hooks/use-refund";
import { useNavigate } from "react-router";

export function NewRefundRequest() {
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { createReceipt } = useReceipt();
  const { createRefund } = useRefund();

  const { handleSubmit, register, reset, setValue, formState } = useForm({
    resolver: zodResolver(refundRequestSchema),
    defaultValues: {
      title: "",
      category: "food",
      value: 0,
      receipt: "",
    },
  });

  const {
    mutate: createReceiptMutation,
    isPending: isCreatingReceipt,
    isSuccess: isReceiptCreated,
  } = useMutation({
    mutationFn: createReceipt,
    onSuccess: (data) => {
      console.log("Recibo adicionado com sucesso.", data);
      setValue("receipt", data.receipt.id, { shouldValidate: true });
    },
    onError: (error) => {
      console.error("Erro ao adicionar recibo:", error);
    },
  });

  const { mutate: createRefundMutation, isPending: isCreatingRefund } =
    useMutation({
      mutationFn: createRefund,
      onSuccess: (data) => {
        console.log("Reembolso adicionado com sucesso.", data);
        reset();
        navigate("/novo-reembolso/sucesso");
        queryClient.invalidateQueries({
          queryKey: ["refunds"],
        });
      },
      onError: (error) => {
        console.error("Erro ao adicionar reembolso:", error);
      },
    });

  function handleInputFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file && file.size > MAX_FILE_SIZE) {
      console.log("Arquivo muito grande.");
      return;
    } else if (!file || file.size === 0) {
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  }

  async function handleUploadReceipt() {
    if (!selectedFile) {
      return;
    }

    createReceiptMutation(selectedFile);
  }

  async function handleSubitRefund(data: RefundRequestSchema) {
    if (!formState.isValid) {
      return;
    }

    createRefundMutation(data);
  }

  return (
    <div className="mx-auto max-w-lg space-y-10 rounded-2xl bg-gray-500 p-10">
      <div className="space-y-3">
        <h1 className="text-xl font-bold text-gray-100">
          Nova solicitação de reembolso
        </h1>
        <p className="text-sm text-gray-200">
          Dados da despesa para solicitar reembolso.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(handleSubitRefund)}>
        <Input label="Nome da solicitação" {...register("title")} />

        <div className="grid grid-cols-2 items-start gap-4">
          <Select label="Categoria" {...register("category")} />
          <Input label="Valor" type="number" {...register("value")} />
        </div>

        <div className="flex items-end">
          <Input
            label="Imagem"
            type="file"
            className="flex-1"
            accept=".pdf,.jpg,.png"
            onChange={(e) => handleInputFileChange(e)}
          />
          <IconButton
            type="button"
            icon={<CloudArrowUpIcon />}
            onClick={handleUploadReceipt}
            disabled={!selectedFile || isReceiptCreated || isCreatingReceipt}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={!formState.isValid || isCreatingRefund}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { LinkButton } from "@/components/link-button";
import { Select } from "@/components/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileIcon } from "@phosphor-icons/react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useRefund } from "@/contexts/refunds/hooks/use-refund";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useReceipt } from "@/contexts/receipts/hooks/use-receipt";

export function RefundDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const { refund, isLoadingRefund } = useRefund(params.id);
  const { downloadReceipt } = useReceipt();

  const [modalOpen, setModalOpen] = useState(false);

  function handleDeleteRefund() {
    console.log("enviei modal");
    setModalOpen(false);
  }

  function handleDownloadReceipt() {
    if (refund?.receipt.id) {
      downloadReceipt(refund.receipt.id);
    }
  }

  useEffect(() => {
    if (!params.id) {
      navigate("/");
    }
  }, [params.id, navigate]);

  return (
    <>
      {isLoadingRefund && <div>Carregando...</div>}

      {!isLoadingRefund && !refund && (
        <div className="mx-auto max-w-lg space-y-10 rounded-2xl bg-gray-500 p-10 text-center text-gray-100">
          <div className="space-y-3">
            <h1 className="text-xl font-bold text-gray-100">
              Reembolso não encontrado.
            </h1>
            <p className="text-sm text-gray-200">
              Verifique o ID da solicitação e tente novamente.
            </p>
          </div>
          <Button onClick={() => navigate("/")}>
            Voltar para a lista de reembolsos
          </Button>
        </div>
      )}

      {!isLoadingRefund && !!refund && (
        <div className="mx-auto max-w-lg space-y-10 rounded-2xl bg-gray-500 p-10">
          <div className="space-y-3">
            <h1 className="text-xl font-bold text-gray-100">
              Solicitação de reembolso
            </h1>
            <p className="text-sm text-gray-200">
              Dados da despesa para solicitar reembolso.
            </p>
          </div>

          <form className="space-y-8">
            <Input label="Nome da solicitação" value={refund.title} disabled />

            <div className="grid grid-cols-2 items-start gap-4">
              <Select
                label="Categoria"
                defaultValue={refund.category}
                disabled
              />
              <Input
                label="Valor"
                value={new Intl.NumberFormat("pt-BR", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(refund.value)}
                disabled
              />
            </div>

            <div className="space-y-3">
              <LinkButton
                className="flex w-full items-center justify-center gap-2 text-green-100"
                type="button"
                onClick={handleDownloadReceipt}
              >
                <FileIcon className="text-lg" />
                Abrir comprovante
              </LinkButton>

              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full">Excluir</Button>
                </DialogTrigger>
                <DialogOverlay className="fixed inset-0 z-50 bg-gray-100/80" />
                <DialogContent className="space-y-6 p-10">
                  <DialogHeader className="space-y-3">
                    <DialogTitle className="text-xl font-bold text-gray-100">
                      Excluir solicitação
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-200">
                      Tem certeza que deseja excluir essa solicitação? Essa ação
                      é irreversível.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="mb-0">
                    <DialogClose asChild>
                      <LinkButton>Cancelar</LinkButton>
                    </DialogClose>
                    <Button onClick={handleDeleteRefund}>Confirmar</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

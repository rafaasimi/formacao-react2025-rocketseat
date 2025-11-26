import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { CloudArrowUpIcon } from "@phosphor-icons/react";

export function NewRefundRequest() {
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

      <form className="space-y-6">
        <Input label="Nome da solicitação" />

        <div className="grid grid-cols-2 items-start gap-4">
          <Select label="Categoria" />
          <Input label="Valor" type="number" />
        </div>

        <div className="flex items-end">
          <Input label="Imagem" type="file" className="flex-1" />
          <IconButton icon={<CloudArrowUpIcon />} />
        </div>

        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </form>
    </div>
  );
}

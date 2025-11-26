import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { LinkButton } from "@/components/link-button";
import { Select } from "@/components/select";
import { FileIcon } from "@phosphor-icons/react";

export function RefundDetail() {
  return (
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
        <Input label="Nome da solicitação" value="Café da manhã" disabled />

        <div className="grid grid-cols-2 items-start gap-4">
          <Select label="Categoria" value="alimentacao" disabled />
          <Input
            label="Valor"
            value={new Intl.NumberFormat("pt-BR", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(18.9)}
            disabled
          />
        </div>

        <div className="space-y-3">
          <LinkButton className="flex items-center justify-center gap-2">
            <FileIcon className="text-lg" />
            Abrir comprovante
          </LinkButton>

          <Button type="submit" className="w-full">
            Excluir
          </Button>
        </div>
      </form>
    </div>
  );
}

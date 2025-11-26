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
import { useState } from "react";

export function RefundDetail() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleSubmitModal() {
    console.log("enviei modal");
    setModalOpen(false);
  }

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
                  Tem certeza que deseja excluir essa solicitação? Essa ação é
                  irreversível.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mb-0">
                <DialogClose asChild>
                  <LinkButton>Cancelar</LinkButton>
                </DialogClose>
                <Button onClick={handleSubmitModal}>Confirmar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </div>
  );
}

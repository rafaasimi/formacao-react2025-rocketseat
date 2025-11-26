import { IconButton } from "@/components/icon-button";
import { Input } from "@/components/input";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export function Refunds() {
  return (
    <main className="mx-auto space-y-6 divide-y divide-gray-400 rounded-2xl bg-gray-500 p-10 md:mx-14">
      <div className="space-y-6">
        <h1 className="text-[1.25rem] font-bold text-gray-100">Solicitações</h1>

        <div className="mb-6 flex items-center gap-3">
          <Input placeholder="Pesquisar pelo nome" className="flex-1" />
          <IconButton icon={<MagnifyingGlassIcon />} />
        </div>
      </div>

      <div>lista</div>
    </main>
  );
}

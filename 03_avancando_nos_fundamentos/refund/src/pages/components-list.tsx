import { Button } from "../components/button";
import { IconButton } from "../components/icon-button";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export function ComponentsList() {
  return (
    <div className="flex flex-col gap-6">
      <h1>Lista de componentes</h1>

      <div>
        <h2>Botão</h2>
        <ul className="flex gap-4">
          <li>
            <Button label="Salvar" />
          </li>
          <li>
            <Button label="Salvar" disabled />
          </li>
        </ul>
      </div>

      <div>
        <h2>Botão com ícone</h2>
        <ul className="flex gap-4">
          <li>
            <IconButton icon={<MagnifyingGlassIcon size={24} />} />
          </li>
          <li>
            <IconButton icon={<MagnifyingGlassIcon />} disabled />
          </li>
        </ul>
      </div>
    </div>
  );
}

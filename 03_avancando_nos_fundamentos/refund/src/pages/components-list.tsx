import { Button } from "../components/button";
import { IconButton } from "../components/icon-button";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { LinkButton } from "../components/link-button";
import { Input } from "../components/input";
import { Select } from "@/components/select";

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

      <div>
        <h2>Link Button</h2>
        <ul className="flex gap-4">
          <li>
            <LinkButton label="Link" />
          </li>
          <li>
            <LinkButton label="Link" active />
          </li>
        </ul>
      </div>

      <div>
        <h2>Input</h2>
        <ul className="flex gap-4">
          <li>
            <Input type="text" placeholder="Placeholder" />
          </li>
          <li>
            <Input
              type="text"
              placeholder="Placeholder"
              value="Minha solicitação"
            />
          </li>
          <li>
            <Input label="Título" type="text" placeholder="Placeholder" />
          </li>
          <li>
            <Input
              label="Título"
              type="text"
              placeholder="Placeholder"
              value="Minha solicitação"
            />
          </li>
        </ul>
      </div>

      <div>
        <h2>Select</h2>
        <ul className="flex gap-4">
          <li>
            <Select label="Título" placeholder="Placeholder" />
          </li>
        </ul>
      </div>
    </div>
  );
}

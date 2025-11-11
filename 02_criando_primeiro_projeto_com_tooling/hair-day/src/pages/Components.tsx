import { Paragraph } from "@/components/paragraph";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { UserSquareIcon } from "@phosphor-icons/react";

export function Components() {
  return (
    <div className="max-w-3xs">
      <ul>
        <li>
          <Title size="lg">Esse é meu título</Title>
        </li>
        <li>
          <Title size="md">Esse é meu título</Title>
        </li>
        <li>
          <Title size="sm">Esse é meu título</Title>
        </li>
      </ul>

      <br />

      <Title size="lg">Paragráfo</Title>

      <ul>
        <li>
          <Paragraph size="md">Esse é meu paragráfo</Paragraph>
        </li>
        <li>
          <Paragraph size="sm">Esse é meu paragráfo</Paragraph>
        </li>
      </ul>

      <br />

      <Title size="lg">Button</Title>
      <ul>
        <li>
          <Button>Agendar</Button>
        </li>
        <li>
          <Button disabled>Agendar</Button>
        </li>
      </ul>

      <br />

      <Title size="lg">Input</Title>
      <ul>
        <li>
          <InputGroup>
            <InputGroupInput type="text" placeholder="Nome do cliente" />
            <InputGroupAddon>
              <UserSquareIcon />
            </InputGroupAddon>
          </InputGroup>
        </li>
      </ul>
    </div>
  );
}

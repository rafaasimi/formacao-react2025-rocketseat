import { ButtonIcon } from "@/components/buttonIcon";
import { useState } from "react";
import { Paragraph } from "@/components/paragraph";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import { RadioChipGroup } from "@/components/radioSelect";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  CalendarBlankIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CloudSunIcon,
  MoonStarsIcon,
  SunHorizonIcon,
  TrashIcon,
  UserSquareIcon,
} from "@phosphor-icons/react";
import { SelectDate } from "@/components/selectDate";

export function Components() {
  const [selectedTime, setSelectedTime] = useState<string | undefined>("08:00");

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

      <br />

      <Title size="lg">Button Icon</Title>
      <ul className="flex gap-2">
        <li>
          <ButtonIcon icon={<SunHorizonIcon />} />
        </li>
        <li>
          <ButtonIcon icon={<CloudSunIcon />} />
        </li>
        <li>
          <ButtonIcon icon={<UserSquareIcon />} />
        </li>
        <li>
          <ButtonIcon icon={<MoonStarsIcon />} />
        </li>
        <li>
          <ButtonIcon icon={<CaretDownIcon />} />
        </li>
        <li>
          <ButtonIcon icon={<CalendarBlankIcon />} />
        </li>
        <li>
          <ButtonIcon icon={<CaretRightIcon />} />
        </li>
        <li>
          <ButtonIcon icon={<CaretLeftIcon />} />
        </li>
        <li>
          <ButtonIcon icon={<TrashIcon />} />
        </li>
      </ul>

      <br />

      <Title size="lg">Time Select</Title>
      <div className="space-y-2">
        <RadioChipGroup
          name="appointment-time"
          value={selectedTime}
          onChange={setSelectedTime}
          options={[
            { value: "08:00", label: "08:00" },
            { value: "08:30", label: "08:30" },
            { value: "09:00", label: "09:00" },
            { value: "09:30", label: "09:30" },
            { value: "10:00", label: "10:00" },
            { value: "10:30", label: "10:30" },
            { value: "11:00", label: "11:00", disabled: true },
          ]}
        />
        <Paragraph size="sm">Selecionado: {selectedTime ?? "Nenhum"}</Paragraph>
      </div>

      <br />

      <Title size="lg">Date Select</Title>
      <div className="space-y-2">
        <SelectDate />
      </div>
    </div>
  );
}

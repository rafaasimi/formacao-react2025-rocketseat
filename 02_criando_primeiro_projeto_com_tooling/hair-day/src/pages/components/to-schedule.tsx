import logoImg from "@/assets/logo.svg";
import { Paragraph } from "@/components/paragraph";
import { RadioChipGroup } from "@/components/radioSelect";
import { SelectDate } from "@/components/selectDate";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { UserSquareIcon } from "@phosphor-icons/react";
import { useState } from "react";

export function ToSchedule() {
  const [scheduleHour, setScheduleHour] = useState<string>("");

  return (
    <div className="bg-gray-700 rounded-[12px] p-20 relative">
      <div className="absolute -left-3 -top-3 bg-gray-600 px-5 py-3 rounded-br-[12px]">
        <img src={logoImg} alt="HairDay" />
      </div>

      <div className="space-y-6">
        <div className="space-y-1">
          <Title size="lg">Agende um atendimento</Title>
          <Paragraph size="sm" className="text-gray-300">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </Paragraph>
        </div>

        <form>
          <div className="space-y-8">
            <div className="space-y-2">
              <Title size="md" className="text-gray-200">
                Data
              </Title>
              <SelectDate value={new Date()}/>
            </div>

            <div className="space-y-2">
              <Title size="md" className="text-gray-200">
                Horários
              </Title>

              <div className="space-y-2">
                <Paragraph as="span" size="sm" className="text-gray-300">
                  Manhã
                </Paragraph>
                <RadioChipGroup
                  name="select-schedule-hour"
                  value={scheduleHour}
                  onChange={(value) => setScheduleHour(value)}
                  options={[
                    { value: "09:00", label: "09:00" },
                    { value: "10:00", label: "10:00" },
                    { value: "11:00", label: "11:00" },
                    { value: "12:00", label: "12:00" },
                  ]}
                />
              </div>

              <div className="space-y-2">
                <Paragraph as="span" size="sm" className="text-gray-300">
                  Tarde
                </Paragraph>
                <RadioChipGroup
                  name="select-schedule-hour"
                  value={scheduleHour}
                  onChange={(value) => setScheduleHour(value)}
                  options={[
                    { value: "13:00", label: "13:00" },
                    { value: "14:00", label: "14:00" },
                    { value: "15:00", label: "15:00" },
                    { value: "16:00", label: "16:00" },
                    { value: "17:00", label: "17:00" },
                    { value: "18:00", label: "18:00" },
                  ]}
                />
              </div>

              <div className="space-y-2">
                <Paragraph as="span" size="sm" className="text-gray-300">
                  Noite
                </Paragraph>
                <RadioChipGroup
                  name="select-schedule-hour"
                  value={scheduleHour}
                  onChange={(value) => setScheduleHour(value)}
                  options={[
                    { value: "19:00", label: "19:00" },
                    { value: "20:00", label: "20:00" },
                    { value: "21:00", label: "21:00" },
                  ]}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Title size="md" className="text-gray-200">
                Cliente
              </Title>
              <InputGroup>
                <InputGroupInput type="text" placeholder="Nome do cliente" />
                <InputGroupAddon>
                  <UserSquareIcon />
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>

          <div className="pt-6">
            <Button type="submit">Agendar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

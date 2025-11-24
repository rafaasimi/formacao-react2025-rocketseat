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
import { Controller, useForm } from "react-hook-form";
import { scheduleNewFormSchema, type ScheduleNewFormSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Schedule } from "@/utils/mocks/schedule";
import { useState } from "react";

interface ToScheduleProps {
  createSchedule: (payload: ScheduleNewFormSchema) => void;
  schedules: Schedule[];
}

export function ToSchedule({ createSchedule, schedules }: ToScheduleProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const { register, handleSubmit, formState, control, reset } =
    useForm<ScheduleNewFormSchema>({
      resolver: zodResolver(scheduleNewFormSchema),
      defaultValues: {
        id: crypto.randomUUID(),
        name: "",
        date: new Date(),
        time: "",
      },
    });

  function checkTimeAvailability(time: string): boolean {
    const selectedDateString = selectedDate?.toISOString().split("T")[0];

    if (!selectedDateString) return false;

    return schedules.some(
      (schedule) =>
        schedule.date.toISOString().split("T")[0] === selectedDateString &&
        schedule.time === time
    );
  }

  function handleSubmitForm(payload: ScheduleNewFormSchema) {
    createSchedule(payload);
    reset();
  }

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

        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="space-y-8">
            <div className="space-y-2">
              <Title size="md" className="text-gray-200">
                Data
              </Title>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <SelectDate
                    value={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      field.onChange(date);
                    }}
                  />
                )}
              />
              <Paragraph size="sm" className="text-red-600">
                {formState.errors.date?.message}
              </Paragraph>
            </div>

            <div className="space-y-2">
              <Title size="md" className="text-gray-200">
                Horários
              </Title>

              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Paragraph as="span" size="sm" className="text-gray-300">
                        Manhã
                      </Paragraph>
                      <RadioChipGroup
                        name="time"
                        value={field.value}
                        onChange={field.onChange}
                        options={[
                          { value: "09:00", label: "09:00", disabled: checkTimeAvailability("09:00") },
                          { value: "10:00", label: "10:00", disabled: checkTimeAvailability("10:00") },
                          { value: "11:00", label: "11:00", disabled: checkTimeAvailability("11:00") },
                          { value: "12:00", label: "12:00", disabled: checkTimeAvailability("12:00") },
                        ]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Paragraph as="span" size="sm" className="text-gray-300">
                        Tarde
                      </Paragraph>
                      <RadioChipGroup
                        name="time"
                        value={field.value}
                        onChange={field.onChange}
                        options={[
                          { value: "13:00", label: "13:00", disabled: checkTimeAvailability("13:00") },
                          { value: "14:00", label: "14:00", disabled: checkTimeAvailability("14:00") },
                          { value: "15:00", label: "15:00", disabled: checkTimeAvailability("15:00") },
                          { value: "16:00", label: "16:00", disabled: checkTimeAvailability("16:00") },
                          { value: "17:00", label: "17:00", disabled: checkTimeAvailability("17:00") },
                          { value: "18:00", label: "18:00", disabled: checkTimeAvailability("18:00") },
                        ]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Paragraph as="span" size="sm" className="text-gray-300">
                        Noite
                      </Paragraph>
                      <RadioChipGroup
                        name="time"
                        value={field.value}
                        onChange={field.onChange}
                        options={[
                          { value: "19:00", label: "19:00", disabled: checkTimeAvailability("19:00") },
                          { value: "20:00", label: "20:00", disabled: checkTimeAvailability("20:00") },
                          { value: "21:00", label: "21:00", disabled: checkTimeAvailability("21:00") },
                        ]}
                      />
                    </div>
                  </div>
                )}
              />

              <Paragraph size="sm" className="text-red-600">
                {formState.errors.time?.message}
              </Paragraph>
            </div>

            <div className="space-y-2">
              <Title size="md" className="text-gray-200">
                Cliente
              </Title>
              <InputGroup>
                <InputGroupInput
                  type="text"
                  placeholder="Nome do cliente"
                  {...register("name")}
                />
                <InputGroupAddon>
                  <UserSquareIcon />
                </InputGroupAddon>
              </InputGroup>
              <Paragraph size="sm" className="text-red-600">
                {formState.errors.name?.message}
              </Paragraph>
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

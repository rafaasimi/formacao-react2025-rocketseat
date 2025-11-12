import {
  CloudSunIcon,
  MoonStarsIcon,
  SunHorizonIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { Paragraph } from "../paragraph";
import { ButtonIcon } from "../buttonIcon";
import { Title } from "../title";

type Period = "morning" | "afternoon" | "night";

interface TableHourProps {
  schedules?: {
    id: string;
    hour: string;
    name: string;
    date: Date;
  };
  availableInterval: [number, number];
  period: Period;
}

const MOCK: NonNullable<TableHourProps["schedules"]>[] = [
  {
    id: "1",
    hour: "09:00",
    name: "João",
    date: new Date(),
  },
  {
    id: "1",
    hour: "10:00",
    name: "Rafael",
    date: new Date(),
  },
  {
    id: "1",
    hour: "11:00",
    name: "Luiz",
    date: new Date(),
  },
  {
    id: "1",
    hour: "12:00",
    name: "Patricia",
    date: new Date(),
  },
];

export function TableHour({
  schedules,
  availableInterval,
  period,
}: TableHourProps) {
  function getIconPeriod() {
    if (period === "morning") {
      return <SunHorizonIcon />;
    } else if (period === "afternoon") {
      return <CloudSunIcon />;
    } else {
      return <MoonStarsIcon />;
    }
  }

  function getNamePeriod() {
    if (period === "morning") {
      return "Manhã";
    } else if (period === "afternoon") {
      return "Tarde";
    } else {
      return "Noite";
    }
  }

  return (
    <div className="rounded-[8px] border border-gray-600 divide-y divide-gray-600 divide-solid">
      <header className="flex items-center gap-3 px-5 py-3">
        <span className="text-[1.25rem] text-yellow-dark font-bold">
          {getIconPeriod()}
        </span>
        <Paragraph as="span" size="sm" className="flex-1 text-gray-300">
          {getNamePeriod()}
        </Paragraph>
        <Paragraph as="span" size="sm" className=" text-gray-300">
          {availableInterval[0].toString().padStart(2, "0")}h-
          {availableInterval[1].toString().padStart(2, "0")}h
        </Paragraph>
      </header>

      <div className="p-5 space-y-0.5">
        {MOCK.length > 0 ? (
          MOCK.map((schedule) => (
            <div key={schedule.id} className="flex items-center gap-5">
              <Title size="md" className="text-gray-200 w-12 text-center">
                {schedule.hour}
              </Title>
              <Paragraph size="md" className="text-gray-200 flex-1">
                {schedule.name}
              </Paragraph>
              <span>
                <ButtonIcon icon={<TrashIcon size="1rem" />} />
              </span>
            </div>
          ))
        ) : (
          <Paragraph size="md" className="text-gray-200">
            Você ainda não tem agendamentos cadastrados nesse período.
          </Paragraph>
        )}
      </div>
    </div>
  );
}

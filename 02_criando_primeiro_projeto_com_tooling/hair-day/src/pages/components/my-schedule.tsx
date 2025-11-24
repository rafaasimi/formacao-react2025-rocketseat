import { Paragraph } from "@/components/paragraph";
import { SelectDate } from "@/components/selectDate";
import { TableHour } from "@/components/tableHour";
import { Title } from "@/components/title";
import type { Schedule } from "@/utils/mocks/schedule";
import { useState } from "react";

interface MyScheduleProps {
  schedules: Schedule[];
  filterSchedule: (date: Date) => void;
  deleteSchedule: (id: string) => void;
}

export function MySchedule({
  schedules,
  filterSchedule,
  deleteSchedule,
}: MyScheduleProps) {
  const [selectDate, setSelectDate] = useState<Date>(new Date());

  const morningSchedules = schedules.filter((schedule) => {
    const [hours, minutes] = schedule.time.split(":");

    if (hours >= "09" && hours <= "12") {
      return schedule;
    }
  });

  const afternoonSchedules = schedules.filter((schedule) => {
    const [hours, minutes] = schedule.time.split(":");

    if (hours >= "13" && hours <= "18") {
      return schedule;
    }
  });

  const nightSchedules = schedules.filter((schedule) => {
    const [hours, minutes] = schedule.time.split(":");

    if (hours >= "19" && hours <= "21") {
      return schedule;
    }
  });

  function handleFilterSchedule(date: Date | undefined) {
    if (date instanceof Date) {
      console.log(date)
      setSelectDate(date);
      filterSchedule(date);
    }
  }

  return (
    <section className="md:px-28 md:py-10 space-y-8">
      <header className="flex items-start gap-3 flex-col sm:flex-row">
        <div className="flex-1 space-y-1">
          <Title size="lg">Sua agenda</Title>
          <Paragraph size="sm" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Paragraph>
        </div>
        <div className="min-w-56">
          <SelectDate
            value={selectDate}
            onChange={(value) => handleFilterSchedule(value ?? new Date())}
          />
        </div>
      </header>

      <main className="space-y-3">
        <TableHour
          period="morning"
          availableInterval={[9, 12]}
          schedules={morningSchedules}
          deleteSchedule={deleteSchedule}
        />
        <TableHour
          period="afternoon"
          availableInterval={[13, 18]}
          schedules={afternoonSchedules}
          deleteSchedule={deleteSchedule}
        />
        <TableHour
          period="night"
          availableInterval={[19, 21]}
          schedules={nightSchedules}
          deleteSchedule={deleteSchedule}
        />
      </main>
    </section>
  );
}

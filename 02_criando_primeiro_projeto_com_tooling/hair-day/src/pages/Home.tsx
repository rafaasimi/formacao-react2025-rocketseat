import { SCHEDULE, type Schedule } from "@/utils/mocks/schedule";
import { MySchedule } from "./components/my-schedule";
import { ToSchedule } from "./components/to-schedule";
import { useState } from "react";
import type { ScheduleNewFormSchema } from "./components/schemas";

export function Home() {
  const [schedules, setSchedules] = useState<Schedule[]>(SCHEDULE);
  const [date, setDate] = useState<Date>(new Date());

  function createSchedule(payload: ScheduleNewFormSchema) {
    setSchedules((prev) => [...prev, payload]);
  }

  function deleteSchedule(id: string) {
    setSchedules((prev) =>
      prev.filter((schedule) => schedule.id !== id)
    );
  }

  function filterSchedule(date: Date) {
    setDate(date);
  }

  const filteredSchedules = schedules.filter((schedule) => {
    const scheduleDate = new Date(schedule.date);
    return (
      scheduleDate.getFullYear() === date.getFullYear() &&
      scheduleDate.getMonth() === date.getMonth() &&
      scheduleDate.getDate() === date.getDate()
    );
  });

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-[530px_1fr] gap-3">
      <ToSchedule schedules={filteredSchedules} createSchedule={createSchedule} />
      <MySchedule
        schedules={filteredSchedules}
        filterSchedule={filterSchedule}
        deleteSchedule={deleteSchedule}
      />
    </div>
  );
}

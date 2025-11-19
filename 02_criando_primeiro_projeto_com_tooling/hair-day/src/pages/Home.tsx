import { SCHEDULE, type Schedule } from "@/utils/mocks/schedule";
import { MySchedule } from "./components/my-schedule";
import { ToSchedule } from "./components/to-schedule";
import { useState } from "react";
import type { ScheduleNewFormSchema } from "./components/schemas";

export function Home() {
  const [filteredSchedules, setFilteredSchedules] =
    useState<Schedule[]>(SCHEDULE);

  function createSchedule(payload: ScheduleNewFormSchema) {
    setFilteredSchedules((prev) => [...prev, payload]);
  }

  function deleteSchedule(id: string) {
    setFilteredSchedules(
      filteredSchedules.filter((schedule) => schedule.id !== id)
    );
  }

  function filterSchedules(date: Date) {
    setFilteredSchedules(
      SCHEDULE.filter((schedule) => {
        const scheduleDate = new Date(schedule.date);
        return (
          scheduleDate.getFullYear() === date.getFullYear() &&
          scheduleDate.getMonth() === date.getMonth() &&
          scheduleDate.getDate() === date.getDate()
        );
      })
    );
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-[530px_1fr] gap-3">
      <ToSchedule createSchedule={createSchedule} />
      <MySchedule
        schedules={filteredSchedules}
        filterSchedules={filterSchedules}
        deleteSchedule={deleteSchedule}
      />
    </div>
  );
}

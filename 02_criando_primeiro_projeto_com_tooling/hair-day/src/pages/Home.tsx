import { MySchedule } from "./components/my-schedule";
import { ToSchedule } from "./components/to-schedule";

export function Home() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-[530px_1fr] gap-3">
      <ToSchedule />
      <MySchedule />
    </div>
  );
}

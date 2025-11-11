import { ToSchedule } from "./components/to-schedule";

export function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[530px_1fr] gap-3">
      <ToSchedule />
      <div>teste</div>
    </div>
  );
}

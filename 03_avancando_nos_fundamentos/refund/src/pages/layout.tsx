import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="min-h-dvh flex flex-col gap-10 p-10">
      <Outlet />
    </div>
  );
}

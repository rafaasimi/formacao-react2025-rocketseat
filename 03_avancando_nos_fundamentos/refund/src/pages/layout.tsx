import { Outlet } from "react-router";
import { Header } from "./components/header";

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col gap-10 p-4 md:p-10">
      <Header />
      <div className="mx-auto p-4 md:p-0">
        <Outlet />
      </div>
    </div>
  );
}

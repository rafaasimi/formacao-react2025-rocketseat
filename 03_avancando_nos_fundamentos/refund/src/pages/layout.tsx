import { Link, Outlet } from "react-router";
import { Header } from "./components/header";

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col gap-10 p-4 md:p-10">
      <Header />
      <div className="mx-auto w-full flex-1 p-4 md:p-0">
        <Outlet />
      </div>
      <p className="text-center text-sm text-gray-200">
        Para visualizar a lista de componentes,{" "}
        <Link to="/componentes">clique aqui</Link>
      </p>
    </div>
  );
}

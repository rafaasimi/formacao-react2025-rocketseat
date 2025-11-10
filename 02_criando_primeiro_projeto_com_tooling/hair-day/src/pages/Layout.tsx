import { Outlet } from "react-router";

export function Layout() {
    return (
        <div className="mx-auto p-4 max-w-360">
            <Outlet />
        </div>
    )
}
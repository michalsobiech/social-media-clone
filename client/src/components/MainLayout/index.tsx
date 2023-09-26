import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout(): ReactNode {
  return (
    <div className="grid grid-cols-4">
      {/* Left sidebar */}
      <div className=""></div>

      {/* Main content */}
      <div className="col-span-2">
        <Outlet />
      </div>

      {/* Right sidebar */}
      <div className=""></div>
    </div>
  );
}

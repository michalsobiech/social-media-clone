import NavBar from "@/components/NavBar";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout(): ReactElement {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-fb-gray-800 pt-14">
        <Outlet />
      </div>
    </>
  );
}

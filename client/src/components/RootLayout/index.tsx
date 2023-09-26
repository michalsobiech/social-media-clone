import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

export default function RootLayout(): ReactElement {
  return (
    <>
      <NavBar />
      <div className="h-full bg-fb-gray-800 pt-14">
        <Outlet />
      </div>
    </>
  );
}

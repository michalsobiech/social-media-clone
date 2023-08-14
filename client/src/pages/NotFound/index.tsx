import { ReactElement } from "react";

export default function NoPage(): ReactElement {
  return (
    <div className="h-full flex justify-center items-center bg-gradient-to-br from-[#0f87de] to-purple-400">
      <h1 className="font-[Montserrat]">Page Not Found</h1>
    </div>
  );
}

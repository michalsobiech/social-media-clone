import RootLayout from "@/components/RootLayout";
import Landing from "@/pages/Landing";
import { ReactElement, useState } from "react";
import { Outlet } from "react-router-dom";

export default function AuthenticatedApp(): ReactElement {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  if (!authenticated) return <Landing />;

  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}

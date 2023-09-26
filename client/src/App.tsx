import RootLayout from "@/components/RootLayout";
import ForgotPassword from "@/pages/ForgotPassword";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import ResetPassword from "@/pages/ResetPassword";
import Signup from "@/pages/Signup";
import { ReactElement } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="friends"
            element={<div className="h-full">Znajomi</div>}
          />
          <Route
            path="community"
            element={<div className="h-full">Społeczność</div>}
          />
        </Route>
        <Route path="profile" element={<div className="h-full">Profil</div>} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

function App(): ReactElement {
  return <RouterProvider router={router} />;
}

export default App;

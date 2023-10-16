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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="friends" element={<div className="h-full">Znajomi</div>} />
        <Route
          path="community"
          element={<div className="h-full">Społeczność</div>}
        />
        <Route path="profile" element={<div className="h-full">Profil</div>} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:token" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

function App(): ReactElement {
  return <RouterProvider router={router} />;
}

export default App;

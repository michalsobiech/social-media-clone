import LoginForm from "@/pages/Login/LoginForm";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.svg";

export default function Landing(): ReactElement {
  return (
    <div className="flex h-full w-full flex-col flex-nowrap items-center justify-center bg-white lg:bg-gray-100">
      <div className="flex h-full w-full max-w-md flex-col items-center gap-10 p-4 lg:h-fit lg:max-w-full lg:flex-row lg:items-start lg:justify-center lg:gap-24 lg:p-0">
        <div className="max-w-lg">
          <img
            src={logo}
            className="-ml-5 w-full max-w-md"
            alt="facebook - clone logo"
          />

          {/* Render this paragraph if there were no previously logged in users */}
          <p className="text-xl text-gray-700 lg:text-3xl">
            Facebook pomaga kontaktować się z innymi osobami oraz udostępniać im
            różne informacje i materiały.
          </p>
        </div>

        <div className="flex w-full max-w-sm flex-col gap-y-4 rounded-md bg-white text-center lg:p-4 lg:shadow-xl lg:shadow-gray-400">
          <LoginForm />

          <Link
            to="forgot-password"
            className="mx-auto w-fit font-poppins text-sm text-fb-blue"
          >
            Nie pamiętasz hasła?
          </Link>

          <div className="mx-auto h-px w-11/12 bg-gray-300"></div>

          <Link
            to="signup"
            className="mx-auto block rounded-md bg-fb-green px-4 py-2 font-poppins text-lg font-bold text-white hover:bg-fb-green-dark"
          >
            Utwórz nowe konto
          </Link>
        </div>
      </div>
    </div>
  );
}

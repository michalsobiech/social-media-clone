import { ReactElement } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function Login(): ReactElement {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white md:bg-gray-100 lg:justify-center">
      <img
        src="/logo-text.svg"
        className="mx-auto w-full max-w-sm"
        alt="Facebook - clone logo"
      />

      <div className="flex h-full w-full max-w-sm flex-col gap-y-4 rounded-md bg-white p-4 text-center font-poppins md:h-fit md:shadow-xl md:shadow-gray-400">
        <p className="text-lg text-gray-700">Zaloguj się do Facebooka</p>

        <LoginForm />

        <Link to="/forgot-password" className="text-sm text-fb-blue">
          Nie pamiętasz hasła?
        </Link>

        <div className="mx-auto h-px w-11/12 bg-gray-300"></div>

        <Link
          to="/signup"
          className="mx-auto block rounded-md bg-fb-green px-4 py-2 text-lg font-bold text-white hover:bg-fb-green-dark"
        >
          Zarejestruj się
        </Link>
      </div>
    </div>
  );
}

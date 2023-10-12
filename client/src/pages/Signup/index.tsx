import { ReactElement } from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

export default function Signup(): ReactElement {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white md:bg-gray-100">
      <div className="flex h-full w-full max-w-sm flex-col md:h-fit">
        <img
          src="/logo-text.svg"
          className="mx-auto w-full max-w-sm"
          alt="Facebook - clone logo"
        />

        <div className="rounded-md bg-white px-4 py-4 md:shadow-xl md:shadow-gray-400">
          <h2 className="m-0 text-center text-2xl">Utwórz nowe konto</h2>

          <div className="mx-auto my-4 h-px w-full bg-gray-300"></div>

          <SignupForm />

          <Link
            to="/login"
            className="mx-auto mt-4 block w-fit font-poppins text-sm text-fb-blue"
          >
            Masz już konto?
          </Link>
        </div>
      </div>
    </div>
  );
}

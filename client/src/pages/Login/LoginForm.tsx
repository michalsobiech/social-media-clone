import { useAuth } from "@/contexts/AuthContext";
import { FormEvent, ReactNode, useRef } from "react";
import { Navigate } from "react-router-dom";

export default function LoginForm(): ReactNode {
  const { auth, setAuth } = useAuth();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  if (auth) {
    return <Navigate to={"/"} />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (email?.trim() === "" || password?.trim() === "") {
      console.error("One of the fields is empty");
      return;
    }

    if (!emailPattern.test(email) || !passwordPattern.test(password)) {
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    fetch("http://localhost/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res: Response) => {
        if (res.status === 200) {
          setAuth(true);
        }

        return res.json();
      })
      .catch((error) => {
        console.error(error);
        console.log("Error");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-32 flex flex-col flex-nowrap gap-3 text-gray-700"
      noValidate
    >
      <input
        ref={emailRef}
        type="email"
        name="email"
        className="w-full rounded-md border border-solid border-gray-300 p-2 "
        placeholder="Adres email"
        autoFocus={true}
        required
      />
      <input
        ref={passwordRef}
        type="password"
        name="password"
        className="w-full rounded-md border border-solid border-gray-300 p-2 "
        placeholder="Hasło"
        value={"TestPass1@"}
        required
      />
      <input
        type="submit"
        value="Zaloguj się"
        className="w-full whitespace-normal rounded-md bg-fb-blue p-2  text-xl font-bold text-white hover:cursor-pointer hover:bg-fb-blue-dark"
      />
    </form>
  );
}

import { FormEvent, ReactNode, useRef } from "react";

export default function LoginForm(): ReactNode {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting");
    console.log(`email: ${emailRef.current?.value}`);
    console.log(`password: ${passwordRef.current?.value}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-32 flex flex-col flex-nowrap gap-3 text-gray-700"
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
        required
      />
      <input
        type="submit"
        value="Zaloguj się"
        className="w-full whitespace-normal rounded-md bg-fb-blue p-2  text-xl font-bold text-white hover:bg-fb-blue-dark"
      />
    </form>
  );
}

import { FormEvent, ReactNode } from "react";

const dayList: number[] = [];
const monthList: string[] = [
  "sty",
  "lut",
  "mar",
  "kwi",
  "maj",
  "cze",
  "lip",
  "sie",
  "paz",
  "lis",
  "gru",
];
const yearList: number[] = [];

for (let i = 1; i <= 31; i++) {
  dayList.push(i);
}

const currentYear = new Date().getFullYear();
for (let i = 0; i < 120; i++) {
  yearList.push(currentYear - i);
}

export default function SignupForm(): ReactNode {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-nowrap gap-3 text-sm text-gray-700"
    >
      <div className="flex gap-3">
        <input
          type="text"
          name="firstName"
          className="w-full rounded-md border border-solid border-gray-300 p-2 font-poppins"
          placeholder="Imię"
          required
          autoFocus={true}
        />
        <input
          type="text"
          name="lastName"
          className="w-full rounded-md border border-solid border-gray-300 p-2 font-poppins"
          placeholder="Nazwisko"
          required
        />
      </div>

      <input
        type="email"
        name="email"
        className="w-full rounded-md border border-solid border-gray-300 p-2 font-poppins"
        placeholder="Adres email"
        required
      />

      <input
        type="password"
        name="password"
        className="w-full rounded-md border border-solid border-gray-300 p-2 font-poppins"
        placeholder="Nowe hasło"
        required
      />
      <div>
        <p className="w-full pb-1 text-xs">Data urodzenia</p>
        <div className="grid h-9 grid-flow-col gap-x-3">
          <select name="day" className="rounded border border-gray-300 px-1">
            {dayList.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>

          <select name="month" className="rounded border border-gray-300 px-1">
            {monthList.map((month, index) => (
              <option key={index} value={++index}>
                {month}
              </option>
            ))}
          </select>

          <select name="year" className="rounded border border-gray-300 px-1">
            {yearList.map((year, index) => (
              <option key={index} value={++index}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <p className="w-full pb-1 text-xs">Płeć</p>
        <div className="flex w-full gap-x-3">
          <span className="flex w-1/2 rounded-md border border-gray-300 px-2">
            <label htmlFor="female" className="flex-grow leading-9">
              Kobieta
            </label>
            <input type="radio" name="gender" value="female" id="female" />
          </span>

          <span className="flex w-1/2 rounded-md border border-gray-300 px-2">
            <label htmlFor="male" className="flex-grow leading-9">
              Mężczyzna
            </label>
            <input type="radio" name="gender" value="male" id="male" />
          </span>
        </div>
      </div>

      <input
        type="submit"
        value="Zarejestruj się"
        className="mx-auto mt-3 block rounded-md bg-fb-green px-8 py-1 font-poppins text-lg font-semibold text-white hover:bg-fb-green-dark"
      />
    </form>
  );
}

import { ChangeEvent, FormEvent, ReactNode, useRef } from "react";
import { isValidEmail, isValidPassword } from "@/utils/validation";

const dayList: number[] = [];
const monthList: string[] = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "październik",
  "listopad",
  "grudzień",
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
  const fnameRef = useRef<HTMLInputElement | null>(null);
  const lnameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  let gender = "";
  const birthDate = {
    date: 0,
    month: 0,
    year: 0,
    parse(): string {
      const date = this.date < 10 ? "0" + this.date : this.date;
      const month = this.month < 10 ? "0" + this.month : this.month;
      const year = this.year;

      return `${year}-${month}-${date}`;
    },
  };

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    gender = event.target.value;
  };

  const handleBirthDateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const key = event.target.name;
    const value = parseInt(event.target.value);
    event.target.value = value.toString();

    switch (key) {
      case "day":
        birthDate.date = value;
        break;
      case "month":
        birthDate.month = value;
        break;
      case "year":
        birthDate.year = value;
        break;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fname: string = fnameRef.current?.value ?? "";
    const lname: string = lnameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    if (!fname || !lname) {
      return;
    }

    if (email?.trim() === "" || password?.trim() === "") {
      return;
    }

    if (!isValidEmail(email) || !isValidPassword(password)) {
      return;
    }

    const data = {
      firstName: fname,
      lastName: lname,
      email: email,
      password: password,
      birthDate: birthDate.parse(),
      gender: gender,
    };

    fetch("http://localhost/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-nowrap gap-3 text-sm text-gray-700"
    >
      <div className="flex gap-3">
        <input
          ref={fnameRef}
          type="text"
          name="firstName"
          className="w-full rounded-md border border-solid border-gray-300 p-2 font-poppins"
          placeholder="Imię"
          required
          autoFocus={true}
        />
        <input
          ref={lnameRef}
          type="text"
          name="lastName"
          className="w-full rounded-md border border-solid border-gray-300 p-2 font-poppins"
          placeholder="Nazwisko"
          required
        />
      </div>

      <input
        ref={emailRef}
        type="email"
        name="email"
        className="w-full rounded-md border border-solid border-gray-300 p-2 font-poppins"
        placeholder="Adres email"
        required
      />

      <input
        ref={passwordRef}
        type="password"
        name="password"
        className="w-full rounded-md border border-solid border-gray-300 p-2 font-poppins"
        placeholder="Nowe hasło"
        required
      />
      <div>
        <p className="w-full pb-1 text-xs">Data urodzenia</p>
        <div className="grid h-9 auto-cols-fr grid-flow-col gap-x-3">
          <select
            name="day"
            className="rounded border border-gray-300 px-1"
            onChange={handleBirthDateChange}
          >
            {dayList.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>

          <select
            name="month"
            className="rounded border border-gray-300 px-1"
            onChange={handleBirthDateChange}
          >
            {monthList.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>

          <select
            name="year"
            className="rounded border border-gray-300 px-1"
            onChange={handleBirthDateChange}
          >
            {yearList.map((year, index) => (
              <option key={index} value={year}>
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
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={handleGenderChange}
            />
          </span>

          <span className="flex w-1/2 rounded-md border border-gray-300 px-2">
            <label htmlFor="male" className="flex-grow leading-9">
              Mężczyzna
            </label>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={handleGenderChange}
            />
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

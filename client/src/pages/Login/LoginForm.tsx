import { ReactElement } from "react";

export default function LoginForm(): ReactElement {
  return (
    <form method="post" action="">
      <label htmlFor="email" className="block">
        Email
      </label>
      <input type="email" name="email" id="email" className="" />
    </form>
  );
}

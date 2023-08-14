import { ReactElement } from "react";

type Props = {
  children: ReactElement;
};

export default function RootLayout({ children }: Props): ReactElement {
  return (
    <div>
      <h1>Root Layout</h1>
      {children}
    </div>
  );
}

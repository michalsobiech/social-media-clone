import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export default function ResetPassword(): ReactElement {
  const { token } = useParams();

  return <div>ResetPassword {token}</div>;
}

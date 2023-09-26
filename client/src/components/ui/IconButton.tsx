import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: ClassNameValue;
};

export default function IconButton(props: Props): ReactElement {
  const { children, className, ...restProps } = props;

  return (
    <button
      className={twMerge(
        "flex h-10 w-10 items-center justify-center rounded-full bg-fb-gray-600 hover:bg-fb-gray-500 focus-visible:bg-fb-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fb-gray-100",
        className,
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

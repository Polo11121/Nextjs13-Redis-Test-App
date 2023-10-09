import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

type ButtonProps = {
  text: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, href, ...props }: ButtonProps) => {
  const buttonContent = (
    <button
      className="text-white font-bold p-3 rounded-md bg-red-600 hover:bg-red-700"
      {...props}
    >
      {text}
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

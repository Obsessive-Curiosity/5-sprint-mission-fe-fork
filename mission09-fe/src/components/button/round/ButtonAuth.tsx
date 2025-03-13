import { ReactNode, ButtonHTMLAttributes } from "react";
import ButtonRound from "./ButtonRound";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isValid: boolean;
  children: ReactNode;
}

export default function ButtonAuth({
  isValid,
  children,
  ...props
}: SubmitButtonProps) {
  return (
    <ButtonRound
      type="submit"
      className={`${
        isValid
          ? "bg-blue-500 cursor-pointer"
          : "bg-gray-400 cursor-not-allowed"
      }`}
      {...props}
    >
      {children}
    </ButtonRound>
  );
}

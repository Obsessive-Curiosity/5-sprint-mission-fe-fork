import { ReactNode, ButtonHTMLAttributes } from "react";
import ButtonRectangle from "./ButtonRectangle";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isValid: boolean;
  children: ReactNode;
}

export default function ButtonSubmit({
  isValid,
  children,
  ...props
}: SubmitButtonProps) {
  return (
    <ButtonRectangle
      type="submit"
      className={`text-base text-[#F3F4F6]
        ${
          isValid
            ? "bg-primary-100 cursor-pointer"
            : "bg-gray-400 cursor-not-allowed"
        } transition-colors duration-300 ease-in-out`}
      {...props}
    >
      {children}
    </ButtonRectangle>
  );
}

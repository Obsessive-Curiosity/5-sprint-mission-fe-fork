import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonRound({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full flex items-center justify-center py-4 rounded-3xl text-white font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

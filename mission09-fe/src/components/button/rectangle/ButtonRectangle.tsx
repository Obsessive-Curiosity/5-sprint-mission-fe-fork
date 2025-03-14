"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export default function ButtonRectangle({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-lg text-white font-semibold ${className}`}
      {...props} // type, onClick 등 기타 속성 전달
    >
      {children}
    </button>
  );
}

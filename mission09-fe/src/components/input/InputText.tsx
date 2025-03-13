"use client";

import { TRANSLATE } from "@/constants";
import {
  UseControllerProps,
  useController,
  FieldValues,
} from "react-hook-form";

interface InputProps<T extends FieldValues> extends UseControllerProps<T> {
  initValue?: string;
}

export default function InputText<T extends FieldValues>({
  initValue,
  ...props
}: InputProps<T>) {
  const { field, fieldState } = useController(props);
  const { name } = props;
  const key = name as keyof typeof TRANSLATE;
  const type = name === "email" ? "email" : "text";
  const { label, placeholder } = TRANSLATE[key];

  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor={name}
        className="text-gray-800 font-bold text-sm md:text-lg mb-3"
      >
        {label}
      </label>

      <input
        type={type}
        id={name}
        placeholder={placeholder}
        {...field}
        defaultValue={initValue}
        className={`bg-gray-100 px-6 py-4 rounded-xl outline ${
          fieldState.error
            ? "outline-error-red"
            : "outline-gray-100 focus:outline-primary-100"
        } focus:outline-2`}
      />

      {fieldState.error && (
        <p className="text-error-red text-sm font-semibold ml-4 mt-2">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
}

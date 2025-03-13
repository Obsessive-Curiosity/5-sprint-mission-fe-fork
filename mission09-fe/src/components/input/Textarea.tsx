"use client";

import { TRANSLATE } from "@/constants";
import {
  UseControllerProps,
  useController,
  FieldValues,
} from "react-hook-form";

const HEIGHT = {
  content: 282,
  comment: 104,
};

interface InputProps<T extends FieldValues> extends UseControllerProps<T> {
  initValue?: string;
}

export default function Textarea<T extends FieldValues>({
  initValue,
  ...props
}: InputProps<T>) {
  const { field, fieldState } = useController(props);
  const { name } = props;
  const translateKey = name as keyof typeof TRANSLATE;
  const heightKey = name as keyof typeof HEIGHT;
  const { label, placeholder } = TRANSLATE[translateKey];
  const height = HEIGHT[heightKey];

  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor={name}
        className="text-gray-800 font-bold text-sm md:text-lg mb-3"
      >
        {label}
        {!initValue && name === "comment" ? " 작성" : " 수정"}
      </label>

      <textarea
        id={name}
        placeholder={placeholder}
        {...field}
        defaultValue={initValue}
        style={{ height: `${height}px` }}
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

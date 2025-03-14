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
  inquiry: 104,
};

interface TextareaProps<T extends FieldValues> extends UseControllerProps<T> {
  isEditMode?: boolean;
}

export default function Textarea<T extends FieldValues>({
  isEditMode,
  ...props
}: TextareaProps<T>) {
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
        {/* 댓글 및 문의 기능이 아닐 땐 label 그대로 출력 */}
        {(name !== "comment" || name !== "inquiry") && !isEditMode && label}
        {/* 댓글 및 문의 기능일 때 초기값이 없으면 label 있으면 빈 값 */}
        {(name === "comment" || name === "inquiry") && isEditMode && ""}
      </label>

      <textarea
        id={name}
        placeholder={placeholder}
        {...field}
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

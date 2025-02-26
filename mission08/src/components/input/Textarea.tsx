"use client";

import { useState, ChangeEvent } from "react";
import { INPUT_VALID, TRANSLATE } from "@/constants";

interface TextareaProps {
  name: "content" | "comment";
}

const HEIGHT = {
  content: 282,
  comment: 104,
};

export default function Textarea({ name }: TextareaProps) {
  const [value, setValue] = useState(""); // 입력값 상태
  const [error, setError] = useState(""); // 오류 메시지 상태

  const validateInput = (inputValue: string) => {
    const trimmedValue = inputValue.trim();
    const pattern = INPUT_VALID[name].pattern;

    if (trimmedValue === "") {
      return "값을 입력해 주세요."; // 빈 값 오류 메시지
    } else if (!pattern.test(trimmedValue)) {
      return INPUT_VALID[name].message; // 패턴 불일치 오류 메시지
    }
    return ""; // 유효한 경우 오류 없음
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setError(validateInput(newValue)); // 입력할 때마다 즉시 검증
  };

  const handleBlur = () => {
    setError(validateInput(value)); // 포커스 해제 시 최종 검증
  };

  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className="text-gray-800 font-bold text-lg mb-3">
        {TRANSLATE[name].label}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        placeholder={TRANSLATE[name].placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ height: `${HEIGHT[name]}px` }}
        className={`bg-gray-100 px-6 py-4 rounded-xl border ${
          error
            ? "border-error-red"
            : "border-gray-300 focus:border-primary-100"
        } outline-none`}
      />
      {error && (
        <p className="text-error-red text-sm font-semibold ml-4 mt-2">
          {error}
        </p>
      )}
    </div>
  );
}

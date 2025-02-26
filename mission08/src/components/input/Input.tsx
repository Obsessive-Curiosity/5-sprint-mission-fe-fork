"use client";

import { useState, ChangeEvent } from "react";
import { INPUT_VALID, TRANSLATE } from "@/constants";

interface InputProps {
  type: "text" | "email";
  name: "title" | "email";
}

export default function Input({ type, name }: InputProps) {
  const [value, setValue] = useState(""); // 입력값 상태
  const [error, setError] = useState(""); // 오류 메시지 상태

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(""); // 입력 중에는 오류 메시지 초기화
  };

  const handleBlur = () => {
    const inputValue = value.trim();
    const pattern = INPUT_VALID[name].pattern;

    if (inputValue === "") {
      setError("값을 입력해 주세요."); // 빈 값 입력시 오류 메시지
    } else if (!pattern.test(inputValue)) {
      setError(INPUT_VALID[name].message); // 패턴 오류 메시지
    } else {
      setError(""); // 모든 조건을 통과하면 오류 메시지 없음
    }
  };

  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className="text-gray-800 font-bold text-lg mb-3">
        {TRANSLATE[name].label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={TRANSLATE[name].placeholder}
        required // 필수 입력 설정
        pattern={INPUT_VALID[name].pattern.source} // HTML 기본 검증 사용
        aria-required="true"
        aria-invalid={error ? "true" : "false"} // error가 있으면 "true", 없으면 "false"
        onChange={handleChange}
        onBlur={handleBlur}
        className="bg-gray-100 px-6 py-4 rounded-xl invalid:border-error-red border-gray-300 focus:ring-2 focus:ring-primary-100 outline-none"
      />
      {error && (
        <p className="text-error-red text-sm font-semibold ml-4 mt-2">
          {error}
        </p>
      )}
    </div>
  );
}

"use client";

import { TRANSLATE } from "@/constants";
import Image from "next/image";
import iconVisibilityOn from "@/assets/icons/btn_visibility_on.png";
import iconVisibilityOff from "@/assets/icons/btn_visibility_off.png";
import {
  UseControllerProps,
  useController,
  FieldValues,
} from "react-hook-form";
import { useState } from "react";

export default function Password<T extends FieldValues>({
  ...props
}: UseControllerProps<T>) {
  const { field, fieldState } = useController(props);
  const { name } = props;
  const key = name as keyof typeof TRANSLATE;
  const { label, placeholder } = TRANSLATE[key];

  // 비밀번호 보이기/숨기기 상태 관리
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // 비밀번호 보이기/숨기기 토글 함수
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor={name}
        className="text-gray-800 font-bold text-sm md:text-lg mb-3"
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={isPasswordVisible ? "text" : "password"} // 비밀번호 보이기/숨기기
          id={name}
          placeholder={placeholder}
          {...field}
          className={`w-full bg-gray-100 pl-6 pr-11 py-4 rounded-xl outline ${
            fieldState.error
              ? "outline-error-red"
              : "outline-gray-100 focus:outline-primary-100"
          } focus:outline-2 flex items-center`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="transform -translate-y-1/2 cursor-pointer absolute right-4 top-1/2"
        >
          <Image
            src={isPasswordVisible ? iconVisibilityOn : iconVisibilityOff} // 아이콘 변경
            alt="비밀번호 미리보기"
            width={24}
            height={24}
            className="bg-gray-100"
          />
        </button>
      </div>

      {fieldState.error && (
        <p className="text-error-red text-sm font-semibold ml-4 mt-2">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
}

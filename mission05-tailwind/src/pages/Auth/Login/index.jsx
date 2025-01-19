import { useRef, useState } from "react";
import InputField from "../../../common/components/InputField";
import AuthButton from "../../../common/components/AuthButton/index.jsx";
import {
  emailErrorMessage,
  passwordErrorMessage,
} from "../../../common/constants/inputErrorMessage.js";

const emailIsValid = (inputValue) => inputValue.includes("@");
const passwordValid = (inputValue) => inputValue.length > 7;

const validationRules = {
  email: emailIsValid,
  password: passwordValid,
};

export default function Login() {
  const formRef = useRef(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const formData = new FormData(formRef.current);
    const isValid = Object.entries(validationRules).every(
      ([field, validationFn]) => validationFn(formData.get(field)) // 수정된 부분
    );
    console.log("next isFormValid: ", isFormValid);
    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      console.log("submit되지 못함!");
      return;
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    // 폼 제출 로직
    e.target.reset();
  };

  return (
    <>
      <h1>로그인</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <InputField
          id="email"
          type="email"
          name="email"
          onInputChange={validateForm}
          isValid={emailIsValid}
          errorMessage={emailErrorMessage}
        />
        <InputField
          id="password"
          type="password"
          name="password"
          onInputChange={validateForm}
          isValid={passwordValid}
          errorMessage={passwordErrorMessage}
        />
        <AuthButton type="submit" isFormValid={isFormValid}>
          로그인
        </AuthButton>
      </form>
    </>
  );
}

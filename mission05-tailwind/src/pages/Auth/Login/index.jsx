import { useState } from "react";
import InputField from "../../../common/components/InputField";
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
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const isValidInput = Object.entries(validationRules).every(
      ([field, validationFn]) => validationFn(data[field])
    );
    setIsFormValid(isValidInput);

    if (!isFormValid) {
      console.log("submit되지 못함!");
      return;
    }

    console.log(data);
    e.target.reset();
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          id="email"
          type="email"
          name="email"
          isValid={emailIsValid}
          errorMessage={emailErrorMessage}
        />
        <InputField
          id="password"
          type="password"
          name="password"
          isValid={passwordValid}
          errorMessage={passwordErrorMessage}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}

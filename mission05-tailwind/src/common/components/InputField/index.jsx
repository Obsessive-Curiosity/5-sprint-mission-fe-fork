import { useEffect, useState, memo } from "react";

const InputField = memo(function InputField(props) {
  const { id, type, name, onInputChange, isValid, errorMessage } = props;
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [didEdit, setDidEdit] = useState(false);

  const handleBlur = () => setDidEdit(true); // focus 해제시 오류메시지 보여줌
  const handleChange = (e) => {
    setInputValue(() => e.target.value);
    onInputChange();
    setDidEdit(false);
  };

  useEffect(() => setIsError(!isValid(inputValue)), [inputValue, isValid]);

  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <label htmlFor={id}>{name.toUpperCase()}</label>
        <input
          id={id}
          type={type}
          name={name}
          value={inputValue}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
      {didEdit && inputValue !== "" && isError && (
        <div className="text-red-700">
          <p>{errorMessage}</p>
        </div>
      )}
    </section>
  );
});

export default InputField;

// input값이 비어 있는가?
export const isEmpty = (input) => input.value.trim() === "";

// 유효한 이메일 구조인가?
export const isValidEmail = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 검증용 정규 표현식
  const value = input.value.trim(); // 입력값 공백 제거
  return emailRegex.test(value);
};

// 비밀번호 길이가 8자리 이상인가?
export const isValidPassword = (input) => input.value.trim().length >= 8;

// 비민번호 확인이 비밀번호와 동일한가?
export const isMatchPassword = (input) =>
  passwordCheckForm.value.trim() === passwordForm.value.trim();

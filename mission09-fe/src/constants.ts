export type Name = keyof typeof INPUT_VALID;

export const INPUT_VALID = {
  title: {
    pattern: /^.{2,30}$/, // 2~30자
    message: "제목은 2자이상 30자미만으로 작성해주세요.",
  },
  content: {
    pattern: /^.{10,}$/, // 최소 10자 이상
    message: "내용은 최소 10자 이상 작성해주세요.",
  },
  comment: {
    pattern: /^.{5,}$/, // 최소 5자 이상
    message: "내용은 최소 5자 이상 작성해주세요.",
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "이메일 형식에 맞게 작성해주세요.",
  },
};

export const TRANSLATE = {
  title: { label: "제목", placeholder: "제목을 입력해주세요" },
  content: { label: "내용", placeholder: "내용을 입력해주세요" },
  comment: { label: "댓글달기", placeholder: "댓글을 입력해주세요" },

  productName: { label: "상품명", placeholder: "상품명을 입력해주세요" },
  productDescription: {
    label: "상품 소개",
    placeholder: "상품 소개를 입력해주세요",
  },
  productPrice: { label: "판매가격", placeholder: "판매 가격을 입력해주세요" },
  tag: { label: "태그", placeholder: "태그를 입력해주세요" },
  inquiry: {
    label: "문의하기",
    placeholder:
      "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.",
  },

  email: { label: "이메일", placeholder: "이메일을 입력해주세요" },
  nickname: { label: "닉네임", placeholder: "닉네임을 입력해주세요" },
  password: { label: "비밀번호", placeholder: "비밀번호를 입력해주세요" },
  passwordConfirm: {
    label: "비밀번호 확인",
    placeholder: "비밀번호를 확인해주세요",
  },
};

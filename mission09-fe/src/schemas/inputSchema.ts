import { z } from "zod";

// 상품 문의 및 게시글 댓글 공통 스키마
export const commentSchema = z
  .string()
  .min(1, "1자 이상 입력해주세요.")
  .max(100, "100자 이내로 입력해주세요.");

// 입력 폼 스키마
export const InputSchema = z.object({
  email: z.string().email("잘못된 이메일입니다."), // 이메일
  nickname: z.string().max(6, "닉네임은 6자 이내로 입력해주세요."), // 닉네임
  password: z.string().min(8, "비밀번호를 8자 이상 입력해주세요."), // 비밀번호
  passwordConfirm: z.string(), // 비밀번호 확인

  title: z.string().max(10, "10자 이내로 입력해주세요."), // 상품명, 게시글 제목
  content: z
    .string()
    .min(10, "10자 이상 입력해주세요.")
    .max(100, "100자 이내로 입력해주세요."), // 상품소개, 게시글 내용
  image: z.string(), // 상품 이미지 url

  comment: commentSchema, // 게시글 댓글
  inquiry: commentSchema, // 상품 문의

  price: z.number().min(0, "0이상의 숫자로 입력해주세요"), // 상품 가격
  tag: z.string().max(5, "5글자 이내로 입력해주세요."), // 상품 태그
});

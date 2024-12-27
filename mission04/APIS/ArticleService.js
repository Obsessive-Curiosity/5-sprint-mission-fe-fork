import { verifyParams } from "./checkError";

const baseUrl = `https://sprint-mission-api.vercel.app/articles`;
const requiredFields = {
  GET: [
    ["page", "integer"],
    ["pageSize", "integer"],
    ["keyword", "string"],
  ],
  POST: [
    ["title", "string"],
    ["content", "string"],
    ["image", "string"],
  ],
  PATCH: [
    ["title", "string"],
    ["content", "string"],
    ["image", "string"],
  ],
};

const fetchHandler = (url, method, params = null) => {
  // 공통 fetch 핸들러 함수
  const fields = requiredFields[method];
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (params) {
    verifyParams(fields, params); // params있고 GET일 땐 체크 해야함
    // GET, DELETE 요청에는 body를 포함하지 않음
    if (method !== "GET" && method !== "DELETE") options.body = JSON.stringify(params);
  }

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`); // HTTP 에러 처리
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
};

export const getArticleList = (params) => {
  // 게시글 목록 조회
  const url = new URL(baseUrl);

  for (const key in params) {
    url.searchParams.append(key, params[key]);
  }

  return fetchHandler(url, "GET");
};

export const getArticle = async (id) => {
  // 게시글 상세 조회
  const url = baseUrl + `/${id}`;

  return fetchHandler(url, "GET");
};

export const createArticle = async (params) => {
  // 게시글 등록
  const url = baseUrl;

  return fetchHandler(url, "POST", params);
};

export const patchArticle = async (id, params) => {
  // 게시글 수정
  const url = baseUrl + `/${id}`;

  return fetchHandler(url, "PATCH", params);
};

export const deleteArticle = (id) => {
  // 게시글 삭제
  const url = baseUrl + `/${id}`;

  return fetchHandler(url, "DELETE");
};

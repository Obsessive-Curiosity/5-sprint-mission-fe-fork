import apiMission from "./axiosDefault.js";
import { isEmpty } from "./checkError.js";

const endPoint = "products";

const initParams = (params) => {
  const defaultParams = {
    page: 1,
    pageSize: 1000,
  };

  params.page = isEmpty(params.page) ? defaultParams.page : params.page;
  params.pageSize = isEmpty(params.pageSize) ? defaultParams.pageSize : params.pageSize;

  return params;
};

export const getItemList = async (params) => {
  // 상품 목록 조회
  initParams(params); // 파라미터 값이 없을 시 초기화

  const url = endPoint;
  const response = await apiMission.get(url, { params });
  const result = response.data;

  return result;
};

export const getItem = async (id) => {
  // 상품 상세 조회
  const url = endPoint + `/${id}`;
  const response = await apiMission.get(url);
  const result = response.data;

  return result;
};

export const createItem = async (data) => {
  // 상품 등록
  data = verifyData(data);

  try {
    const url = endPoint;
    const response = await apiMission.post(url, data);
    const result = response.data;
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const patchItem = async (id, data) => {
  // 게시글 수정
  data = verifyData(data);

  try {
    const url = endPoint + `/${id}`;
    const response = await apiMission.patch(url, data);
    const result = response.data;
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteItem = async (id) => {
  // 게시글 삭제
  try {
    const url = endPoint + `/${id}`;
    await apiMission.delete(url);
  } catch (error) {
    throw new Error(error.message);
  }
};

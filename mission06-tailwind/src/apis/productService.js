// 상품 APIs
import LocalService from "./LocalService.js";
const endPoint = "products";
const ProductService = new LocalService(endPoint);

// 상품 API 메서드 내보내기
export const {
  getResourceList: getProductList,
  getResource: getProduct,
  createResource: createProduct,
  updateResource: updateProduct,
  deleteResource: deleteProduct,
} = ProductService;

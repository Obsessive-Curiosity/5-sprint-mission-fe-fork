import { apiLocal } from "./setAxiosDefault.js";

class LocalService {
  constructor(endPoint) {
    this.endPoint = endPoint;
  }

  async request(method, url, data) {
    const response = await apiLocal[method](url, data);
    return response.data;
  }

  getResourceList = (params) => this.request("get", this.endPoint, { params });
  getResource = (id) => this.request("get", `${this.endPoint}/${id}`);
  createResource = (data) => this.request("post", this.endPoint, data);
  updateResource = (id, data) =>
    this.request("patch", `${this.endPoint}/${id}`, data);
  deleteResource = (id) => this.request("delete", `${this.endPoint}/${id}`);
}

export default LocalService;

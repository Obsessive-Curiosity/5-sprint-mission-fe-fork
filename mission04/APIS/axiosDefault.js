import axios from "axios";

const apiDefault = (baseURL) => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// 요청 인터셉터
const requestInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      // 쿼리 설정
      config.params = {
        ...config.params,
      };
      return config;
    },
    (error) => {
      // 요청 인터셉터에서 발생한 에러 처리
      console.error("Request interceptor error:", error); // 요청 실패 시 에러를 전달
      return Promise.reject(error);
    }
  );
};

// 응답 인터셉터
const responseInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => response, // 성공 응답 처리
    (error) => {
      if (error.response) {
        if (error.response.status === 404) {
          console.error("404 에러: 리소스를 찾을 수 없습니다. 이미 삭제되었을 수 있습니다.");
          return Promise.resolve(null); // null 반환 또는 다른 값으로 처리
        }
        console.error(`에러 응답: ${error.response.status} - ${error.response.statusText}`);
      } else if (error.request) {
        console.error("요청은 전송되었으나 응답을 받지 못했습니다.");
      } else {
        console.error(`요청 설정 중 에러 발생: ${error.message}`);
      }
    }
  );
};

const apiMission = apiDefault("https://sprint-mission-api.vercel.app/");
requestInterceptor(apiMission);
responseInterceptor(apiMission);

export default apiMission;

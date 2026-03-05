import axios, { type AxiosError } from "axios";
import type { ApiError } from "../types/api.types";

const BASE_URL = import.meta.env.VITE_BACKEND;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    request.headers.authorization = `Bearer ${sessionStorage.getItem("token") ?? ""}`;
    return request;
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    const data = error.response?.data;
    const message = data?.message ?? error.message ?? "알 수 없는 오류";
    const isUserError = data?.isUserError ?? false;
    // eslint-disable-next-line no-console
    console.log("RESPONSE ERROR", error);
    return Promise.reject({ message, isUserError });
  },
);

export default api;

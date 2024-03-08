import axios from "axios";
import useSWR from "swr";

export const API = import.meta.env.VITE_API || "https://dummyjson.com/";

const http = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    Authorization: localStorage.getItem("token") || "Bearer token",
  },
});

export const useHttp = (
  url: string,
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  body?: any,
) => {
  const fetcher = async () => {
    try {
      const res = await http.request({
        url,
        method: method || "GET",
        data: body,
      });

      return res.data;
    } catch (error: any) {
      if (error.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }

      throw error;
    }
  };

  return useSWR(url, fetcher);
};

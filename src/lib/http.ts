import axios from "axios";
import { toast } from "sonner";

const API = import.meta.env.VITE_API || "http://localhost:3000";

const http = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    Authorization: localStorage.getItem("token") || "Bearer token",
  },
});

export const fetcher = (url: string) => http.get(url).then((res) => res.data);

export const asyncRedirect = async (url: string) => {
  toast.success("Success! Redirecting...", {
    description: `You will be redirected to ${url} in 3 seconds.`,
  });

  setTimeout(() => {
    window.location.href = url;
  }, 3000);
};

export const httpError = (error: any) => {
  if (error.response.status === 401) {
    location.href = "/login";
    localStorage.removeItem("token");
  }

  let errorMessage = "Something went wrong!";
  let errorDescription = "Please try again later.";

  if (error.response) {
    const { message, errors } = error.response.data;

    message && (errorMessage = message);
    errors && (errorDescription = JSON.stringify(errors));
  } else if (error.request) {
    errorMessage = error.request;
  } else {
    errorMessage = error.message;
  }

  toast.error(errorMessage, {
    description: errorDescription,
  });
};

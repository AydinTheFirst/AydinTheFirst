import { signal } from "@preact/signals-react";

const toastExpireTime = 5000;

export type Toast = {
  id?: number;
  message: string;
  type: "success" | "error";
};

export const ToastCache = signal<Toast[]>([]);

export const removeToast = (id: number) => {
  ToastCache.value = ToastCache.value.filter((toast) => toast.id !== id);
};

export const toast = (payload: Toast) => {
  const newToast = {
    id: Date.now(),
    ...payload,
  };

  ToastCache.value = [...ToastCache.value, newToast];

  setTimeout(() => {
    removeToast(newToast.id);
  }, toastExpireTime);
};

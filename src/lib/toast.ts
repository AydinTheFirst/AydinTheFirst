import { signal } from "@preact/signals-react";

const toastExpireTime = 5000;

export type Toast = {
  id?: number;
  message: string;
  type: "success" | "error";
};

export const ToastCache = signal<Toast[]>([]);

export const toast = (payload: Toast) => {
  const newToast = {
    id: Date.now(),
    ...payload,
  };

  ToastCache.value = [...ToastCache.value, newToast];

  setTimeout(() => {
    ToastCache.value = ToastCache.value.filter(
      (toast) => toast.id !== newToast.id,
    );
  }, toastExpireTime);
};

import { Toast, ToastCache } from "@/lib/toast";
import { Card, CardBody } from "@nextui-org/react";

import "./toast.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export const ToastWrapper = () => {
  return (
    <>
      <div className="fixed bottom-0 end-0 m-3 overflow-hidden">
        <div className="flex flex-col justify-end gap-1">
          {ToastCache.value.map((toast, index) => {
            return <ToastComponent key={index} {...toast} />;
          })}
        </div>
      </div>
    </>
  );
};

const ToastComponent = (toast: Toast) => {
  return (
    <Card className="toast min-w-40 max-w-md">
      <CardBody>
        <div className="flex items-center gap-3 text-lg font-bold">
          {toast.type === "success" ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <FaCircleXmark className="text-red-500" />
          )}
          <h1>{toast.type === "success" ? "Success" : "Error"}</h1>
        </div>
        <div className="flex gap-3">
          <FaCheckCircle className="invisible" />
          <p className="text-small font-semibold text-default-500">
            {toast.message}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

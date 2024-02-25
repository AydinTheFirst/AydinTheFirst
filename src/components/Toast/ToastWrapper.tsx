import { Toast, ToastCache, removeToast } from "@/lib/toast";
import { Button, Card, CardBody } from "@nextui-org/react";

import "./toast.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark, FaXmark } from "react-icons/fa6";

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
  const handleClick = () => {
    removeToast(toast.id!);
  };

  return (
    <Card className="toast min-w-40 max-w-md">
      <CardBody>
        <div className="row g-3">
          <div className="col-1 flex items-center">
            {toast.type === "success" ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <FaCircleXmark className="text-red-500" />
            )}
          </div>
          <div className="col flex">
            <p className="text-sm">
              {toast.message}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At totam,
              quibusdam beatae, optio, quasi fugit praesentium consectetur
              doloribus temporibus possimus vitae nesciunt vero dolor ipsa dicta
              ipsum nisi nemo eius?
            </p>
          </div>
          <div className="col-1 flex justify-end">
            <Button variant="light" onClick={handleClick} isIconOnly>
              <FaXmark />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="my-10 flex justify-center">
        <div className="col-md-6">
          <h1 className="text-center text-lg font-bold">
            {new Date().getFullYear()} © Halil Aydın. All rights reserved.
          </h1>
        </div>
      </div>
    </>
  );
};

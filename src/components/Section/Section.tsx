import React from "react";

export const Section = ({
  children,
  height,
  id,
}: {
  children: React.ReactNode;
  height?: string;
  id?: string;
}) => {
  return (
    <>
      <section
        id={id}
        className="container flex flex-col items-center justify-center"
        style={{
          minHeight: height || "100dvh",
        }}
      >
        {children}
      </section>
    </>
  );
};

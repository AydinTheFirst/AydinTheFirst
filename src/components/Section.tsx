import React from "react";

export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section
        className="container flex flex-col items-center justify-center"
        style={{
          minHeight: "100vh",
        }}
      >
        {children}
      </section>
    </>
  );
};

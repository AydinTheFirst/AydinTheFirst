import { cn } from "@nextui-org/react";
import React from "react";

export const Section = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  return (
    <>
      <section
        id={id}
        className={cn(
          "container flex min-h-screen flex-col items-center justify-center",
          className,
        )}
      >
        {children}
      </section>
    </>
  );
};

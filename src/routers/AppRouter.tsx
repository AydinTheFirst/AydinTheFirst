import { Route, Routes } from "react-router-dom";

import { NotFound } from "@/pages/NotFound";
import { App } from "@/pages/App";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

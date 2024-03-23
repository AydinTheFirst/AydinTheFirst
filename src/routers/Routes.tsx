import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { DashboardRouter } from "./DashboardRouter";
import { NotFound } from "@/pages/NotFound";
import { App } from "@/pages/App";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/*" element={<AuthRouter />} />
          <Route path="/dashboard/*" element={<DashboardRouter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

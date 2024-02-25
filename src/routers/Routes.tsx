import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { AuthRouter } from "./AuthRouter";
import { DashboardRouter } from "./DashboardRouter";
import { NotFound } from "@/pages/NotFound";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppRouter />} />
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/dashboard/*" element={<DashboardRouter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

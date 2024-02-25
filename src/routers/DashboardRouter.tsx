import { Route, Routes } from "react-router-dom";

import { NotFound } from "@/pages/NotFound";
import { Dashboard } from "@/pages/dashboard/Dashboard";
import { Users } from "@/pages/dashboard/Users";

export const DashboardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

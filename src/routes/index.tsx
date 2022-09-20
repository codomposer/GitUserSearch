import { Routes, Route } from "react-router-dom";

import MainLayout from "layout/mainlayout";

import Profile from "pages/profile";
import History from "pages/history";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;

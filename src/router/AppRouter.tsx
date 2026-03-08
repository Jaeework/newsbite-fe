import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import AppLayout from "../components/layout/AppLayout";
import NewsDetailPage from "../pages/NewsDetailPage/NewsDetailPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;

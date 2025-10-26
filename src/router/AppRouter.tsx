import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "@/App.tsx";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));
const Resume = lazy(() => import("@/pages/Resume"));

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

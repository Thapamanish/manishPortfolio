import React from "react";
import { Route, HashRouter, Routes, Outlet } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Error404 from "../pages/errors/error404/Error";

export default function Main({ theme }) {
  console.log(theme);

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Splash theme={theme} />} />
            <Route path="home" element={<Home theme={theme} />} />
            <Route path="experience" element={<Experience theme={theme} />} />
            <Route path="education" element={<Education theme={theme} />} />
            <Route path="opensource" element={<Opensource theme={theme} />} />
            <Route path="contact" element={<Contact theme={theme} />} />
            <Route path="projects" element={<Projects theme={theme} />} />
            <Route path="*" element={<Error404 theme={theme} />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

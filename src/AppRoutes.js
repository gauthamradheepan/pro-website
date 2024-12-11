import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Certifications } from "./components/Certifications";
import ProjectDetails from "./components/ProjectDetails";

const AppRoutes = () => (
  <AnimatePresence mode="wait">
    <Routes>
      {/* Default Home Page */}
      <Route
        path="/"
        element={
          <>
            <Banner />
            <Skills />
            <Project />
            <Certifications />
            <Contact />
          </>
        }
      />

      {/* Project Details Page */}
      <Route
        path="/projects/:projectId"
        element={
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <ProjectDetails />
          </motion.div>
        }
      />
    </Routes>
  </AnimatePresence>
);

export default AppRoutes;

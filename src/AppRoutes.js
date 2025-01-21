import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NavBar } from "./components/NavBar.js";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Certifications } from "./components/Certifications";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";  // Import ScrollToTop

const zoomTransition = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  exit: { scale: 0.95, opacity: 0, transition: { duration: 0.5 } },
};

const AppRoutes = () => (
  <>
    <ScrollToTop /> {/* Add ScrollToTop here */}
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Banner />
              <Skills />
              <Project />
              <Certifications />
              <Contact />
            </>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={zoomTransition}
              style={{
                width: 'relative',
                height: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ProjectDetails />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  </>
);

export default AppRoutes;

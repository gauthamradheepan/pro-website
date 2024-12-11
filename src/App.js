import logo from './logo.svg';
import './App.css';
import { AnimatePresence, motion } from "framer-motion";
import { NavBar } from "./components/NavBar.js";
import { Banner } from "./components/Banner.js";
import { Skills } from "./components/Skills.js";
import { Project } from "./components/Project.js";
import { Contact } from "./components/Contact.js";
import {Certifications} from "./components/Certifications.js";
import AppRoutes from "./AppRoutes";
import ProjectDetails from "./components/ProjectDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <AppRoutes />
        
      </div>
    </Router>
  );
}

export default App;

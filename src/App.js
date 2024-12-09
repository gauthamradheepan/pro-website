import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar.js";
import { Banner } from "./components/Banner.js";
import { Skills } from "./components/Skills.js";
import { Project } from "./components/Project.js";
import { Contact } from "./components/Contact.js";
import ProjectDetails from "./components/ProjectDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* Define your routes here */}
        <Routes>
          {/* Default page */}
          <Route 
            path="/" 
            element={
              <>
                <Banner />
                <Skills />
                <Project />
                <Contact />
              </>
            } 
          />

          {/* Route for Project Details */}
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

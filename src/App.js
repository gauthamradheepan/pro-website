import logo from './logo.svg';
import './App.css';
import {NavBar}  from "./components/NavBar.js";
import {Banner} from "./components/Banner.js";
import {Skills} from "./components/Skills.js";
import {Project} from "./components/Project.js";
import {Contact} from "./components/Contact.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      
    </div>
  );
}

export default App;

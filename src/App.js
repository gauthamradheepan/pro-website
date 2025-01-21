
import './App.css';

import EndCard from "./components/EndCard";
import AppRoutes from "./AppRoutes";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <AppRoutes />
        <EndCard />
      </div>
    </Router>
  );
}

export default App;

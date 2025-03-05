import "./App.css";
//import Link from "./shared/Link";
import { HomePage } from "./pages";
import { JokesPage } from "./pages";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { React, useState } from "react"

function App(props) {

  return (
    <Router>
    <nav>
      <ul>
        <li>
          <NavLink 
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/">Home</NavLink>
          </li>
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? "active" : null)}
            to="jokes">Jokes</NavLink>
          </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="jokes" element={<JokesPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

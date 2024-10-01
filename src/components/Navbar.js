import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Juan Camilo Restrepo</h2>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

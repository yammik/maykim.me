import React, { useState } from "react";
import "./App.scss";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Profile from "./Profile";
import Blogs from "./Blogs";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Hamburger from "./Hamburger";

function App() {
  return (
    <div className="App">
      {/* TODO: make hamburger expand and list sections */}
      {/* TODO: make hamburger link to jump to sections */}
      <Hamburger />
      <Landing />
      <About />
      <Projects />
      <Profile />
      <Blogs />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;

// TODO: make menu togglable by hamburger

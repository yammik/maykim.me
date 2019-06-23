import React from "react";
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

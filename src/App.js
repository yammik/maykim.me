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
  const projects = [
    {
      title: "title one",
      desc: `Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.`,
      tagline: "because example",
      imgURL:
        "https://www.google.com/logos/doodles/2019/2019-womens-world-cup-day-14-5612233271279616-s.png"
    },
    {
      title: "send doods",
      desc: `Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.`,
      tagline: "because example",
      imgURL:
        "https://www.google.com/logos/doodles/2019/2019-womens-world-cup-day-14-5612233271279616-s.png"
    }
  ];

  return (
    <div className="App">
      <Hamburger />
      <Landing />
      <About />
      <Projects projects={projects} />
      <Profile />
      <Blogs />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;

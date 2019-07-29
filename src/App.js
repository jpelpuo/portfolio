import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Navigation from "./components/Navigation";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer";
import Skills from "./components/pages/Skills";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <div
        className="spy"
        data-spy="scroll"
        data-target=".navbar"
        data-offset="10"
      >
        <Header />
        <Navigation />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact/>
        <Footer />
      </div>
    </div>
  );
}

export default App;

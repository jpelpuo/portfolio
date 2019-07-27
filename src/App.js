import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Navigation from "./components/Navigation";
import About from './components/pages/About'
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <div className="container-fluid no-gutters">
          <Header/>
          <Navigation/>
          <div className="tab-content">
              <About tabPane="tab-pane" topPadding="pt-2 pt-md-1"/>
          </div>
          <Footer/>
      </div>
    </div>
  );
}

export default App;

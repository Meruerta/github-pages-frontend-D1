import React from 'react';
import Tabs from './components/Tabs';
import './App.css';


function App() {

  let openHelp = () => {
    document.getElementById("help").style.color = "#8DBF26"
    document.getElementById("help-drop").style.display = "inherit";
    document.getElementById("help-drop").style.boxShadow = "0 0 2px 1px #c9c9c9"
  };
  let closeHelp = () => {
    document.getElementById("help").style.color = "inherit"
    document.getElementById("help-drop").style.display = "none";
  };

  let openUser = () => {
    document.getElementById("user").style.color = "#8DBF26"
    document.getElementById("user-drop").style.display = "inherit";
    document.getElementById("user-drop").style.boxShadow = "0 0 2px 1px #c9c9c9"
  }

  let closeUser = () => {
    document.getElementById("user").style.color = "inherit"
    document.getElementById("user-drop").style.display = "none";
  }


  return (
    <div className="grid-container">
      <header className="flex-container" id="nav">
        <a href="index.html"><img alt="DIREKTIN" className="logo" src="/images/direktin logo grau.png" /></a>
        <div className="flex-container" id="navbar">
          <div className="nav-container">
            <button className="upgradebtn" id="upgradebtn">UPGRADE TO PREMIUM</button>
          </div>
          <div onMouseOver={openHelp} onMouseOut={closeHelp} className="nav-container">
            <a href="#help" className="dropbtn" id="help">HELP</a>
            <div className="dropdown-content" id="help-drop">
              <a href="index.html">Question number 1</a>
              <a href="index.html">Question number 2</a>
              <a href="index.html">Question number 3</a>
            </div>
          </div>
          <div onMouseOver={openUser} onMouseOut={closeUser} className="nav-container">
            <a href="#user-profile" className="dropbtn" id="user">Name Lastname</a>
            <div className="dropdown-content" id="user-drop">
              <a href="index.html">What is love?</a>
              <a href="index.html">Baby, don't hurt me</a>
              <a href="index.html">Don't hurt me, no more</a>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-container" id="bomnav">
        <div className="flex-container" id="bnLeft">
          <span><a href="index.html" className="bomnav-button" id="create-button">+ Create BOM</a></span>
          <span><a href="index.html" className="bomnav-button" id="base-button">Knowledge base</a></span>
        </div>
        <div id="bnRight">
          <a href="index.html" className="bomnav-button" id="region-button">Choose your region</a>
        </div>
      </div>
      <div id="dashboard-left">
        <Tabs>
          <div label="My BOMs">
            <h1>My BOMs</h1>
            <ul>
              <li>
                <a href="index.html">Name of the Bom 1</a>
              </li>
              <li>
                <a href="index.html">Name of the Bom 2</a>
              </li>
              <li>
                <a href="index.html">Name of the Bom 3</a>
              </li>
            </ul>
          </div>
          <div label="Planning production">
            <h1>My suppliers</h1>
            <ul>
              <li>
                <a href="index.html">2021</a>
              </li>
              <li>
                <a href="index.html">2022</a>
              </li>
              <li>
                <a href="index.html">2023</a>
              </li>
            </ul>
          </div>
          <div label="Documentation">
            <h1>My saved projects</h1>
            <ul>
              <li>
                <a href="index.html">Terms</a>
              </li>
              <li>
                <a href="index.html">Contracts</a>
              </li>
            </ul>
          </div>
        </Tabs>
      </div>
      <div className="flex-container" id="dashboard-right">
        <h1>Discover our engineering TOOLs library</h1>
        <div className="flex-container" id="tools">
          <div className="tool">
            <a href="index.html">system parameters calculator</a>
          </div>
          <div className="tool">
            <a href="index.html">energy efficient design</a>
          </div>
          <div className="tool">
            <a href="index.html">distribution line design</a>
          </div>
          <div className="tool">
            <a href="index.html">temperature control</a>
          </div>
          <div className="tool">
            <a href="index.html">air quality control</a>
          </div>
          <div className="tool">
            <a href="index.html">ECO design</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

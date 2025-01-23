import React, { useState } from "react";
import classes from "./App.module.css";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showProject, setShowProject] = useState(false);

  function HomeHandler() {
    setShowHome(true);
    setShowContact(false);
    setShowMenu(false);
    setShowProject(false);
  }

  function ContactHandler() {
    setShowContact(true);
    setShowHome(false);
    setShowMenu(false);
    setShowProject(false);
  }

  function MenuHandler() {
    setShowMenu(true);
    setShowHome(false);
    setShowContact(false);
    setShowProject(false);
  }
  function ProjectHandler() {
    setShowProject(true);
    setShowMenu(false);
    setShowHome(false);
    setShowContact(false);
  }

  return (
    <>
      <header>
        <Navigation
          homeHandler={HomeHandler}
          contactHandler={ContactHandler}
          menuHandler={MenuHandler}
        ></Navigation>
      </header>
      {showHome && (
        <div className={classes.App}>
          <div className={classes.b}>
            <div className={classes.b_left}>
              <h1>
                welcome to <br></br>ICE MAGIC
              </h1>
            </div>
            <div className={classes.b_right}></div>
          </div>
        </div>
      )}

      {showContact && <Contact></Contact>}
      {showMenu && <Menu></Menu>}
    </>
  );
}

export default App;

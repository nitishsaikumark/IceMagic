import React, { useState } from "react";
import CartButton from "./Cart/CartButton";
import classes from "./Navigation.module.css";
import Modal from "./UI/Modal";

function Navigation(props) {

  const [navcolor,setNavcolor] = useState(false);
  const [showModal,setShowModal] = useState(false);

  function modalHandler() {
    console.log("modal clicked");
    setShowModal(!showModal);
  }

  function NavColorHandler(event) {
    console.log("in nav handler");
    if(window.scrollY > 80)
    setNavcolor(true);
    else
    setNavcolor(false);
  }

  window.addEventListener('scroll', NavColorHandler);

  function HomeHandler(event) {
    props.homeHandler();
}

function MenuHandler(event) {
  props.menuHandler();
}

function ContactHandler(event) {
    props.contactHandler();
}

function ProjectHandler(event) {
  props.projectHandler();
}
  return (
    <div>
      {showModal && <Modal onClose={modalHandler}></Modal>}
      {!showModal &&
      <nav className={`${classes["navigation"]} ${navcolor && classes.changebg}`}>  
        <div className={classes.i_left}>
          <p>ICE MAGIC</p>
        </div>
        <div className={classes.i_right}>
          <ul className={classes.navlist}>
            <button className={classes.navitem} onClick={HomeHandler}>Home</button>
            <button className={classes.navitem} onClick={MenuHandler}>Menu</button>
            <CartButton onCLICK={modalHandler}></CartButton>
            <button className={classes.navitem} onClick={ContactHandler}>Contact</button>
          </ul>
        </div>
      </nav>}
    </div>
  );
}

export default Navigation;

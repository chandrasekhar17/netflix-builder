import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      transitionNavBar();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        transitionNavBar();
      });
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src={require('./assets/images/Netflix-logo-red-black-png.png')}
      
          alt="Netflix-logo"
        />
        <img
          className="nav_avatar"
          src={require('./assets/images/netflic-avatar.png')}
          alt="Netflix-subscription-logo"
        />
      </div>
    </div>
  );
}

export default Nav;

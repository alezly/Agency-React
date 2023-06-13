import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import Nav from "./Nav.js";

const Home = () => {

  let location = useLocation();
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //use effect
  React.useEffect(() => {
    setState({ clicked: false, menuName: "Menu" });
  }, [location]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };
  return (
    <header>
      <div className="Container">
        <button disabled={disabled} onClick={handleMenu} className="menubtn">
          {state.menuName}
        </button>
      </div>
      <Nav state={state} />
    </header>
  );
}

export default Home;

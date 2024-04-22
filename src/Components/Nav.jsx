// Nav.js
import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = ({ dispatch, state }) => {
  return (
    <div className="nav" style={{ backgroundColor: state.darkmode ? "black" : "white" }}>
      <div className="left">
        <h3>TextUtils</h3>
        <ul>
          <NavLink to="/" activeClassName="active"><li>Home</li></NavLink>
          <NavLink to="/AboutUs" activeClassName="active"><li>About</li></NavLink>
          <NavLink to="/Contact" activeClassName="active"><li>Contact</li></NavLink>
        </ul>
      </div>
      <div className="right">
        <button onClick={() => {
          dispatch({ type: "darkmode", payload: true })
        }}>Dark mode</button>
      </div>
    </div>
  )
}

export default Nav;

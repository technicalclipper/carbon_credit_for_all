import React, { useState } from "react";


function Header() {
  return (
   <div className="navbar">
    <div className="navbar-component">
        <img src="images/home.png"/>
        <p>Home</p>
    </div>
    <div className="navbar-component">
        <img src="images/tree.png"/>
        <p>MyPlants</p>
    </div>
    <div className="navbar-component">
        <img src="images/trophy.png"/>
        <p>Leaderboard</p>
    </div>
    <div className="navbar-component">
        <img src="images/sun.png"/>
        <p>Marketplace</p>
    </div>
    <div className="navbar-component">
        <img src="images/person.png"/>
        <p>Profile</p>
    </div>
   </div>
  );
}

export default Header;

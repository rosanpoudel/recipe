import React from "react";

import { Link } from 'react-router-dom';



function Nav() {
  return (
    <header>
      <div className="container">
        <div className="navigation-bar">
          <Link to='/' exact='true' ><h1 className="nav-text">FoodHub</h1></Link>

        </div>
      </div>
    </header>
  );
}

export default Nav;

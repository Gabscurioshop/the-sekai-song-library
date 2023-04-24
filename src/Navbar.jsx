import React from "react";
import { Link } from "react-router-dom";

//Navigation Bar Template
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
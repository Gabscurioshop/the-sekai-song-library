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
        <li>
          <Link to="/units">Units</Link>
        </li>
        <li>
          <Link to="/singers">Singers</Link>
        </li>
        <li>
          <Link to="/songs">Songs</Link>
        </li>
        <li>
          <Link to="/charts">Charts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About Us</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </nav>
  );
}

export default Navbar;

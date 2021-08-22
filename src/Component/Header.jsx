import React from "react";
import logo from "../assets/images/logo.jpg";
const Header = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <div>
            <img src={logo} alt="toDo" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

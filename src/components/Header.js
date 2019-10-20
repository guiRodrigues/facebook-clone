// stateless functional component
import React from "react";
import { FaUser } from "react-icons/fa";

import logo from "../assets/facebook-logo.png";

function Header() {
  return (
    <header>
      <img className={"logo"} src={logo} alt={"Facebook logo"} />
      <div className={"profile-config"}>
        <span>Meu perfil</span>
        <FaUser />
      </div>
    </header>
  );
}

export default Header;

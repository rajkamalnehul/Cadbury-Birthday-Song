import React from "react";
import Logo from "../../assets/images/cadbury-logo.png";
import Logo2 from "../../assets/images/birthday-song-logo.png";
import HamburgerIcon from "../../assets/icons/hamburger.png";

function Navbar() {
  return (
    <div className="flex justify-between px-4 py-1 gap-4 items-center bg-[#320071]">
      <div className="flex items-center w-64">
        <div>
          <img src={Logo} />
        </div>
        <div>
          <img src={Logo2} />
        </div>
      </div>
      <div>
        <img src={HamburgerIcon} className="w-[40px]" />
      </div>
    </div>
  );
}

export default Navbar;

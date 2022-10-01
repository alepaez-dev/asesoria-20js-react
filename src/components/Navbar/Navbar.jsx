import React from 'react'
import HamburgerMenuIcon from "../../assets/icons/HamburgerMenu"

import "./Navbar.css"

// Cambia una prop de un componente, y el componente se vuelve a renderizar.
const Navbar = ({ isMobile }) => {
  console.log("is Mobile en navbar", isMobile)
  return (
    <div>
      {isMobile && <HamburgerMenuIcon />}
      <span>logo</span>
    </div>
  )
}

export default Navbar
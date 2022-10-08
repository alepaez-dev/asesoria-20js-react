import React from "react";
import Input from "../Input";
import Logo from "../Logo";
import Button from "../Button";
import ProfilePicture from "../ProfilePicture";
import HamburgerMenuIcon from "../../assets/icons/HamburgerMenu";

import "./Navbar.css";

// Cambia una prop de un componente, y el componente se vuelve a renderizar.
const Navbar = ({ isMobile }) => {
    return (
        <div className="navbar-container">
            <div className="left-side-navbar">
                {isMobile && <HamburgerMenuIcon />}
                <Logo />
                <Input />
            </div>
            <div className="right-side-navbar">
                <Button text="Create post" className="btnPrimary" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="a5dxzmj1wmtef5e5v5l8cz7o3a285ppi"
                >
                    <title id="a5dxzmj1wmtef5e5v5l8cz7o3a285ppi">
                        Notifications
                    </title>
                    <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                </svg>
                <ProfilePicture src="https://res.cloudinary.com/practicaldev/image/fetch/s--AXy44ilE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/524643/51335c13-9e18-4f85-becf-71c773eb4866.png" />
            </div>
        </div>
    );
};

export default Navbar;

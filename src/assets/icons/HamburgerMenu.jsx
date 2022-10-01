import React from "react";

const HamburgerMenu = ({ width = "24", height = "24" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="a14qsktir7emcgth0cc8bk7ajcd8pe5d"
        >
            <title id="a14qsktir7emcgth0cc8bk7ajcd8pe5d">Navigation menu</title>
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
        </svg>
    );
};

export default HamburgerMenu;

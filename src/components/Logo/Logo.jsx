import React from "react";

// Cambia una prop de un componente, y el componente se vuelve a renderizar.
const Logo = () => {
    return (
        <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="no logo"
            style={{
              maxWidth: "40px"
            }}
        />
    );
};

export default Logo;

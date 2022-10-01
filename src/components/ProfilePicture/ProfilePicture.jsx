import React from "react";
import "./ProfilePicture.css" 

const ProfilePicture = ( { src }) => {
    return (
        <img
            className="imgProfile"
            src={src}
            alt=""
        />
    );
};

export default ProfilePicture;

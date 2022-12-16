import React from "react";
import NoUserImg from "./User.svg";
import "./Avatar.css";

const Avatar = ({ src, active, size, alt }) => {
  return (
    <div>
      <img
        className={`AvatarImage--${size} img-object-border`}
        src={active ? src : NoUserImg}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;

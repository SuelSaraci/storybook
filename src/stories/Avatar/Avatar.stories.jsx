import React from "react";
import AvatarImage from "../BreadCrumb/Avatar.svg";

import Avatar from "./Avatar";

const Base = ({ ...props }) => <Avatar {...props} />;

export const ActiveUser = () => (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Base active src={AvatarImage} size="small" alt="AvatarImage" />
    <Base active src={AvatarImage} size="medium" alt="AvatarImage" />
    <Base active src={AvatarImage} size="large" alt="AvatarImage" />
  </div>
);

export const DeactiveUser = () => (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Base size="small" alt="AvatarImage" />
    <Base size="medium" alt="AvatarImage" />
    <Base size="large" alt="AvatarImage" />
  </div>
);

import React from "react";
import Avatar from "./Avatar.svg";
import Breadcrumbs from "./BreadCrumb";

const pagesFirst = [];

const pagesSecond = [{ name: "Projects", href: "#" }];

const pagesThird = [
  { name: "Projects", href: "#" },
  { name: "Project Nero", href: "#" },
];

const Base = ({ ...props }) => <Breadcrumbs {...props} />;

export const BreadCrumbOne = () => (
  <div>
    <Base pages={pagesFirst} userImg={Avatar} />
  </div>
);

export const BreadCrumbTwo = () => (
  <div>
    <Base pages={pagesSecond} userImg={Avatar} />
  </div>
);

export const BreadCrumbThree = () => (
  <div>
    <Base pages={pagesThird} userImg={Avatar} />
  </div>
);

import React from "react";
import Icon from "./Icon.png";
import UserIcon from "./userIcon.png";
import Button, { ButtonProps } from "./Button.tsx";

export default {
  title: "Button",
  component: Button,
};

const Buttons: React.FC<ButtonProps> = (props) => <Button {...props} />;

export const ButtonWithoutIcon = () => (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Buttons type="white">Astronomy</Buttons>
    <Buttons type="light-gray">Astronomy</Buttons>
    <Buttons type="white" shadow>
      Astronomy
    </Buttons>
    <Buttons type="white" disabled>
      Astronomy
    </Buttons>
  </div>
);

export const ButtonIcon = () => (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Buttons Icon={Icon} type="white">
      Astronomy
    </Buttons>
    <Buttons Icon={Icon} type="light-gray">
      Astronomy
    </Buttons>
    <Buttons Icon={Icon} type="white" shadow>
      Astronomy
    </Buttons>
    <Buttons Icon={Icon} type="white" disabled>
      Astronomy
    </Buttons>
  </div>
);

export const ArchivedButton = () => (
  <div>
    <Buttons Icon={UserIcon} type="dark-gray">
      Archived
    </Buttons>
  </div>
);

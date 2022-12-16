import React from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  type: string;
  disabled: boolean;
  shadow: boolean;
  args: any;
  Icon?: string;
}

function Button({ children, type, disabled, shadow, args, Icon }: ButtonProps) {
  const className = `
    button
    button--${type} 
    ${shadow ? "button--shadow" : ""}
    ${disabled ? "button--disabled" : ""}
  `.trim();

  return (
    <button disabled={disabled} {...args} className={className}>
      {Icon && <img src={Icon} alt="icon" />}
      {children}
    </button>
  );
}

export default Button;

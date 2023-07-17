import React from "react";

const Button = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  fontSize,
  fontWeight,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
        fontSize,
        fontWeight,
      }}
    >
      {children}
    </button>
  );
};

export default Button;

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
  marginTop,
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
        marginTop,
      }}
    >
      {children}
    </button>
  );
};

export default Button;

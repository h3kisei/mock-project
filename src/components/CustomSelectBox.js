import { Radio } from "@chakra-ui/react";
import React from "react";

const CustomRadio = ({ colorScheme, children, value, size }) => {
  return (
    <Radio colorScheme={colorScheme} value={value} size={size}>
      {children}
    </Radio>
  );
};

export default CustomRadio;

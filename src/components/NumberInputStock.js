import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from "@chakra-ui/react";
  
  const NumberInputStock = ({ onStock }) => {
    const handleStock = (value) => {
      onStock && onStock(value);
    };
  
    return (
      <NumberInput onChange={handleStock}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    );
  };
  
  export default NumberInputStock;
  
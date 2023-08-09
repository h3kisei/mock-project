import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const NumberInputStock = ({ onStock, defaultValue }) => {
  const handleStock = (value) => {
    onStock && onStock(value);
  };

  return (
    <NumberInput onChange={handleStock} defaultValue={defaultValue}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default NumberInputStock;

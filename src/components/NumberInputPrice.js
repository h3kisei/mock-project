import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const NumberInputPrice = ({ onPrice }) => {
  const handlePrice = (value) => {
    onPrice && onPrice(value);
  };

  return (
    <NumberInput onChange={handlePrice}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default NumberInputPrice;

import { Tooltip } from "@chakra-ui/react";
import Select, { components, InputProps } from "react-select";

const Option = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <components.Option {...props} />
    </div>
  );
};

const options = [
  { label: "Ao khoac", value: 1 },
  { label: "Ao choang", value: 2 },
  { label: "Ao gio", value: 3 },
];

const SelectCategory = ({ onSelect }) => {
  const handleSelect = (value) => {
    onSelect && onSelect(value);
  };

  return (
    <div>
      <Select
        onChange={handleSelect}
        options={options}
        components={{ Option }}
      />
    </div>
  );
};

export default SelectCategory;

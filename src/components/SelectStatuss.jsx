import Select, { components } from "react-select";

const Option = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <components.Option {...props} />
    </div>
  );
};
const options = [
  { label: "Progressing", value: 1 },
  { label: "Shipping", value: 2 },
];

const SelectStatuss = ({ onStatuss, onLabel }) => {
  const handleStatuss = (value) => {
    onStatuss && onStatuss(value);
  };

  return (
    <div>
      <Select
        options={options}
        components={{ Option }}
        onChange={handleStatuss}
        defaultValue={{ label: onLabel, value: 1 }}
      />
    </div>
  );
};

export default SelectStatuss;

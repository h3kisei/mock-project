import Select, { components } from "react-select";

const Option = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <components.Option {...props} />
    </div>
  );
};
const options = [
  { label: "Yes", value: 1 },
  { label: "No", value: 2 },
];

const SelectPaid = ({ onPaid, onLabel }) => {
  const handlePaid = (value) => {
    onPaid && onPaid(value);
  };

  return (
    <div>
      <Select
        options={options}
        components={{ Option }}
        onChange={handlePaid}
        defaultValue={{ label: onLabel, value: 1 }}
      />
    </div>
  );
};

export default SelectPaid;

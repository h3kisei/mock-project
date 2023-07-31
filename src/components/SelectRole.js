import Select, { components } from "react-select";

const Option = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <components.Option {...props} />
    </div>
  );
};
const options = [
  { label: "admin", value: 1 },
  { label: "user", value: 2 },
];

const SelectRole = ({ onRole }) => {
  const handleRole = (value) => {
    onRole && onRole(value);
  };

  return (
    <div>
      <Select options={options} components={{ Option }} onChange={handleRole} />
    </div>
  );
};

export default SelectRole;

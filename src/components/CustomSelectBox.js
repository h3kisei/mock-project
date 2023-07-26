import Select, { components } from "react-select";

const Option = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <components.Option {...props} />
    </div>
  );
};
const options = [
  { label: "Processing", value: 1 },
  { label: "shipping", value: 2 },
  // { label: "Option 3", value: 3 }
];

const CustomSelect = () => {
  return (
    <div>
      <Select options={options} components={{ Option }} />
    </div>
  );
};

export default CustomSelect;

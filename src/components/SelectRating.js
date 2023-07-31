import Select, { components } from "react-select";

const Option = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <components.Option {...props} />
    </div>
  );
};
const options = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
];

const SelectRating = () => {
  return (
    <div>
      <Select options={options} components={{ Option }} />
    </div>
  );
};

export default SelectRating;

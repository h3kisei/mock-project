import "../styles/customInputText.scss";

const Input = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  border,
  color,
  height,
  radius,
  width,
  backgroundColor,
  borderColor,
  borderStyle,
}) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        style={{
          backgroundColor: backgroundColor,
          color,
          border,
          borderRadius: radius,
          height,
          width,
          borderColor,
          borderStyle,
        }}
      />
      {error && <p className="error">Input filed can't be empty!</p>}
    </div>
  );
};

export default Input;

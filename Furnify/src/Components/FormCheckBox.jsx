/* eslint-disable react/prop-types */
const FormCheckBox = ({ label, name, size, defaultValue }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkox checkbox-primary ${size}`}
      />
    </div>
  );
};

export default FormCheckBox;
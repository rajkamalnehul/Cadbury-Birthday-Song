const CustomSelect = (props) => {
  const {
    label = "",
    className = "",
    onChange,
    options,
    value = "",
    ...rest
  } = props;

  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        {...(rest || {})}
        className={`w-full !outline-none text-lg px-4 py-3.5 border-grey-dark border rounded-full ${className}`}
      >
        <option value="" disabled hidden>
          {label}
        </option>
        {options?.map((item) => (
          <option value={item.value} key={item.key} className="text-xm">
            {item.key}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700"></div>
    </div>
  );
};

export default CustomSelect;

export default function FilledInput(props) {
  const { label, className = "", ...rest } = props;
  return (
    <input
      className={`w-full placeholder-grey-dark !outline-none placeholder:font-[400] placeholder:text-[rgba(60, 60, 60, 0.68)] text-base text-[#000] px-4 py-3 border-grey-dark border rounded-full ${className}`}
      placeholder={label}
      {...(rest || {})}
    />
  );
}

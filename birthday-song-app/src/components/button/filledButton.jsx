export default function FilledButton(props) {
  const { label, className = "", ...rest } = props;
  return (
    <button
      className={`bg-[#e7b464] text-xl font-semibold text-[#401272] px-8 py-3 rounded-2xl ${className}`}
      {...(rest || {})}
    >
      {label}
    </button>
  );
}

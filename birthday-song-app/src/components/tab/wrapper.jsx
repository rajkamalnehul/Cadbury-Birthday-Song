export default function TabWrapper(props) {
  const {
    tabs,
    value,
    wrapperClass = "h-full",
    defaultTab,
    itemClass = "",
  } = props;

  const isHidden = (item) => !(item === (value || defaultTab));

  return (
    <div className={wrapperClass}>
      {tabs?.map((item, idx) => (
        <div
          className={`${
            isHidden(item.value) ? "hidden" : "block"
          } ${itemClass}`}
          aria-hidden={isHidden(item.value)}
          key={idx}
        >
          {item.component}
        </div>
      ))}
    </div>
  );
}

import React from "react";

export default function Tab(props) {
  const {
    items,
    defaultTab,
    sticky,
    onChange,
    value,
    containerClass = "",
  } = props;

  const isSelected = (itemValue) => itemValue == (value || defaultTab);

  return (
    <div className={`my-6 ${sticky ? "sticky" : ""} ${containerClass}`}>
      <div className="flex gap-8">
        {items?.map((item, idx) => (
          <React.Fragment key={item.value}>
            <div
              className={`rounded-full border-2  w-[18px] h-[18px] ${
                isSelected(item.value) ? "border-[#e8b563]" : "border-[#fff]"
              }`}
              onClick={() => {
                onChange(item.value);
              }}
            ></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

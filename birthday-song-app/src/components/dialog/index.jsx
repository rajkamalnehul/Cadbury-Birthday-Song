import React from "react";
export default function Dialog(props) {
  const {
    open = false,
    onClose,
    children,
    backDropClass = "",
    contentClass = "",
  } = props;

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "inherit";
    }
    return () => {
      document.body.style.overflow = "inherit";
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className={`fixed  h-full w-full top-0 left-0 z-50 bg-[#000] bg-opacity-50 flex items-center justify-center ${backDropClass}`}
      onClick={onClose}
    >
      <div
        className={`z-50 overflow-auto no-scrollbar max-h-[calc(100vh-50px)] ${contentClass}`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

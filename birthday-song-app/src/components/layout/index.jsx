import React from "react";
import BackgroundImg from "../../assets/images/background.jpg";

function Layout({ children }) {
  return (
    <>
      <div
        className="block w-full h-screen md:hidden"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        {children}
      </div>
      <div className="hidden w-full h-screen md:block">
        <p>This app is only supported in mobile</p>
      </div>
    </>
  );
}

export default Layout;

import BackgroundImg from "../../assets/images/background.jpg";
import Navbar from "../navbar";
function Layout({ navbar, children }) {
  return (
    <>
      <div
        className="block w-full h-screen overflow-y-scroll pb-[85px] md:hidden"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        {navbar && <Navbar />}
        <div className={`${navbar ? "pt-[85px]" : ""} overflow-scroll`}>
          {children}
        </div>
      </div>
      <div className="hidden w-full h-screen md:block">
        <p className="text-[#000]">This app is only supported in mobile</p>
      </div>
    </>
  );
}

export default Layout;

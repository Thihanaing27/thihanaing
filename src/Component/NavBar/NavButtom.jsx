import { FaFacebook } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { HumbergerMenu } from "./HumbergerMenu";

export const NavButton = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-2">
        <FaFacebook className="hover:scale-110 transition-all duration-300 cursor-pointer select-none text-lg" />
        <FaViber className="hover:scale-110 transition-all duration-300 cursor-pointer select-none text-lg" />
        <div className="md:hidden" id="HubergerMenu">
          <HumbergerMenu />
        </div>
      </div>
    </>
  );
};

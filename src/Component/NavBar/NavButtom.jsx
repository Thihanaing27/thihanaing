import { FaFacebook } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { HumbergerMenu } from "./HumbergerMenu";
import { Link } from "react-router-dom";

export const NavButton = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-2">
        <a href="https://www.facebook.com/nevada.nevada.944023"><FaFacebook className="hover:scale-110 transition-all duration-300 cursor-pointer select-none text-lg" /></a>
        <Link to="/thihanaing/ViberCode"><FaViber className="hover:scale-110 transition-all duration-300 cursor-pointer select-none text-lg" /></Link>
        <div className="md:hidden" id="HubergerMenu">
          <HumbergerMenu />
        </div>
      </div>
    </>
  );
};

import { FaFacebook } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2 bg-slate-800 text-xs md:text-base ">
      <span>
        Copyright @ 2024 developed by <b className="cursor-pointer select-none hover:underline">THIHA NAING</b>
      </span>
      <div className="flex justify-center items-center gap-4 bg-blue-600 px-2 py-1 border-sky-800 border-[1px] rounded-xl">

        <a href="https://www.facebook.com/nevada.nevada.944023"><FaFacebook className="hover:scale-110 text-xl cursor-pointer select-none" /></a>
        <Link to="/thihanaing/ViberCode"><FaViber className="hover:scale-110 text-xl cursor-pointer select-none" /></Link>
      </div>
    </div>
  );
}

export default Footer;

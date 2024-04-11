import { NavLink } from "react-router-dom";
import "./Nav.css";
export const OverMenu = () => {
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center opacity-90 HumbergerMenu  bg-gradient-to-l from-neutral-500 to-sky-800">
      <ul className="flex flex-col gap-4 text-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

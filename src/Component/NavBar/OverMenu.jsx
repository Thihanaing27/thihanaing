import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
export const OverMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center opacity-90 HumbergerMenu  bg-gradient-to-l from-neutral-500 to-sky-800">
      <ul className="flex flex-col gap-4 text-center">
        <li onClick={() => navigate(0)}>
          <NavLink to="/thihanaing/" end>
            Home
          </NavLink>
        </li>
        <li onClick={() => navigate(0)}>
          <NavLink to="/thihanaing/about">About</NavLink>
        </li>
        <li onClick={() => navigate(0)}>
          <NavLink to="/thihanaing/services">Services</NavLink>
        </li>
        <li onClick={() => navigate(0)}>
          <NavLink to="/thihanaing/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

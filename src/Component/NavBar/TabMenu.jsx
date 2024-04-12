import "./Nav.css";
import { NavLink } from "react-router-dom";
export const TabMenu = () => {
  return (
    <div className="TabMenu">
      <ul className="flex gap-4 text-center">
        <li>
          <NavLink to="/thihanaing/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/thihanaing/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/thihanaing/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/thihanaing/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

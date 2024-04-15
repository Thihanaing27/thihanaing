import { NavLink } from "react-router-dom";
import "./Nav.css";

export const OverMenu = () => {
  const clickHandler = () => {
    const MenuContainer = document.getElementById("MenuContainer");
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
    const OverMenu = document.getElementById("OverMenu");
    if (MenuContainer.classList.contains("isOpen")) {
      bar2.classList.remove("opacity-0");
      bar1.classList.remove("rotatePlus45Deg");
      bar3.classList.remove("rotateMinus45Deg");
      MenuContainer.classList.remove("isOpen");
      OverMenu.classList.add("-left-full");
      OverMenu.classList.remove("left-0");
    } else {
      bar2.classList.add("opacity-0");
      bar1.classList.add("rotatePlus45Deg");
      bar3.classList.add("rotateMinus45Deg");
      MenuContainer.classList.add("isOpen");
      OverMenu.classList.remove("-left-full");
      OverMenu.classList.add("left-0");
    }
  }
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center opacity-90 HumbergerMenu  bg-gradient-to-l from-neutral-500 to-sky-800">
      <ul className="flex flex-col gap-4 text-center">
        <li onClick={() => clickHandler()}>
          <NavLink to="/thihanaing/" end>
            Home
          </NavLink>
        </li>
        <li onClick={() => clickHandler()}>
          <NavLink to="/thihanaing/about">About</NavLink>
        </li>
        <li onClick={() => clickHandler()}>
          <NavLink to="/thihanaing/services">Services</NavLink>
        </li>
        <li onClick={() => clickHandler()}>
          <NavLink to="/thihanaing/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

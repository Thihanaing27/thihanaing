import { ViberCode } from "./ViberCode";
import { Link, Outlet } from "react-router-dom";

export const Contact = () => {
  return <div className="flex flex-col justify-center items-center w-full h-screen">
    <div>
      <Link to="mail" className="m-4 px-4 py-2 rounded-xl bg-gradient-to-r border-2 border-white from-red-400 to-red-800 text-lg font-bold tracking-wider cursor-pointer hover:scale-110">Mail to me!</Link>
      <Link to="viberCode" className="px-4 py-2 rounded-xl bg-gradient-to-r border-2 border-purple-300 from-blue-400 to-indigo-800 text-lg font-bold tracking-wider cursor-pointer hover:scale-110">Contact with viber</Link>
    </div>
    <Outlet />
  </div>;
};

import { TabMenu } from "./TabMenu";
import { Logo } from "./Logo";
import { NavButton } from "./NavButtom";

export const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-4 py-2 bg-gradient-to-r from-zinc-600 to-slate-800 fixed top-0 z-20">
      <div>
        <Logo />
      </div>
      <div className="hidden md:block">
        <TabMenu />
      </div>
      <div>
        <NavButton />
      </div>
    </nav>
  );
};

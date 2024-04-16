import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./Component/NavBar/NavBar";
import { Home } from "./Component/Pages/Home";
import { About } from "./Component/Pages/About";
import { Services } from "./Component/Pages/Services";
import { Contact } from "./Component/Pages/Contact";
import { OverMenu } from "./Component/NavBar/OverMenu";
import Footer from "./Component/Footer/Footer";
import { ViberCode } from "./Component/Pages/ViberCode";
import { Mail } from "./Component/Contact/Mail";
function App() {
  return (
    <>
      <NavBar />
      <div
        className="fixed w-full h-[100vh] top-0 -left-full transition-all duration-500 z-10 md:hidden"
        id="OverMenu"
      >
        <OverMenu />
      </div>
      <Routes>
        <Route path="thihanaing/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="thihanaing/about" element={<About />} />
        <Route path="thihanaing/services" element={<Services />} />
        <Route path="thihanaing/contact" element={<Contact />} >
          <Route path="mail" element={<Mail />} />
          <Route path="viberCode" element={<ViberCode />} />
        </Route>
        <Route path="thihanaing/ViberCode" element={<ViberCode />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./Component/NavBar/NavBar";
import { Home } from "./Component/Pages/Home";
import { About } from "./Component/Pages/About";
import { Services } from "./Component/Pages/Services";
import { Contact } from "./Component/Pages/Contact";
import { OverMenu } from "./Component/NavBar/OverMenu";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <>
      <NavBar />
      <div
        className="absolute w-full h-screen top-0 -left-full transition-all duration-500 z-10"
        id="OverMenu"
      >
        <OverMenu />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

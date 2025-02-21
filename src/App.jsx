import "./styles/app.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Fees from "./components/Fees";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="all-all">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

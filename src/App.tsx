import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Experiences from "./pages/Experiences";

function App() {
  return (
    <Router>
      {/* change min-h-[16000px] to min-h-screen once all pages are done*/}
      <div className="min-h-[16000px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

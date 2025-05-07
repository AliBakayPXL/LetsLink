import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Experiences from "./pages/Experiences";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* change min-h-[16000px] to min-h-screen once all pages are done*/}
      <div className="min-h-screen flex flex-col">
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

import "./App.css";
import HomePage from "./landing_page/home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/ProductsPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

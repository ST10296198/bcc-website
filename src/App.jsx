import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import NoiseFilter from "./components/layout/NoiseFilter";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <BrowserRouter>
      <NoiseFilter />

      <Header />

      <main className="w-full pt-20 bg-surface">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
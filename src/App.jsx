import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/dynamic-page/" element={<Home />} />
          <Route path="/dynamic-page/about" element={<About />} />
          <Route path="/dynamic-page/resume" element={<Resume />} />
          <Route path="/dynamic-page/portfolio" element={<Portfolio />} />
          <Route path="/dynamic-page/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

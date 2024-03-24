import { BrowserRouter, Routes, Route } from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {ClipLoader} from "react-spinners";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

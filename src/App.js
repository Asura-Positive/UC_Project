import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Body/Home";
import Footer from "./components/Footer/Footer";
import Campus from "./components/Contents/Campus";
import Admission from './components/Contents/Admission';
import Scholarship from './components/Contents/Scholarship';
import Contact from './components/Contents/Contact';
import News from './components/Contents/News'
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="admission" element={<Admission />} />
      <Route path="/" element={<Home />} />
      <Route path="/scholarship" element={<Scholarship />} />
      <Route path="/campus" element={<Campus />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;

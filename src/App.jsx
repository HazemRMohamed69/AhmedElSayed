import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

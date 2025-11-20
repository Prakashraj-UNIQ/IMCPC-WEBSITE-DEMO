import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import AboutUs from "./pages/AboutUs";
import Cardamom from "./pages/Cardamom";
import Gallery from "./pages/Gallery";
import ContactUs from"./pages/ContactUs";

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/cardamom" element={<Cardamom/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Route>
    </Routes>
  );
}

export default App;

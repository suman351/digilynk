// App.js
import Layout from "@/components/digilynk/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AboutUs from "../components/digilynk/AboutUs";

export default function DigilynkRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          {/* Other routes */}
          {/* <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/about" element={<About />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Photo from "./components/Photo";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Photo/>
      <About />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

// CSS for App
import "./App.css";

// importing components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";
import Menu from "./components/Menu";



// importing router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // METHOD - 1

    // ADDING COMPONENTS NORMALLY
    // using this all pages will be shown

    <div className='App'>
        <Header/>
        <Home/>
        <About/>
        <Work/>
        <Menu/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div>



    // METHOD - 2

    // ADDING COMPONENTS USING ROUTER
    // using this only home pages will be shown with heder and footer connected to all pages
    // we can switch to any page like localhost:3000/about
    // Header and Footer are not wrapped in Router because they will be shown in each page
    // <div className="App">
    //   <BrowserRouter>
    //     <Header />

    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/Work" element={<Work />} />
    //       <Route path="/Testimonial" element={<Testimonial />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>

    //     <Footer />
    //   </BrowserRouter>
    // </div>
  );
}

export default App;

// for icons install below
// npm install react-icons --save

import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"
import Footer from "./Footer/Footer"
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import About from "./About/About";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Contactus from "./Contactus/Contactus";


function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check scroll position and set showScroll accordingly
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setShowScroll(true); // Show the button when scrolled more than 100px
    } else {
      setShowScroll(false); // Hide the button when less than 100px
    }
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', checkScrollPosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/contactus" element={<Contactus />}/>




      </Routes>

      <Footer />

      
    {showScroll && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-4 p-3 bg-[#2d387d] text-white rounded-full border border-white shadow-lg hover:bg-[#3a479d] hover:text-white transition duration-300"
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <IoIosArrowUp />
      </button>
    )}

    </>
  )
}

export default App

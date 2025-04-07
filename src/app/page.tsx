"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";


export default function Home() {
  const [preloaderWatched, setPreloaderWatched] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("home")

  useEffect(() => {
    const watched = sessionStorage.getItem("preloaderWatched");

    if (watched) {
      setPreloaderWatched(true);
    } else {
      sessionStorage.setItem("preloaderWatched", "true");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden bg-white">
      <Navbar activeLink={activeLink} />
      {!preloaderWatched && <Preloader setIsVisible={setIsVisible} isVisible={isVisible} />}

      {/* Logo Container */}
      <Hero setActiveLink={setActiveLink}/>
      <About setActiveLink={setActiveLink}/>
      <Contact setActiveLink={setActiveLink}/>
    </div>
  );
}

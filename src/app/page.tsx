"use client";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";

export default function Home() {
  const [preloaderWatched, setPreloaderWatched] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const watched = sessionStorage.getItem("preloaderWatched");

    if (watched) {
      setPreloaderWatched(true); // Skip the preloader
    } else {
      sessionStorage.setItem("preloaderWatched", "true"); // Set the flag after preloader runs
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      {!preloaderWatched && <Preloader setIsVisible={setIsVisible} isVisible={isVisible} />}
      <h1>Hello, World!</h1>
    </div>
  );
}

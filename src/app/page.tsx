"use client";

import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Lab from "@/components/Lab";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import GitHub from "@/components/GitHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EasterEggs from "@/components/EasterEggs";
import AmbientLighting from "@/components/ui/AmbientLighting";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash only once per session
    const seen = sessionStorage.getItem("anonyte_splash");
    if (seen) {
      setShowSplash(false);
      setSplashDone(true);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem("anonyte_splash", "1");
    setSplashDone(true);
    setTimeout(() => setShowSplash(false), 800);
  };

  return (
    <>
      {showSplash && !splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      {splashDone && (
        <main className="relative min-h-screen overflow-x-hidden bg-[#050508]">
          {/* Ambient Lighting Mesh */}
          <AmbientLighting />

          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Lab />
          <Experience />
          <Achievements />
          <GitHub />
          <Contact />
          <Footer />
          <EasterEggs />
        </main>
      )}
    </>
  );
}

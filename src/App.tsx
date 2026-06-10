/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ArtefakAnalysis from "./components/ArtefakAnalysis";
import PenilaianInstrumen from "./components/PenilaianInstrumen";
import ModelGuru from "./components/ModelGuru";
import Lampiran from "./components/Lampiran";
import Footer from "./components/Footer";
import { profileData, teacherModelData, artefactAspects, instrumentsData } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("profil");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -45% 0px", // Trigger when the section occupies a good chunk of viewport
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = ["profil", "analisis", "penilaian", "model", "lampiran"];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#efe9e4] via-white to-white text-gray-800 antialiased font-sans flex flex-col justify-between selection:bg-[#cfac8e]/30 selection:text-primary">
      {/* Universal Floating Aesthetic Blobs for Background Glassmorphism depth */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-light-pink z-55" />
      
      {/* Sticky Translucent Header Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Pages Deck */}
      <main className="flex-grow">
        <Profile profile={profileData} />
        
        <ArtefakAnalysis aspects={artefactAspects} />
        
        <PenilaianInstrumen instruments={instrumentsData} />
        
        <ModelGuru model={teacherModelData} />
        <Lampiran />
      </main>

      {/* Polish Affiliations & Affiliated Footnote */}
      <Footer />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, GraduationCap } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { id: "profil", label: "Profil Guru" },
    { id: "analisis", label: "Analisis Artefak" },
    { id: "penilaian", label: "Instrumen Penilaian" },
    { id: "model", label: "Model Guru" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
        scrolled
          ? "backdrop-glass shadow-glass border-primary/20 bg-white/75"
          : "bg-transparent border-transparent"
      } border`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection("profil")}
          >
            <div className="p-2 rounded-xl bg-gradient-to-tr from-primary to-accent text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <span className="font-display font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Yan Amru Abdilah
              </span>
              <span className="hidden sm:inline-block text-[10px] block font-mono text-gray-500 uppercase tracking-widest mt-0.5">
                • PPG UKSW Portfolio
              </span>
            </div>
          </div>

          {/* Desktop Items */}
          <nav className="hidden md:flex space-x-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-primary font-semibold" : "text-gray-600 hover:text-primary hover:bg-bg-soft/50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburgermenu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-bg-soft text-gray-600 hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-primary/10 overflow-hidden bg-white/95 rounded-b-2xl shadow-lg backdrop-blur-md"
          >
            <div className="px-3 pt-2 pb-4 space-y-1 sm:px-4">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-btn-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-bg-soft to-white text-primary border-l-4 border-primary pl-3"
                        : "text-gray-600 hover:bg-bg-soft/45 hover:text-primary pl-4"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

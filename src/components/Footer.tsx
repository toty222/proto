/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GraduationCap, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-t from-bg-soft via-white to-white border-t border-primary/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-150">
          
          {/* Logo & Info */}
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-primary to-accent text-white shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display font-extrabold text-gray-900 text-base leading-tight">
                E-Portfolio Yan Amru Abdilah
              </p>
              <p className="text-xs text-gray-400 font-mono tracking-wider mt-0.5">
                PROGRAM PENDIDIKAN GURU • UKSW
              </p>
            </div>
          </div>

          {/* Copyright description */}
          <p className="text-xs text-gray-500 text-center md:text-right leading-relaxed max-w-sm">
            Praktik Lapangan (PPL) Terpadu dilaksanakan di <strong className="text-gray-800">SMA Negeri 3 Salatiga</strong> dibimbing oleh Universitas Kristen Satya Wacana (UKSW).
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-gray-400 flex items-center gap-1">
            © {new Date().getFullYear()} Yan Amru Abdilah. Dibuat penuh dengan
            <Heart className="h-3 w-3 text-primary fill-current" />
            untuk Refleksi Sukses PPG.
          </p>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white border border-primary/10 hover:border-primary/25 hover:bg-bg-soft text-primary shadow-sm hover:shadow transition-all duration-300 group focus:outline-none"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

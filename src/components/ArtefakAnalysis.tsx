/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, GraduationCap, Award, Sliders, CheckCircle2, ChevronRight, Bookmark, TrendingUp } from "lucide-react";
import { ArtefactAspect } from "../types";

interface ArtefactAnalysisProps {
  aspects: ArtefactAspect[];
}

export default function ArtefactAnalysis({ aspects }: ArtefactAnalysisProps) {
  const [selectedId, setSelectedId] = useState<string>("kendala");

  // Map icon names to lucide components
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case "AlertCircle":
        return <AlertCircle className={className} />;
      case "GraduationCap":
        return <GraduationCap className={className} />;
      case "Award":
        return <Award className={className} />;
      case "Sliders":
        return <Sliders className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      default:
        return <Bookmark className={className} />;
    }
  };

  const selectedAspect = aspects.find((a) => a.id === selectedId) || aspects[0];

  return (
    <section id="analisis" className="py-20 bg-gradient-to-b from-white via-bg-soft/40 to-white relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute top-2/3 right-0 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary uppercase tracking-widest text-xs font-mono font-bold bg-primary/10 px-3.5 py-1.5 rounded-full">
            Refleksi & Evaluasi
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Analisis Pelaksanaan PPL
          </h2>
          <p className="text-gray-600">
            Sebuah refleksi terstruktur terhadap pelaksanaan PPL yang disusun selama masa PPG Prajabatan dalam praktiknya di SMA Negeri 3 Salatiga.
          </p>
        </div>

        {/* Dynamic Desktop Layout: Tabs on the Left, Insights on the Right */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Navigation Cards List (Grid span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {aspects.map((aspect) => {
              const isSelected = aspect.id === selectedId;
              const accentColor = aspect.id === "kendala" 
                ? "border-amber-400 group-hover:bg-amber-500"
                : aspect.id === "pedagogi"
                ? "border-blue-500 group-hover:bg-blue-600"
                : aspect.id === "keberhasilan"
                ? "border-emerald-500 group-hover:bg-emerald-600"
                : "border-purple-500 group-hover:bg-purple-600";

              return (
                <button
                  key={aspect.id}
                  id={`aspect-btn-${aspect.id}`}
                  onClick={() => setSelectedId(aspect.id)}
                  className={`relative p-5 rounded-2xl text-left transition-all duration-300 group ${
                    isSelected
                      ? "bg-white shadow-glass border-primary/25 scale-[1.02]"
                      : "backdrop-glass hover:bg-white hover:shadow-md hover:scale-[1.01] border-transparent"
                  } border`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Icon container */}
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      isSelected
                        ? "bg-gradient-to-tr from-primary to-accent text-white"
                        : "bg-bg-soft text-gray-600 group-hover:text-primary group-hover:bg-primary/10"
                    }`}>
                      {getIcon(aspect.iconName, "h-6 w-6")}
                    </div>

                    {/* Main aspect label */}
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-gray-950 text-base group-hover:text-primary transition-colors">
                        {aspect.aspectTitle}
                      </p>
                      <p className="text-xs text-gray-500 truncate mt-0.5">
                        {aspect.description}
                      </p>
                    </div>

                    <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                      isSelected ? "text-primary translate-x-1" : "text-gray-400 group-hover:translate-x-1"
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Content Viewer Cards (Grid span 7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full rounded-3xl bg-white border border-primary/10 shadow-glass-strong p-8 flex flex-col justify-between"
                id="artefact-desktop-viewer"
              >
                <div className="space-y-6">
                  {/* Aspect Title Header */}
                  <div className="flex items-start justify-between border-b border-gray-150 pb-5">
                    <div>
                      <span className="text-[11px] font-mono font-bold text-primary uppercase tracking-wider block mb-1">
                        {aspects.findIndex(a => a.id === selectedId) + 1 === 2 ? "analisis ke 2" : `Analisis ke ${aspects.findIndex(a => a.id === selectedId) + 1}`}
                      </span>
                      <h3 className="font-display font-bold text-2xl text-gray-950">
                        {selectedAspect.aspectTitle}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {selectedAspect.description}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-bg-soft to-white border border-primary/10 text-primary">
                      {getIcon(selectedAspect.iconName, "h-7 w-7")}
                    </div>
                  </div>

                  {/* Bullet Points with subtle bullet-check animation delay */}
                  <div className="space-y-4">
                    {selectedAspect.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        id={`detail-bullet-desktop-${selectedId}-${idx}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed text-sm">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Additional Pedagogical Theory note if available */}
                {selectedAspect.pedagogicalTheory && (
                  <div className="mt-8 pt-6 border-t border-gray-150">
                    <div className="p-4 rounded-xl bg-bg-soft/70 border border-primary/10 text-xs text-primary leading-relaxed">
                      <strong className="block font-semibold mb-1 text-[13px] text-gray-950">
                        Sintesis Hubungan Teori:
                      </strong>
                      {selectedAspect.pedagogicalTheory}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile and Tablet Friendly Layout: Stacked Interactive Expandable Cards */}
        <div className="lg:hidden space-y-4">
          {aspects.map((aspect) => {
            const isSelected = aspect.id === selectedId;
            return (
              <div
                key={aspect.id}
                id={`aspect-mobile-card-${aspect.id}`}
                className="rounded-2xl bg-white border border-primary/15 shadow-sm overflow-hidden"
              >
                {/* Accordion header button */}
                <button
                  id={`aspect-mobile-header-${aspect.id}`}
                  onClick={() => setSelectedId(selectedId === aspect.id ? "" : aspect.id)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-white to-bg-soft/40 focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2.5 rounded-xl ${
                      isSelected
                        ? "bg-gradient-to-tr from-primary to-accent text-white"
                        : "bg-bg-soft text-gray-600"
                    }`}>
                      {getIcon(aspect.iconName, "h-5 w-5")}
                    </div>
                    <div>
                      <p className="font-display font-medium text-gray-950 text-base">
                        {aspect.aspectTitle}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        {aspect.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                    isSelected ? "rotate-90 text-primary" : ""
                  }`} />
                </button>

                {/* Accordion Content rendering */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-150 bg-white"
                    >
                      <div className="p-5 space-y-4">
                        {aspect.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-3 text-sm">
                            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        ))}

                        {aspect.pedagogicalTheory && (
                          <div className="p-4 rounded-xl bg-bg-soft border border-primary/10 text-xs text-primary leading-relaxed mt-4">
                            <strong className="block font-semibold mb-1 text-gray-950">
                              Sintesis Hubungan Teori:
                            </strong>
                            {aspect.pedagogicalTheory}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

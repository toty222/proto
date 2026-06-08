/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Compass, BookOpen, Shield, Users, Heart, RefreshCw, Cpu, TrendingUp, Target, CheckCircle2 } from "lucide-react";
import { TeacherModel } from "../types";

interface ModelGuruProps {
  model: TeacherModel;
}

export default function ModelGuru({ model }: ModelGuruProps) {
  // Map icon names to Lucide elements
  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case "Compass":
        return <Compass className={className} />;
      case "BookOpen":
        return <BookOpen className={className} />;
      case "Shield":
        return <Shield className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Heart":
        return <Heart className={className} />;
      case "RefreshCw":
        return <RefreshCw className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      default:
        return <Target className={className} />;
    }
  };

  return (
    <section id="model" className="py-20 bg-gradient-to-b from-white via-[#efe9e4]/30 to-white relative overflow-hidden">
      {/* Dynamic blurred decoration bubbles */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary uppercase tracking-widest text-xs font-mono font-bold bg-primary/10 px-3.5 py-1.5 rounded-full">
            Model Guru Masa Depan
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Visi & Karakter Guru Profesional
          </h2>
          <p className="text-gray-600">
            Komitmen tersturktur Yan Amru Abdilah dalam membangun kompetensi komprehensif serta integritas karakter luhur demi mendarmabaktikan diri bagi kemajuan generasi bangsa.
          </p>
        </div>

        {/* Section 1: Misi Guru Profesional */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-gradient-to-tr from-primary to-accent text-white rounded-2xl shadow-sm">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-gray-900">
                Misi Strategis Pendidik Profesional
              </h3>
              <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-widest font-mono">
                Langkah Nyata Pembelajaran Adaptif
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {model.misi.map((misiStr, idx) => (
              <motion.div
                key={idx}
                id={`misi-card-${idx}`}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white border border-primary/10 backdrop-glass shadow-sm flex items-start space-x-4 hover:shadow-md transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 mt-0.5">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {misiStr}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Kompetensi & Karakter Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
          
          {/* Kompetensi Guru */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-950">
                Pilar Kompetensi Guru Profesional
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {model.kompetensi.map((komp, idx) => (
                <div
                  key={idx}
                  id={`komp-card-${idx}`}
                  className="p-5 rounded-2xl bg-gradient-to-r from-white to-bg-soft/20 border border-primary/10 hover:border-primary/25 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="p-2 w-fit bg-primary/10 text-primary rounded-xl mb-4">
                    {renderIcon(komp.iconName, "h-5 w-5")}
                  </div>
                  <h4 className="font-display font-bold text-gray-900 text-sm mb-2">
                    {komp.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {komp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Karakter Guru */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2.5 bg-accent/10 text-accent rounded-xl">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-950">
                Pondasi Karakter Pendidik Luhur
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {model.karakter.map((kar, idx) => (
                <div
                  key={idx}
                  id={`kar-card-${idx}`}
                  className="p-5 rounded-2xl bg-gradient-to-r from-white to-bg-soft/20 border border-primary/10 hover:border-primary/25 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="p-2 w-fit bg-accent/10 text-accent rounded-xl mb-4">
                    {renderIcon(kar.iconName, "h-5 w-5")}
                  </div>
                  <h4 className="font-display font-bold text-gray-900 text-sm mb-2">
                    {kar.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {kar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

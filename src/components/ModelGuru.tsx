/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Users, Heart, RefreshCw, Lightbulb, Star, Compass, Brain, Network, User, BookOpen } from "lucide-react";
import { TeacherModel } from "../types";

interface ModelGuruProps {
  model: TeacherModel;
}

export default function ModelGuru({ model }: ModelGuruProps) {
  // Array of 4 primary ideals modeled from reference image
  const modelIdeals = [
    {
      title: "Empati & Kepedulian",
      description: "Memahami kondisi dan kebutuhan setiap siswa secara individual untuk menciptakan hubungan yang autentik dan suportif.",
      icon: <Heart className="h-5 w-5 text-emerald-600" />,
      bgIcon: "bg-emerald-50",
    },
    {
      title: "Inovatif & Kreatif",
      description: "Terus mengembangkan metode dan media pembelajaran yang menarik, relevan, dan sesuai perkembangan zaman digital.",
      icon: <Lightbulb className="h-5 w-5 text-emerald-600" />,
      bgIcon: "bg-emerald-50",
    },
    {
      title: "Reflektif & Adaptif",
      description: "Selalu merefleksikan praktik mengajar dan beradaptasi berdasarkan kebutuhan siswa serta perkembangan pendidikan.",
      icon: <RefreshCw className="h-5 w-5 text-emerald-600" />,
      bgIcon: "bg-emerald-50",
    },
    {
      title: "Kolaboratif",
      description: "Membangun kerjasama yang baik dengan sesama guru, orang tua, dan komunitas untuk mendukung perkembangan siswa secara holistik.",
      icon: <Users className="h-5 w-5 text-emerald-600" />,
      bgIcon: "bg-emerald-50",
    },
  ];

  // Array of 3 key inspiring figures modeled from reference image
  const inspiringFigures = [
    {
      initial: "K",
      name: "Ki Hajar Dewantara",
      quote: "Ing ngarsa sung tuladha, ing madya mangun karsa",
      color: "bg-emerald-800 text-white",
    },
    {
      initial: "P",
      name: "Paulo Freire",
      quote: "Pendidikan sebagai praktik kebebasan",
      color: "bg-emerald-800 text-white",
    },
    {
      initial: "J",
      name: "John Dewey",
      quote: "Learning by doing — belajar melalui pengalaman",
      color: "bg-emerald-800 text-white",
    },
  ];

  return (
    <section id="model" className="py-20 bg-gradient-to-b from-white via-[#efe9e4]/30 to-white relative overflow-hidden">
      {/* Blurred background ambient bubbles */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block following standard reference */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-medium border border-emerald-100 shadow-sm">
            <Compass className="h-3.5 w-3.5 text-emerald-700" />
            <span>Visi & Filosofi</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Model Guru Ideal
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Gambaran guru ideal yang saya jadikan inspirasi dan panduan dalam perjalanan profesional saya.
          </p>
        </div>

        {/* Dynamic Unequal Grid Layout matching the design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: 4 Ideal Cards Stack (6/12 width) */}
          <div className="lg:col-span-6 space-y-4">
            {modelIdeals.map((ideal, idx) => (
              <motion.div
                key={idx}
                id={`ideal-card-${idx}`}
                whileHover={{ y: -2, scale: 1.01, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-4 transition-all duration-300"
              >
                {/* Circular Icon Container */}
                <div className={`p-3 rounded-xl ${ideal.bgIcon} flex-shrink-0 mt-0.5`}>
                  {ideal.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-gray-900 text-base">
                    {ideal.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {ideal.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN: Filosofi & Inspiring Figures Stack (6/12 width) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Box 1: Filosofi Mengajar */}
            <div className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between min-h-[320px]">
              {/* Decorative Circle in background */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#efe9e4]/30 rounded-full mix-blend-multiply filter blur-sm" />
              <div className="absolute top-10 right-4 w-32 h-32 bg-[#efe9e4]/20 rounded-full mix-blend-multiply filter blur-sm" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Filosofi Mengajar
                  </span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-display font-bold text-2xl text-gray-900 leading-tight">
                    "Guru sebagai <span className="text-emerald-700">Fasilitator Belajar</span>"
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Saya percaya bahwa tugas utama guru bukan sekadar mentransfer pengetahuan, tetapi menciptakan lingkungan di mana siswa dapat menemukan dan mengonstruksi pengetahuannya sendiri melalui pengalaman yang bermakna.
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dengan pendekatan <strong className="text-gray-900 font-semibold">student-centered learning</strong>, setiap siswa dipandang sebagai individu unik dengan potensi yang luar biasa — tugas kita adalah menyalakan percikan semangat belajar itu.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Tokoh Pendidik yang Menginspirasi */}
            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-gray-900">
                <Star className="h-5 w-5 text-emerald-600 fill-emerald-600/20" />
                <h3 className="font-display font-bold text-base text-gray-900">
                  Tokoh Pendidik yang Menginspirasi
                </h3>
              </div>

              {/* Rows List */}
              <div className="space-y-3">
                {inspiringFigures.map((figure, idx) => (
                  <div
                    key={idx}
                    id={`figure-row-${idx}`}
                    className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 flex items-center gap-4 hover:bg-gray-50 transition-all duration-300"
                  >
                    {/* Circle Initial */}
                    <div className="w-10 h-10 rounded-xl bg-[#cfac8e]/15 text-[#cfac8e] font-bold flex items-center justify-center text-base flex-shrink-0">
                      {figure.initial}
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-xs sm:text-sm text-gray-900">
                        {figure.name}
                      </h5>
                      <p className="text-xs text-gray-500 italic mt-0.5">
                        {figure.quote}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Separator / Spacer */}
        <div className="my-16 border-t border-gray-100" />

        {/* 4 Kompetensi Guru Profesional Section */}
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
              4 Kompetensi Guru Profesional
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pedagogik */}
            <motion.div
              id="competency-card-pedagogik"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-[#efe9e4]/40 text-[#cfac8e] mb-5 flex items-center justify-center">
                <BookOpen className="h-6 w-6" />
              </div>
              <h4 className="font-display font-bold text-gray-900 text-sm sm:text-base mb-3">
                Pedagogik
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Memahami dan menerapkan teori pembelajaran yang berpusat pada siswa.
              </p>
            </motion.div>

            {/* Profesional */}
            <motion.div
              id="competency-card-profesional"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-[#efe9e4]/40 text-[#cfac8e] mb-5 flex items-center justify-center">
                <Brain className="h-6 w-6" />
              </div>
              <h4 className="font-display font-bold text-gray-900 text-sm sm:text-base mb-3">
                Profesional
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Menguasai materi Informatika secara mendalam dan berkelanjutan.
              </p>
            </motion.div>

            {/* Kepribadian */}
            <motion.div
              id="competency-card-kepribadian"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-[#efe9e4]/40 text-[#cfac8e] mb-5 flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <h4 className="font-display font-bold text-gray-900 text-sm sm:text-base mb-3">
                Kepribadian
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Menjadi teladan dalam sikap, etika, dan karakter bagi siswa.
              </p>
            </motion.div>

            {/* Sosial */}
            <motion.div
              id="competency-card-sosial"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-[#efe9e4]/40 text-[#cfac8e] mb-5 flex items-center justify-center">
                <Network className="h-6 w-6" />
              </div>
              <h4 className="font-display font-bold text-gray-900 text-sm sm:text-base mb-3">
                Sosial
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Berkomunikasi efektif dengan seluruh pemangku kepentingan pendidikan.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

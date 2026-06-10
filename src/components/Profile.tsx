/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { MapPin, School, BookOpen, Quote, Sparkles } from "lucide-react";
import { StudentProfile } from "../types";
import profileImg from "../assets/images/briliian_herda_profile_1780540232273.png";

interface ProfileProps {
  profile: StudentProfile;
}

export default function Profile({ profile }: ProfileProps) {
  return (
    <section id="profil" className="relative pt-28 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Decorative background blobs to convey high polish */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-tr from-light-pink to-accent rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-primary to-accent rounded-full filter blur-3xl opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Custom Profile Image with Glassmorphism Border Grid span 5 */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group cursor-pointer"
            >
              {/* Spinning/floating glowing accent ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary via-accent to-light-pink rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt" />
              
              {/* Inner container */}
              <div className="relative rounded-2xl overflow-hidden shadow-glass border-4 border-white backdrop-glass-pink max-w-sm sm:max-w-md">
                <img
                  src={profileImg}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center max-h-[460px] transition duration-700 group-hover:scale-105"
                  id="profile-avatar-img"
                />
                
                {/* Visual Accent Tag overlay */}
                <div className="absolute bottom-4 left-4 right-4 py-3 px-4 backdrop-glass border border-white/25 rounded-xl shadow-glass">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest">
                        Mahasiswa PPG Prajabatan
                      </p>
                      <h3 className="font-display font-bold text-gray-900 text-base">
                        {profile.name}
                      </h3>
                    </div>
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-sm">
              <div className="p-3 bg-white/60 border border-primary/10 rounded-xl flex items-center space-x-2.5 backdrop-glass shadow-sm">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">ASAL DAERAH</p>
                  <p className="font-semibold text-xs text-gray-800">{profile.origin.split(',')[0]}</p>
                </div>
              </div>
              
              <div className="p-3 bg-white/60 border border-primary/10 rounded-xl flex items-center space-x-2.5 backdrop-glass shadow-sm">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <School className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">SEKOLAH PPL</p>
                  <p className="font-semibold text-xs text-gray-800">SMAN 3 Salatiga</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Biography Narratives Grid span 7 */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-xs font-semibold text-primary"
              >
                <Sparkles className="h-3 w-3" />
                <span>E-Portfolio Refleksi Awal</span>
              </motion.div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 tracking-tight leading-none mb-2 select-none">
                Selamat Datang, Saya <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-primary via-accent to-[#FF80AB] bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="text-gray-600 font-medium text-lg flex items-center gap-1.5">
                <School className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Mahasiswa Pendidik PPG di </span>
                <span className="text-primary font-semibold border-b-2 border-primary/20 pb-0.5">{profile.pggCampus}</span>
              </p>
            </div>

            {/* Narratives Card with Glassmorphism */}
            <div className="p-6 sm:p-8 rounded-2xl backdrop-glass shadow-glass space-y-6">
              
              {/* Origin Section */}
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-lg text-gray-950 flex items-center gap-2">
                  <span className="p-1 px-2.5 rounded-lg bg-primary/10 text-primary text-sm font-mono">01</span>
                  Warisan Sejarah & Identitas Asal Daerah
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Hai, nama saya <strong className="text-primary">{profile.name}</strong>, seorang calon pendidik profesional yang berasal dari <strong className="text-primary">{profile.origin}</strong>. {profile.originUnique}
                </p>
              </div>

              {/* Quote Section directly replacing Inspiration */}
              <div className="space-y-3 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-transparent border border-primary/10 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 text-primary/5 select-none pointer-events-none">
                  <Quote className="h-24 w-24" />
                </div>
                
                <h3 className="font-display font-semibold text-lg text-gray-950 flex items-center gap-2">
                  <span className="p-1 px-2.5 rounded-lg bg-accent/10 text-accent text-sm font-mono">02</span>
                  Prinsip Pendidikan & Komitmen Guru
                </h3>
                
                <div className="relative flex gap-3.5 items-start">
                  <Quote className="h-8 w-8 text-primary/40 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <p className="font-display font-medium text-sm sm:text-base italic leading-relaxed text-gray-800">
                      "{profile.quote}"
                    </p>
                    <p className="text-xs font-mono font-semibold text-primary/80">
                      — {profile.quoteAuthor} ({profile.pplSchool})
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

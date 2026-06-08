/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { FileText, Award, TrendingUp, Sparkles, ClipboardCheck, ArrowRight, UserCheck } from "lucide-react";
import { Instrument, InstrumentScore } from "../types";
import PdfViewer from "./PdfViewer";

interface PenilaianInstrumenProps {
  instruments: Instrument[];
}

export default function PenilaianInstrumen({ instruments }: PenilaianInstrumenProps) {
  const [activeTab, setActiveTab] = useState<string>("lampiran7");

  const currentInstrument = instruments.find((inst) => inst.id === activeTab) || instruments[0];

  // Calculate stats for growth highlights
  const calculateCycleAverage = (records: InstrumentScore[], cycleKey: "siklus1" | "siklus2" | "siklus3"): number => {
    if (!records.length) return 0;
    const sum = records.reduce((acc, record) => acc + record[cycleKey], 0);
    return Math.round((sum / records.length) * 10) / 10;
  };

  const avgSiklus1 = calculateCycleAverage(currentInstrument.records, "siklus1");
  const avgSiklus2 = calculateCycleAverage(currentInstrument.records, "siklus2");
  const avgSiklus3 = calculateCycleAverage(currentInstrument.records, "siklus3");
  const totalGrowth = Math.round((avgSiklus3 - avgSiklus1) * 10) / 10;

  return (
    <section id="penilaian" className="py-20 bg-[#efe9e4]/40 relative overflow-hidden">
      {/* Visual ambient glows matching palette #cfac8e */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-primary uppercase tracking-widest text-xs font-mono font-bold bg-primary/10 px-3.5 py-1.5 rounded-full">
            Evaluasi Lapangan PPG
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Instrumen Penilaian Pamong
          </h2>
          <p className="text-gray-600">
            Bukti rekam jejak penilaian berkala yang dirilis oleh Guru Pamong SMAN 3 Salatiga terhadap kemajuan performa saya di setiap siklus tindakan mengajar.
          </p>
        </div>

        {/* Dynamic Selector Tabs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          {instruments.map((inst) => {
            const isActive = inst.id === activeTab;
            return (
              <button
                key={inst.id}
                id={`inst-tab-${inst.id}`}
                onClick={() => setActiveTab(inst.id)}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl font-display font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-glass-strong scale-[1.03]"
                    : "bg-white text-gray-600 border border-primary/10 hover:border-primary/30 backdrop-glass"
                }`}
              >
                {inst.id === "lampiran7" ? <ClipboardCheck className="h-5 w-5" /> : <UserCheck className="h-5 w-5" />}
                {inst.id === "lampiran7" ? "Penyusunan Perangkat" : "Praktik Mengajar"}
              </button>
            );
          })}
        </div>

        {/* Dynamic Highlights Panel (Averages Across Cycles) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {/* Cycle 1 Box */}
          <div className="p-5 rounded-2xl bg-white border border-primary/10 backdrop-glass shadow-sm flex flex-col justify-between">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Rata-Rata Siklus 1</p>
            <div className="flex items-baseline space-x-1.5 mt-3">
              <span className="text-3xl font-display font-extrabold text-gray-800">{avgSiklus1}</span>
              <span className="text-xs text-gray-400 font-mono">/100</span>
            </div>
            <p className="text-[10px] text-amber-500 font-semibold mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Tahap Adaptasi Awal
            </p>
          </div>

          {/* Cycle 2 Box */}
          <div className="p-5 rounded-2xl bg-white border border-primary/10 backdrop-glass shadow-sm flex flex-col justify-between">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Rata-Rata Siklus 2</p>
            <div className="flex items-baseline space-x-1.5 mt-3">
              <span className="text-3xl font-display font-extrabold text-primary">{avgSiklus2}</span>
              <span className="text-xs text-gray-400 font-mono">/100</span>
            </div>
            <p className="text-[10px] text-primary font-semibold mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Kemajuan Signifikan
            </p>
          </div>

          {/* Cycle 3 Box */}
          <div className="p-5 rounded-2xl bg-white border border-primary/10 backdrop-glass shadow-sm flex flex-col justify-between">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Rata-Rata Siklus 3</p>
            <div className="flex items-baseline space-x-1.5 mt-3">
              <span className="text-3xl font-display font-extrabold text-[#2E7D32]">{avgSiklus3}</span>
              <span className="text-xs text-gray-400 font-mono">/100</span>
            </div>
            <p className="text-[10px] text-[#2E7D32] font-semibold mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]"></span> Kategori Istimewa
            </p>
          </div>

          {/* Cumulative Growth Card */}
          <div className="col-span-2 lg:col-span-1 p-5 rounded-2xl bg-gradient-to-tr from-primary to-accent text-white shadow-glass-strong flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-light-pink font-bold flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Akumulasi Graf Grafik
              </p>
              <h4 className="font-display font-bold text-sm mt-1">
                Progresivitas Kemampuan
              </h4>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <TrendingUp className="h-7 w-7 text-light-pink" />
              <span className="text-2xl font-display font-extrabold">+{totalGrowth} Poin</span>
            </div>
            <p className="text-[10px] text-white/80 mt-1">
              Peningkatan mutlak dari Siklus 1 hingga ke Siklus 3.
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="rounded-3xl bg-white border border-primary/10 shadow-glass overflow-hidden p-6 sm:p-8">
          <div className="border-b border-primary/10 pb-5 mb-6">
            <h3 className="font-display font-bold text-xl text-gray-900 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {currentInstrument.title}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {currentInstrument.description}
            </p>
          </div>

          {/* DESKTOP TABLE VIEW (Visible only from MD up) */}
          <div className="hidden md:block overflow-x-auto" id="pamong-desktop-table">
            <table className="min-w-full divide-y divide-gray-150">
              <thead>
                <tr className="bg-bg-soft/70">
                  <th scope="col" className="px-6 py-4 text-left text-xs font-mono font-bold text-gray-600 uppercase tracking-widest rounded-l-xl">
                    Aspek & Indikator Penilaian
                  </th>
                  <th scope="col" className="px-4 py-4 text-center text-xs font-mono font-bold text-gray-600 uppercase tracking-widest w-24">
                    Siklus 1
                  </th>
                  <th scope="col" className="px-4 py-4 text-center text-xs font-mono font-bold text-gray-600 uppercase tracking-widest w-24">
                    Siklus 2
                  </th>
                  <th scope="col" className="px-4 py-4 text-center text-xs font-mono font-bold text-gray-600 uppercase tracking-widest w-24">
                    Siklus 3
                  </th>
                  <th scope="col" className="px-4 py-4 text-center text-xs font-mono font-bold text-gray-600 uppercase tracking-widest w-20">
                    Maks
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-mono font-bold text-gray-600 uppercase tracking-widest rounded-r-xl">
                    Catatan Guru Pamong
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {currentInstrument.records.map((record, idx) => (
                  <tr key={idx} className="hover:bg-bg-soft/20 transition-all">
                    {/* Component & Indicator */}
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-gray-900 font-display">
                        {record.component}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed mt-1">
                        {record.indicator}
                      </p>
                    </td>

                    {/* Cycle 1 Score */}
                    <td className="px-4 py-5 text-center">
                      <span className="inline-block px-3 py-1 font-mono font-bold rounded-lg text-xs bg-amber-50 text-amber-600">
                        {record.siklus1}
                      </span>
                    </td>

                    {/* Cycle 2 Score */}
                    <td className="px-4 py-5 text-center">
                      <span className="inline-block px-3 py-1 font-mono font-bold rounded-lg text-xs bg-primary/10 text-primary">
                        {record.siklus2}
                      </span>
                    </td>

                    {/* Cycle 3 Score */}
                    <td className="px-4 py-5 text-center animate-pulse-subtle">
                      <span className="inline-block px-3 py-1 font-mono font-bold rounded-lg text-xs bg-emerald-50 text-emerald-600">
                        {record.siklus3}
                      </span>
                    </td>

                    {/* Max Score */}
                    <td className="px-4 py-5 font-mono text-center text-xs text-gray-400">
                      {record.maxScore}
                    </td>

                    {/* Notes */}
                    <td className="px-6 py-5 text-xs text-gray-600 leading-relaxed max-w-xs">
                      {record.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARD VIEW (Strictly matching prompt: 'tabel penilaian berubah menjadi kartu agar mudah dibaca di HP') */}
          <div className="md:hidden space-y-5" id="pamong-mobile-cards">
            {currentInstrument.records.map((record, idx) => (
              <div
                key={idx}
                id={`score-card-${idx}`}
                className="p-5 rounded-2xl bg-gradient-to-r from-white to-bg-soft/35 border border-primary/10 shadow-sm space-y-4"
              >
                {/* Mobile Card Header */}
                <div className="flex items-start justify-between">
                  <span className="px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-mono font-bold rounded-lg uppercase tracking-wider">
                    {record.component}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">
                    Maks {record.maxScore}
                  </span>
                </div>

                {/* Narrative Description Indicator */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {record.indicator}
                </p>

                {/* Graphical Cyclic Segment Progression */}
                <div className="bg-white p-3.5 rounded-xl border border-primary/5 space-y-2">
                  <p className="text-[10px] font-mono font-semibold text-gray-400 uppercase tracking-widest">
                    Kemajuan Nilai Siklus
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 rounded-lg bg-amber-50/75 border border-amber-200">
                      <p className="text-[9px] font-semibold text-amber-600">SIKLUS 1</p>
                      <p className="text-sm font-mono font-bold text-amber-700 mt-0.5">{record.siklus1}</p>
                    </div>
                    
                    <div className="text-center p-2 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-[9px] font-semibold text-primary">SIKLUS 2</p>
                      <p className="text-sm font-mono font-bold text-primary mt-0.5">{record.siklus2}</p>
                    </div>

                    <div className="text-center p-2 rounded-lg bg-emerald-50/75 border border-emerald-200">
                      <p className="text-[9px] font-semibold text-emerald-600 font-bold">SIKLUS 3</p>
                      <p className="text-sm font-mono font-bold text-emerald-700 mt-0.5">{record.siklus3}</p>
                    </div>
                  </div>
                </div>

                {/* Pamong Note if present */}
                {record.notes && (
                  <div className="bg-white/60 p-3 rounded-lg border-l-3 border-accent text-[11px] text-gray-500 leading-relaxed italic">
                    <strong>Catatan Pamong:</strong> "{record.notes}"
                  </div>
                )}
              </div>
            ))}
          </div>
<div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold italic">L7</div>
                <h4 className="text-xl font-bold text-gray-900">Penyusunan Perangkat Pembelajaran</h4>
              </div>
              <div className="bg-white rounded-3xl p-4 shadow-xl h-[600px] border-4 border-white overflow-hidden">
                <iframe 
                  id="iframe-pdf-lampiran7"
                  src="public/documents/Mandmip .pdf" 
                  className="w-full h-full rounded-2xl bg-gray-50"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
        </div>

        {/* Dynamic PDF Reader Viewer Block */}
        <PdfViewer documentId={currentInstrument.id} title={currentInstrument.title} />

      </div>
    </section>
  );
}

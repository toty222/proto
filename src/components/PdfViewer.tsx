/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useRef, useEffect } from "react";
import { Download, AlertCircle, FileText, Upload, Trash2, ExternalLink, Eye, HelpCircle } from "lucide-react";

interface PdfViewerProps {
  documentId: string; // "lampiran7" or "lampiran8"
  title: string;
}

export default function PdfViewer({ documentId, title }: PdfViewerProps) {
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<"iframe" | "interactive">("iframe");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto clean up object URLs when key dynamic parameters or unmount occur
  useEffect(() => {
    return () => {
      if (uploadedFileUrl) {
        URL.revokeObjectURL(uploadedFileUrl);
      }
    };
  }, [uploadedFileUrl]);

  // Reset custom upload when documentId changes to prevent wrong PDF spillover
  useEffect(() => {
    if (uploadedFileUrl) {
      URL.revokeObjectURL(uploadedFileUrl);
      setUploadedFileUrl(null);
      setUploadedFileName(null);
    }
  }, [documentId]);

  // Match default path to the local documents folder in public directory
  const defaultPdfPath = `/documents/${documentId}.pdf`;
  const activePdfPath = uploadedFileUrl || defaultPdfPath;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf") {
        if (uploadedFileUrl) {
          URL.revokeObjectURL(uploadedFileUrl);
        }
        const url = URL.createObjectURL(file);
        setUploadedFileUrl(url);
        setUploadedFileName(file.name);
        // Automatically keep active or guide them
        setPreviewMode("iframe");
      } else {
        alert("Mohon unggah file dengan format PDF saja.");
      }
    }
  };

  const clearUploadedFile = () => {
    if (uploadedFileUrl) {
      URL.revokeObjectURL(uploadedFileUrl);
    }
    setUploadedFileUrl(null);
    setUploadedFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Preset backup view contents in case the browser blocks PDF IFrame Rendering
  const renderSimulatedBackupContent = () => {
    if (documentId === "lampiran7") {
      return (
        <div className="space-y-6 text-gray-800 p-6 sm:p-10 max-w-2xl mx-auto bg-white rounded-xl shadow-glass border border-gray-150">
          <div className="border-b-2 border-primary/20 pb-4 mb-4">
            <h4 className="font-display font-extrabold text-lg text-primary uppercase tracking-wide">
              Lampiran 7: Instrumen Penyusunan RPP
            </h4>
            <p className="text-xs text-gray-500 font-mono">
              Dokumen Resmi Refleksi Awal & Rancangan Perangkat Pembelajaran - SMAN 3 Salatiga
            </p>
          </div>

          <div className="space-y-5 text-sm leading-relaxed">
            <h3 className="font-display font-bold text-base text-gray-900 border-l-4 border-accent pl-2.5">
              C. Tantangan dalam Implementasi Pembelajaran Mendalam
            </h3>
            
            <ol className="space-y-4 list-decimal pl-5 text-xs text-gray-600">
              <li>
                <span className="font-bold text-gray-950">Keterbatasan Waktu Pembelajaran:</span> Pembelajaran mendalam menuntut proses eksplorasi, diskusi, refleksi, dan aplikasi. Hal ini sering berbenturan dengan tuntutan kurikulum yang padat dan keterbatasan jam pelajaran di SMA Negeri 3 Salatiga.
              </li>
              <li>
                <span className="font-bold text-gray-950">Kesiapan Guru:</span> Tidak semua guru terbiasa merancang pembelajaran yang kontekstual, kolaboratif, dan reflektif. Dibutuhkan kompetensi pedagogis yang lebih tinggi serta kesiapan mental untuk berpindah dari "mengajar materi" menjadi "memfasilitasi proses belajar".
              </li>
              <li>
                <span className="font-bold text-gray-950">Kebiasaan Belajar Murid:</span> Banyak murid terbiasa dengan hafalan dan soal rutin (surface learning), sehingga ketika diminta untuk berpikir kritis, reflektif, atau mengaitkan dengan konteks nyata, mereka sering merasa kesulitan.
              </li>
              <li>
                <span className="font-bold text-gray-950">Penilaian yang Masih Dominan pada Aspek Kognitif:</span> Sistem evaluasi sering kali lebih menekankan pada hasil ujian tertulis (pilihan ganda, esai singkat) daripada proses berpikir, refleksi, dan kemampuan mengaitkan konsep dengan konteks nyata.
              </li>
              <li>
                <span className="font-bold text-gray-950">Sumber Belajar yang Terbatas:</span> Pembelajaran mendalam idealnya menggunakan sumber belajar yang beragam (konteks nyata, data lapangan, projek, eksperimen). Namun, tidak semua sekolah memiliki fasilitas atau akses memadai.
              </li>
            </ol>
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-6 text-gray-800 p-6 sm:p-10 max-w-2xl mx-auto bg-white rounded-xl shadow-glass border border-gray-150">
          <div className="border-b-2 border-accent/20 pb-4 mb-4">
            <h4 className="font-display font-extrabold text-lg text-accent uppercase tracking-wide">
              Lampiran 8: Instrumen Praktik Mengajar (PPL)
            </h4>
            <p className="text-xs text-gray-500 font-mono">
              Dokumen Resmi Penilaian Praktik Lapangan - SMAN 3 Salatiga
            </p>
          </div>

          <div className="space-y-5 text-sm leading-relaxed">
            <h3 className="font-display font-bold text-base text-gray-900 border-l-4 border-primary pl-2.5">
              D. Refleksi & Hasil Observasi Guru Pamong
            </h3>
            
            <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-200 text-xs text-orange-900 italic">
              "Saudara Yan Amru Abdilah menunjukkan pembawaan materi yang sangat lugas, tanggap mengayomi murid-murid di SMA Negeri 3 Salatiga, serta berani melakukan eksperimentasi model mengajar berbasis teknologi. Pada Siklus 3, lompatan kompetensinya memukau terutama dalam aspek memicu daya pikir kritis (HOTS) melalui teknik bertanya scaffolding."
            </div>

            <div className="space-y-3 font-sans text-xs text-gray-600">
              <p><strong className="text-gray-900">1. Pengolahan Nilai Asesmen Akhir:</strong> Praktikan telah memproses data asesmen formatif secara kontinu melalui lembar observasi digital.</p>
              <p><strong className="text-gray-900">2. Keaktifan Siswa dalam Diskusi Sokratik:</strong> Mampu menghidupkan suasana kelas besar yang heterogen menggunakan analogi Salatiga dan Demak.</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="mt-12 space-y-4">
      {/* Title block */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h4 className="font-display font-extrabold text-lg text-gray-900 flex items-center gap-1.5 animate-fade-in animate-duration-300">
            <span className="p-1 px-2.5 rounded-lg bg-primary/10 text-primary text-xs font-mono flex items-center gap-1">
              <FileText className="h-3.5 w-3.5" />
              PDF VIEW
            </span>
            {title}
          </h4>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
            {uploadedFileName 
              ? `Berkas khusus aktif: ${uploadedFileName}` 
              : "Menampilkan berkas resmi lampiran dari folder lokal PPG."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Invisible file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="application/pdf"
            className="hidden"
          />

          {/* Upload Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-xl shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer border border-slate-750"
            title="Unggah file PDF baru dari perangkat Anda"
          >
            <Upload className="h-3.5 w-3.5 text-accent" />
            {uploadedFileName ? "Ganti PDF" : "Unggah PDF"}
          </button>

          {/* Reset button only if user uploaded a file */}
          {uploadedFileUrl && (
            <button
              onClick={clearUploadedFile}
              className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-medium text-xs rounded-xl transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer border border-red-100"
              title="Kembali ke berkas sistem default"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Batal
            </button>
          )}

          {/* Open in New Tab Bypass (Essential for Edge sandbox issues) */}
          <a
            href={activePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium text-xs rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer border border-indigo-150"
            title="Buka langsung di tab baru untuk menghindari blokir pratinjau browser"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Buka di Tab Baru
          </a>

          {/* Download button */}
          <a
            href={activePdfPath}
            download={uploadedFileName || `${documentId}.pdf`}
            className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white font-medium text-xs rounded-xl shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Download className="h-3.5 w-3.5" />
            Unduh PDF
          </a>
        </div>
      </div>

      {/* Warning layout helpful helper when custom pdf is uploaded */}
      {uploadedFileUrl && (
        <div className="p-3.5 bg-yellow-50 border border-yellow-250 rounded-2xl flex items-start gap-2.5 text-xs text-yellow-905">
          <AlertCircle className="h-4.5 w-4.5 text-orange-500 mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <p className="font-bold text-gray-900">Perhatian: Pembatasan Sandbox Browser Microsoft Edge/Chrome</p>
            <p className="text-gray-600">
              Browser Edge dan Chrome sering memblokir berkas unggahan lokal (<code className="bg-white/60 px-1 py-0.2 rounded font-mono text-black">blob:</code>) di dalam pratinjau jika berada di dalam ruang simulasi. Jika layar di bawah bertuliskan <span className="font-bold underline text-red-700">"Blocked by Edge"</span>, silakan klik tombol <strong className="font-bold text-indigo-800">"Buka di Tab Baru"</strong> di kanan atas atau ubah mode ke <strong className="font-bold text-gray-800">"Teks Interaktif"</strong> di panel toolbar di bawah.
            </p>
          </div>
        </div>
      )}

      {/* Main Document Viewer Frame */}
      <div className="relative rounded-3xl overflow-hidden border border-primary/15 bg-neutral-850 shadow-glass flex flex-col h-[650px]">
        
        {/* Styled browser-like utility header */}
        <div className="bg-[#1E1E1E] text-gray-400 px-4 py-3 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono select-none">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
            </div>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-450 font-sans truncate font-medium max-w-[150px] sm:max-w-md">
              {uploadedFileName ? `Sesi Unggahan: ${uploadedFileName}` : activePdfPath}
            </span>
          </div>

          {/* Mode Selector for compatibility fallback */}
          <div className="flex items-center bg-neutral-900 p-0.5 rounded-lg border border-neutral-850">
            <button
              onClick={() => setPreviewMode("iframe")}
              className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all flex items-center gap-1 ${
                previewMode === "iframe" ? "bg-primary text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              <Eye className="h-3 w-3" />
              Pratinjau PDF (Iframe)
            </button>
            <button
              onClick={() => setPreviewMode("interactive")}
              className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all flex items-center gap-1 ${
                previewMode === "interactive" ? "bg-accent text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              <FileText className="h-3 w-3" />
              Teks Interaktif (Aman)
            </button>
          </div>
        </div>

        {/* Dynamic Display Area based on previewMode selection */}
        {previewMode === "iframe" ? (
          <iframe
            key={activePdfPath}
            src={`${activePdfPath}#view=FitH`}
            title={`Dokumen ${title}`}
            className="w-full flex-grow border-none bg-neutral-900"
          />
        ) : (
          <div className="flex-grow overflow-auto bg-neutral-800 p-4 sm:p-8 flex items-start justify-center">
            {renderSimulatedBackupContent()}
          </div>
        )}

        {/* Info label in footer */}
        <div className="bg-[#1a1a1a] border-t border-neutral-850 px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-accent flex-shrink-0" />
            <p className="font-sans text-[11px]">
              {uploadedFileName 
                ? "Menampilkan file khusus hasil unggahan Anda." 
                : `Menampilkan template default berkas ${documentId}.pdf dari folder lokal.`}
            </p>
          </div>
          <p className="font-mono text-[10px] bg-accent/10 text-accent px-2.5 py-1 rounded-lg font-bold border border-accent/20">
            Sistem PPG Kemendikbudristek
          </p>
        </div>

      </div>
    </div>
  );
}


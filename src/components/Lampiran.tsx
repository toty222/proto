import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Download, Plus, Camera, Image, FileText, FileSpreadsheet, 
  Video, Star, UploadCloud, X, Check, Trash2, Shield, Eye 
} from "lucide-react";

export interface AttachmentItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Perangkat Ajar" | "Penilaian" | "Karya Siswa" | "Galeri";
  fileType: "PDF" | "DOCX" | "XLSX" | "MP4" | "FOTO";
  colorClass: string;
  imgUrl?: string; // Captured camera base64, uploaded file, or local source string (e.g. /documents/your-photo.jpg)
  isCustom?: boolean;
}

export default function Lampiran() {
  const [activeTab, setActiveTab] = useState<string>("Semua");
  const [items, setItems] = useState<AttachmentItem[]>(() => {
    const saved = localStorage.getItem("ppg_portfolio_attachments_v2");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed
            .filter((item: any) => item.id !== "6" && item.id !== "7" && item.id !== "3")
            .map((item: any) => {
              if (item.category === "Asesmen") {
                return { ...item, category: "Penilaian" };
              }
              if (item.id === "g1") {
                return {
                  ...item,
                  title: "Praktik Mengajar",
                  subtitle: "gambar guru latihan mengajar dengan didampingi guru pamong",
                  imgUrl: "/documents/gam1.jpeg"
                };
              }
              if (item.id === "g2") {
                return {
                  ...item,
                  title: "Praktikum Pemrograman Menyenangkan",
                  subtitle: "Suasana antusias siswa berkelompok saat mempraktikkan game interaktif sederhana di Scratch.",
                  imgUrl: "/documents/gam2.jpeg"
                };
              }
              if (item.id === "g3") {
                return {
                  ...item,
                  title: "Pembelajaran difrensiasi",
                  subtitle: "Siswa answering writing on board",
                  imgUrl: "/documents/gam3.jpeg"
                };
              }
              if (item.id === "g4") {
                return {
                  ...item,
                  title: "Penilaian mengajar oleh guru pamong",
                  subtitle: "Penilaian mengajar oleh guru pamong",
                  imgUrl: "/documents/gam4.jpeg"
                };
              }
              if (item.id === "1") {
                return {
                  ...item,
                  title: "RPP - Algoritma dan Pemrograman 1",
                  subtitle: "RPP menggunakan menggunakan pembelajaran difrensial",
                  fileType: "PDF",
                  imgUrl: "/documents/rpp1.pdf"
                };
              }
              if (item.id === "2") {
                return {
                  ...item,
                  title: "RPP – Algoritma dan Pemrograman 2",
                  subtitle: "RPP menggunakan menggunakan pembelajaran difrensial",
                  fileType: "PDF",
                  imgUrl: "/documents/rpp2.pdf"
                };
              }
              if (item.id === "4") {
                return {
                  ...item,
                  title: "Penilaian Lampiran 7",
                  subtitle: "Instrumen Penilaian Penyusunan Perangkat Pembelajaran",
                  fileType: "PDF",
                  imgUrl: "/documents/Lam7.pdf"
                };
              }
              if (item.id === "5") {
                return {
                  ...item,
                  title: "Penilaian Lampiran 8",
                  subtitle: "Instrumen Penilaian Praktik Mengajar",
                  fileType: "PDF",
                  imgUrl: "/documents/lam8.pdf"
                };
              }
              if (item.id === "8") {
                return {
                  ...item,
                  title: "portofolio produk 1",
                  subtitle: "pembuatan pyramid dengan fungsi Printf",
                  category: "Karya Siswa",
                  fileType: "FOTO",
                  imgUrl: "/documents/gam5.jpg"
                };
              }
              if (item.id === "9") {
                return {
                  ...item,
                  title: "portofolio produk 2",
                  subtitle: "Tugas siswa membuat program sederhana",
                  category: "Karya Siswa",
                  fileType: "FOTO",
                  imgUrl: "/documents/gam6.jpg"
                };
              }
              return item;
            });
        }
      } catch (e) { console.error(e); }
    }
    return [
      /* =========================================================================
         CATATAN: Anda dapat mengubah url gambar di bawah (imgUrl) ke file lokal Anda
         seperti "/documents/foto_anda.jpg" atau menggunakan tombol edit di UI.
         ========================================================================= */
      {
        id: "g1",
        title: "Praktik Mengajar",
        subtitle: "gambar guru latihan mengajar dengan didampingi guru pamong",
        category: "Galeri",
        fileType: "FOTO",
        colorClass: "emerald",
        imgUrl: "/documents/gam1.jpeg"
      },
      {
        id: "g2",
        title: "Praktikum Pemrograman Menyenangkan",
        subtitle: "Suasana antusias siswa berkelompok saat mempraktikkan game interaktif sederhana di Scratch.",
        category: "Galeri",
        fileType: "FOTO",
        colorClass: "blue",
        imgUrl: "/documents/gam2.jpeg"
      },
      {
        id: "g3",
        title: "Pembelajaran difrensiasi",
        subtitle: "Siswa menjawab soal dengan menulis di papan tulis",
        category: "Galeri",
        fileType: "FOTO",
        colorClass: "amber",
        imgUrl: "/documents/gam3.jpeg"
      },
      {
        id: "g4",
        title: "Penilaian mengajar oleh guru pamong",
        subtitle: "Penilaian mengajar oleh guru pamong",
        category: "Galeri",
        fileType: "FOTO",
        colorClass: "pink",
        imgUrl: "/documents/gam4.jpeg"
      },
      {
        id: "1",
        title: "RPP - Algoritma dan Pemrograman 1",
        subtitle: "RPP menggunakan menggunakan pembelajaran difrensial",
        category: "Perangkat Ajar",
        fileType: "PDF",
        colorClass: "rose",
        imgUrl: "/documents/rpp1.pdf"
      },
      {
        id: "2",
        title: "RPP – Algoritma dan Pemrograman 2",
        subtitle: "RPP menggunakan menggunakan pembelajaran difrensial",
        category: "Perangkat Ajar",
        fileType: "PDF",
        colorClass: "blue",
        imgUrl: "/documents/rpp2.pdf"
      },
      {
        id: "4",
        title: "Penilaian Lampiran 7",
        subtitle: "Instrumen Penilaian Penyusunan Perangkat Pembelajaran",
        category: "Penilaian",
        fileType: "PDF",
        colorClass: "amber",
        imgUrl: "/documents/Lam7.pdf"
      },
      {
        id: "5",
        title: "Penilaian Lampiran 8",
        subtitle: "Instrumen Penilaian Praktik Mengajar",
        category: "Penilaian",
        fileType: "PDF",
        colorClass: "teal",
        imgUrl: "/documents/lam8.pdf"
      },
      {
        id: "8",
        title: "portofolio produk 1",
        subtitle: "pembuatan pyramid dengan fungsi Printf",
        category: "Karya Siswa",
        fileType: "FOTO",
        colorClass: "pink",
        imgUrl: "/documents/gam5.jpg"
      },
      {
        id: "9",
        title: "portofolio produk 2",
        subtitle: "Tugas siswa membuat program sederhana",
        category: "Karya Siswa",
        fileType: "FOTO",
        colorClass: "violet",
        imgUrl: "/documents/gam6.jpg"
      }
    ];
  });

  const categories = ["Semua", "Perangkat Ajar", "Penilaian", "Karya Siswa", "Galeri"];

  // State for Add Modal & Actions
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newSubtitle, setNewSubtitle] = useState("");
  const [newCategory, setNewCategory] = useState<"Perangkat Ajar" | "Penilaian" | "Karya Siswa" | "Galeri">("Perangkat Ajar");
  const [newFileType, setNewFileType] = useState<"PDF" | "DOCX" | "XLSX" | "MP4" | "FOTO">("FOTO");
  const [customImage, setCustomImage] = useState<string>("");
  const [customLocalPath, setCustomLocalPath] = useState<string>(""); // allows typing direct path /documents/photo.jpg etc
  
  // State for Direct Editing of any Image/Card Source Path
  const [editingItem, setEditingItem] = useState<AttachmentItem | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingSubtitle, setEditingSubtitle] = useState("");
  const [editingImgUrl, setEditingImgUrl] = useState("");

  // Lightbox view state
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Camera capture states
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Download simulation state
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("ppg_portfolio_attachments_v2", JSON.stringify(items));
  }, [items]);

  // Handle stream cleanup
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    setCameraError("");
    setIsCameraActive(true);
    try {
      if (streamRef.current) {
        stopCamera();
      }
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480, facingMode: "user" } 
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(e => console.error("Video play interrupted", e));
      }
    } catch (err: any) {
      console.error("Camera access error:", err);
      setCameraError("Tidak dapat mengakses kamera. Pastikan izin kamera diberikan.");
      setIsCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      try {
        streamRef.current.getTracks().forEach((track) => track.stop());
      } catch (e) {
        console.error("Error stopping tracks", e);
      }
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth || 640;
        canvas.height = videoRef.current.videoHeight || 480;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          // Apply a neat filter to make it look professional / vintage bright
          const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
          setCustomImage(dataUrl);
          setNewFileType("FOTO");
          stopCamera();
        }
      } catch (err) {
        console.error("Capture image error", err);
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setCustomImage(reader.result as string);
          setNewFileType("FOTO");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const colors = ["emerald", "blue", "rose", "amber", "teal", "pink", "purple", "violet", "sky"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newItem: AttachmentItem = {
      id: Date.now().toString(),
      title: newTitle,
      subtitle: newSubtitle || "Dokumen pendukung portofolio",
      category: newCategory,
      fileType: (newCategory === "Galeri" || newCategory === "Karya Siswa") ? "FOTO" : newFileType,
      colorClass: randomColor,
      imgUrl: customLocalPath.trim() || customImage || undefined,
      isCustom: true
    };

    setItems([newItem, ...items]);
    
    // Reset form
    setNewTitle("");
    setNewSubtitle("");
    setNewCategory("Perangkat Ajar");
    setNewFileType("FOTO");
    setCustomImage("");
    setCustomLocalPath("");
    setIsModalOpen(false);
    stopCamera();
  };

  const startEditItem = (item: AttachmentItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingItem(item);
    setEditingTitle(item.title);
    setEditingSubtitle(item.subtitle);
    setEditingImgUrl(item.imgUrl || "");
  };

  const handleUpdateItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    setItems(items.map(item => {
      if (item.id === editingItem.id) {
        return {
          ...item,
          title: editingTitle,
          subtitle: editingSubtitle,
          imgUrl: editingImgUrl.trim() || undefined
        };
      }
      return item;
    }));

    setEditingItem(null);
    setEditingTitle("");
    setEditingSubtitle("");
    setEditingImgUrl("");
  };

  const handleDeleteItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Apakah Anda yakin ingin menghapus lampiran ini?")) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const triggerDownload = async (item: AttachmentItem) => {
    if (downloadingId) return; // Wait for current download

    setDownloadingId(item.id);
    setDownloadProgress(5);

    // Start a visual progress indicator
    let currentProgress = 5;
    const progressInterval = setInterval(() => {
      currentProgress = Math.min(currentProgress + Math.floor(Math.random() * 15) + 5, 95);
      setDownloadProgress(currentProgress);
    }, 150);

    try {
      let downloadUrl = "";
      let isBlobCreated = false;

      if (item.imgUrl) {
        try {
          const response = await fetch(item.imgUrl);
          if (!response.ok) {
            throw new Error(`Fetch failed with status ${response.status}`);
          }
          const blob = await response.blob();
          downloadUrl = URL.createObjectURL(blob);
          isBlobCreated = true;
        } catch (err) {
          console.error("Fetch download failed, falling back to direct URL:", err);
          // Fallback to direct URL if fetch fails
          downloadUrl = item.imgUrl;
        }
      }

      if (!downloadUrl) {
        // Fallback to creating a local mock file so it never fails
        const mockBlob = new Blob([`PPG Portfolio Document - ${item.title}`], { type: "text/plain" });
        downloadUrl = URL.createObjectURL(mockBlob);
        isBlobCreated = true;
      }

      // Finish progress animation beautifully
      clearInterval(progressInterval);
      setDownloadProgress(100);

      setTimeout(() => {
        setDownloadingId(null);
        
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = `${item.title.toLowerCase().replace(/[\s–-]+/g, "_")}.${item.fileType.toLowerCase()}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Clean up the object URL after triggering click if we created it
        if (isBlobCreated) {
          setTimeout(() => {
            URL.revokeObjectURL(downloadUrl);
          }, 1000);
        }
      }, 400);

    } catch (error) {
      console.error("Download processing errored:", error);
      clearInterval(progressInterval);
      setDownloadingId(null);
      
      // Ultimate resilient fallback if everything crashed: open direct link in a new tab
      if (item.imgUrl) {
        window.open(item.imgUrl, "_blank");
      }
    }
  };

  // Filter items matching activeTab
  const filteredItems = items.filter(
    (item) => activeTab === "Semua" || item.category === activeTab
  );

  return (
    <section id="lampiran" className="py-20 bg-gradient-to-b from-[#efe9e4]/20 via-white to-[#efe9e4]/30 relative overflow-hidden">
      {/* Visual background ambient blurs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#cfac8e]/10 rounded-full filter blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block matching the standard spec design */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#cfac8e]/10 text-[#cfac8e] rounded-full text-xs font-semibold shadow-sm">
            <span>Dokumentasi</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Lampiran & Portofolio
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Kumpulan dokumen, perangkat pembelajaran, dan dokumentasi kegiatan PPL saya.
          </p>
        </div>

        {/* Filter Tab Row & Add Attachment Trigger Box */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-gray-100">
          
          {/* Categories Horizontal Tabs Scroll Row */}
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start w-full">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  id={`cat-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-800 text-white shadow-md shadow-emerald-800/10"
                      : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Portfolio Document Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isGallery = item.category === "Galeri" || item.category === "Karya Siswa";
              return (
                <motion.div
                  key={item.id}
                  id={`attachment-card-${item.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-3xl border border-gray-100/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group"
                >
                  
                  {/* Visual Header Document Box */}
                  <div 
                    onClick={() => {
                      if (item.imgUrl) {
                        setLightboxImg(item.imgUrl);
                      }
                    }}
                    className={`relative p-6 bg-gradient-to-b from-gray-50/50 to-white border-b border-gray-50 flex items-center justify-center min-h-[180px] ${
                      item.imgUrl ? "cursor-zoom-in" : ""
                    }`}
                  >
                    
                    {/* File badge type (top-right) */}
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-white/95 border border-gray-100 shadow-sm text-[10px] font-extrabold uppercase text-gray-500 tracking-wider z-20">
                      {item.fileType}
                    </span>

                    {/* If custom image base64 or path exists, show actual preview with styled vignette */}
                    {item.imgUrl && item.fileType === "FOTO" ? (
                      <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <img 
                          src={item.imgUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
                        
                        {/* Hover Overlay Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                          <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                            <Eye className="h-6 w-6" />
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Elegant Pure-CSS Document visual representations conforming to mock */
                      <div className="flex flex-col items-center gap-3">
                        {item.fileType === "PDF" && (
                          <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shadow-inner">
                            <FileText className="h-8 w-8 stroke-[1.5]" />
                          </div>
                        )}
                        
                        {item.fileType === "DOCX" && (
                          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shadow-inner">
                            <FileText className="h-8 w-8 stroke-[1.5]" />
                          </div>
                        )}

                        {item.fileType === "XLSX" && (
                          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-inner">
                            <FileSpreadsheet className="h-8 w-8 stroke-[1.5]" />
                          </div>
                        )}

                        {item.fileType === "MP4" && (
                          <div className="w-16 h-16 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-500 shadow-inner">
                            <Video className="h-8 w-8 stroke-[1.5]" />
                          </div>
                        )}

                        {item.fileType === "FOTO" && (
                          <div className="w-16 h-16 rounded-2xl bg-[#cfac8e]/10 border border-[#cfac8e]/20 flex items-center justify-center text-[#cfac8e] shadow-inner">
                            <Image className="h-8 w-8 stroke-[1.5]" />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Actions for custom uploaded user files */}
                    {(item.isCustom || isGallery) && (
                      <button
                        onClick={(e) => handleDeleteItem(item.id, e)}
                        className="absolute top-4 left-4 p-2 rounded-full bg-white/95 hover:bg-red-50 text-gray-400 hover:text-red-500 border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm z-20"
                        title="Hapus Lampiran"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between gap-5 bg-white">
                    
                    {/* Descripts */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold text-[#cfac8e] uppercase tracking-widest block">
                        {item.category}
                      </span>
                      <h4 className="font-display font-bold text-gray-900 text-sm sm:text-base leading-snug line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Action Triggers */}
                    <div>
                      {isGallery ? (
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (item.imgUrl) setLightboxImg(item.imgUrl);
                            }}
                            className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-950 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors duration-200"
                          >
                            <Eye className="h-3.5 w-3.5" />
                            <span>Zoom Foto</span>
                          </button>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <button
                            onClick={() => triggerDownload(item)}
                            disabled={downloadingId !== null}
                            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all duration-300 ${
                              downloadingId === item.id
                                ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                                : "bg-white border-gray-150 hover:bg-gray-50 text-gray-700 hover:text-gray-900 hover:border-gray-300"
                            }`}
                          >
                            {downloadingId === item.id ? (
                              <div className="flex items-center gap-2.5">
                                {/* Animated circular loader or spinner */}
                                <div className="w-3.5 h-3.5 border-2 border-emerald-800 border-t-transparent rounded-full animate-spin" />
                                <span>Mempersiapkan ({downloadProgress}%)</span>
                              </div>
                            ) : (
                              <>
                                <Download className="h-3.5 w-3.5 text-gray-400 group-hover:text-gray-600" />
                                <span>Unduh</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dynamic empty state representation */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <Image className="h-12 w-12 mx-auto text-gray-300 mb-4 stroke-[1]" />
            <h4 className="font-display font-bold text-gray-700 text-base mb-1">Belum Ada Lampiran</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Silakan tambah lampiran atau ambil foto PPL baru di atas.</p>
          </div>
        )}

      </div>

      {/* MODAL FOR ADDING ATTACHMENTS & REALTIME CAMERA SNAPSHOTTING */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-55 overflow-y-auto flex items-center justify-center p-4">
            
            {/* Dark glass backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsModalOpen(false);
                stopCamera();
              }}
              className="fixed inset-0 bg-gray-950/45 backdrop-blur-sm"
              id="modal-backdrop"
            />

            {/* Modal Dialog Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative z-10 overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]"
              id="upload-modal-container"
            >
              
              {/* Sticky Modal Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 text-base">
                      Tambah Lampiran & Dokumentasi PPL
                    </h3>
                    <p className="text-gray-500 text-xs">Ambil foto pengajaran atau unggah file perangkat ajar baru.</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    stopCamera();
                  }}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Form Content */}
              <form onSubmit={handleSaveItem} className="p-6 overflow-y-auto space-y-6 flex-grow">
                
                {/* 2 Column fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Title Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">Judul Lampiran</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Contoh: Foto Praktik Sokratik Terapan" 
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/15 focus:border-emerald-800 transition-all"
                    />
                  </div>

                  {/* Subtitle/Description Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">Keterangan / Subtitle</label>
                    <input 
                      type="text" 
                      placeholder="Contoh: Dokumentasi keaktifan diskusi kelas X-A" 
                      value={newSubtitle}
                      onChange={(e) => setNewSubtitle(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/15 focus:border-emerald-800 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category dropdown selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">Kategori</label>
                    <select 
                      value={newCategory}
                      onChange={(e) => {
                        setNewCategory(e.target.value as any);
                        if (e.target.value === "Galeri" || e.target.value === "Karya Siswa") {
                          setNewFileType("FOTO");
                        }
                      }}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-800/15 focus:border-emerald-800 transition-all text-gray-800"
                    >
                      <option value="Perangkat Ajar">Perangkat Ajar</option>
                      <option value="Penilaian">Penilaian PPL</option>
                      <option value="Karya Siswa">Karya & Produk Siswa</option>
                      <option value="Galeri">Galeri Kegiatan</option>
                    </select>
                  </div>

                  {/* Attachment Format Type dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">Format Pembukti</label>
                    <select 
                      value={newFileType}
                      disabled={newCategory === "Galeri" || newCategory === "Karya Siswa"}
                      onChange={(e) => setNewFileType(e.target.value as any)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-800/15 focus:border-emerald-800 transition-all text-gray-800 disabled:opacity-60"
                    >
                      <option value="FOTO">Foto Dokumentasi (JPEG / PNG)</option>
                      <option value="PDF">Dokumen Elektronik (PDF)</option>
                      <option value="DOCX">Dokumen Microsoft Word (DOCX)</option>
                      <option value="XLSX">Microsoft Excel Spreadsheet (XLSX)</option>
                      <option value="MP4">Video Dokumentasi Belajar (MP4)</option>
                    </select>
                  </div>
                </div>

                {/* Specific field for typing Local image source path (like "/documents/pic.jpg") */}
                <div className="space-y-1.5 p-4 rounded-2xl bg-[#cfac8e]/5 border border-[#cfac8e]/10 text-amber-950">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-gray-800 block">Atau Input Source Gambar Lokal (Berubah Lewat Local Source)</label>
                    <span className="text-[10px] font-semibold text-[#cfac8e] bg-white border px-1.5 py-0.5 rounded-md">Atur Offline</span>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Contoh: /documents/foto_ppl.jpg atau https://images.unsplash.com/..." 
                    value={customLocalPath}
                    onChange={(e) => {
                      setCustomLocalPath(e.target.value);
                      if (e.target.value.trim()) {
                        setNewFileType("FOTO");
                      }
                    }}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#cfac8e]/20 focus:border-[#cfac8e] transition-all text-gray-800 font-sans"
                  />
                  <p className="text-[10px] text-gray-500 leading-normal mt-1">
                    Anda bisa mengetik path lokal aset Anda secara tertulis di atas (misal <code className="font-mono text-[9px] bg-white px-1 py-0.5 rounded border">/documents/foto_saya.jpg</code>) sehingga gambarnya disuplai langsung dari folder lokal Anda.
                  </p>
                </div>

                {/* CORE CAMERA SCANNER OR PICTURE CHOOSE ZONE */}
                <div className="border border-gray-200 rounded-2xl p-4 bg-gray-50/50 space-y-4">
                  
                  {/* Toggle Button layout */}
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="text-xs font-bold text-gray-800">Bukti Kegiatan / Foto Media</span>
                    
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (isCameraActive) {
                            stopCamera();
                          } else {
                            startCamera();
                          }
                        }}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                          isCameraActive
                            ? "bg-amber-100 text-amber-800"
                            : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                        }`}
                      >
                        <Camera className="h-3.5 w-3.5" />
                        <span>{isCameraActive ? "Nonaktifkan Kamera" : "Gunakan Kamera Aktif"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Video webcam live streaming preview box */}
                  {isCameraActive && (
                    <div className="relative aspect-video max-w-md mx-auto rounded-xl overflow-hidden border border-gray-200 bg-black shadow-inner flex flex-col justify-between">
                      <video 
                        ref={videoRef}
                        className="w-full h-full object-cover transform scale-x-[-1]" 
                        playsInline
                        muted
                      />
                      <div className="absolute inset-x-0 bottom-4 flex justify-center z-10">
                        <button
                          type="button"
                          onClick={capturePhoto}
                          className="px-5 py-2 rounded-full bg-emerald-800 hover:bg-emerald-950 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-800/20 active:scale-95 transition-transform"
                        >
                          <Camera className="h-4 w-4" />
                          <span>Ambil Gambar (Snapshot)</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Fallback Error message */}
                  {cameraError && (
                    <p className="text-xs text-red-500 text-center font-medium">{cameraError}</p>
                  )}

                  {/* If image is already captured or picked, show a giant thumbnail */}
                  {customImage ? (
                    <div className="space-y-2">
                      <div className="relative aspect-video max-w-sm mx-auto rounded-xl overflow-hidden border border-gray-200 group-hover:scale-101 transition-transform">
                        <img 
                          src={customImage} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <button
                          type="button"
                          onClick={() => setCustomImage("")}
                          className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-red-600 text-white transition-colors"
                          title="Hapus gambar ini"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-[10px] text-gray-500 text-center">Foto siap dilampirkan ke dalam portofolio</p>
                    </div>
                  ) : (
                    /* Grid File Upload Drag zone if camera is not running or no snapshot exists */
                    !isCameraActive && (
                      <div className="border border-dashed border-gray-300 rounded-xl p-8 bg-white text-center cursor-pointer hover:border-emerald-800/60 transition-colors relative">
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <UploadCloud className="h-10 w-10 text-gray-300 mx-auto mb-2 stroke-[1.5]" />
                        <h5 className="font-bold text-gray-700 text-xs sm:text-sm mb-0.5">Unggah Gambar Portfolio</h5>
                        <p className="text-gray-400 text-[10px] sm:text-xs">Drag & drop atau klik untuk memilih file dari komputer Anda</p>
                      </div>
                    )
                  )}

                </div>

              </form>

              {/* Sticky Modal Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex items-center justify-end gap-3 rounded-b-3xl">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    stopCamera();
                  }}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-100 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleSaveItem}
                  disabled={!newTitle.trim()}
                  className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-800/10 transition-colors disabled:opacity-55 disabled:cursor-not-allowed"
                >
                  Simpan Portofolio
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

      {/* MODAL FOR DIRECT EDITING (LOCAL SOURCE & TEXTS) */}
      <AnimatePresence>
        {editingItem && (
          <div className="fixed inset-0 z-55 overflow-y-auto flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingItem(null)}
              className="fixed inset-0 bg-gray-950/45 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white w-full max-w-lg rounded-3xl shadow-2xl relative z-10 overflow-hidden border border-gray-100 p-6 space-y-5"
            >
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 text-sm sm:text-base">
                      Ubah Source Lampiran & Data
                    </h3>
                    <p className="text-gray-500 text-[10px] sm:text-xs">Ubah link / file path dokumen ke offline source secara fleksibel</p>
                  </div>
                </div>
                <button onClick={() => setEditingItem(null)} className="p-1.5 rounded-full hover:bg-gray-105 text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleUpdateItem} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 block">Judul Dokumen / Aktivitas</label>
                  <input 
                    type="text" 
                    required
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#cfac8e]/15 focus:border-[#cfac8e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 block">Keterangan / Subtitle</label>
                  <textarea 
                    value={editingSubtitle}
                    onChange={(e) => setEditingSubtitle(e.target.value)}
                    rows={2}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#cfac8e]/15 focus:border-[#cfac8e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-gray-700 block">Source Dokumen / Gambar Lokal (Offline) atau URL</label>
                    <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">Local Source OK</span>
                  </div>
                  <input 
                    type="text" 
                    value={editingImgUrl}
                    placeholder="Contoh: /documents/ModulAjar.pdf atau /documents/foto.jpg"
                    onChange={(e) => setEditingImgUrl(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 font-sans focus:outline-none focus:ring-2 focus:ring-[#cfac8e]/15 focus:border-[#cfac8e]"
                  />
                  <p className="text-[10px] text-gray-500 leading-normal">
                    Tulis path relatif file lokal yang Anda taruh di dalam folder project Anda (misal <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-[9px]">/documents/ModulAjar.pdf</code> atau <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-[9px]">/documents/foto_1.jpg</code>), atau Anda juga bisa mengetik link URL file internet mana saja.
                  </p>
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t">
                  <button
                    type="button"
                    onClick={() => setEditingItem(null)}
                    className="px-5 py-2 rounded-xl border text-xs font-semibold hover:bg-gray-100 text-gray-650"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shadow-md shadow-emerald-800/10"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX ZOOM MODAL FOR HIGHER QUALITY VIEWING */}
      <AnimatePresence>
        {lightboxImg && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[85vh] z-10 overflow-hidden flex flex-col items-center"
            >
              <button 
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-red-650 transition-colors z-20 shadow"
                title="Tutup Preview"
              >
                <X className="h-5 w-5" />
              </button>
              <img 
                src={lightboxImg} 
                alt="Zoomed Portfolio" 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

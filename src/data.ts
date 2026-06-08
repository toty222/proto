/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StudentProfile, TeacherModel, ArtefactAspect, Instrument } from "./types";

export const profileData: StudentProfile = {
  name: "Yan Amru Abdilah",
  pggCampus: "Universitas Kristen Satya Wacana (UKSW)",
  pplSchool: "SMA Negeri 3 Salatiga",
  origin: "Demak, Jawa Tengah",
  originUnique: "Wonosobo adalah surga di lereng pegunungan dengan julukan 'Negeri di Atas Awan'. Dikelilingi oleh kemegahan lereng Gunung Sindoro dan Gunung Sumbing, kota asal saya terkenal akan kawasan bersejarah Dieng Plateau dengan mistisisme kental, fenomena embun es upas yang memikat, tradisi pemotongan rambut gimbal yang mistwi, buah khas Carica yang segar, serta kehangatan semangkuk Mie Ongklok legendaris kala udara dingin menyelimuti. Karakter alam pegunungan yang asri ini menanamkan jiwa ketenangan, kegigihan hidup, kehangatan empati, serta keramahan yang mendalam di dalam nadi saya.",
  inspiration: "Inspirasi terbesar saya lahir ketika menyaksikan anak-anak hebat di daerah asal saya berjuang menembus keterbatasan untuk mendapatkan pendidikan yang layak. Saya tersadar bahwa guru adalah arsitek jiwa paling krusial bagi masa depan bangsa. Melalui bimbingan akademik yang kokoh di UKSW and pembelajaran lapangan yang nyata selama PPL di SMA Negeri 3 Salatiga, tekad saya mengkristal untuk tidak sekadar menjadi 'pengajar kurikulum', melainkan seorang pendidik transformatif yang mampu menggugah potensi terdalam dari setiap keunikan peserta didik.",
  vision: "Tujuan mulia saya adalah bertransformasi menjadi guru yang seutuhnya profesional, berkarakter mulia, adaptif menyongsong perkembangan zaman melalui integrasi teknologi pembelajaran (TPACK), serta senantiasa mengedepankan keberpihakan pada siswa di setiap rancangan aksi pembelajaran.",
  quote: "Pendidik yang hebat tidak sekadar mentransfer pengetahuan; mereka menyalakan api rasa ingin tahu, melahirkan pemikiran mandiri, dan memahat karakter masa depan dengan penuh welas asih.",
  quoteAuthor: "Yan Amru Abdilah, S.Pd."
};

export const teacherModelData: TeacherModel = {
  misi: [
    "Menyelenggarakan kegiatan pembelajaran yang berpihak sepenuhnya pada murid (Student-Centered Learning) dengan skenario yang aman, inklusif, dan menyenangkan.",
    "Mengintegrasikan secara aktif kebudayaan lokal daerah (Wonosobo dan Salatiga) ke dalam konten ajar guna memperkuat penanaman nilai Profil Pelajar Pancasila.",
    "Terbuka terhadap perkembangan teknologi baru (TPACK) serta metode pembelajaran berbasis projek interaktif.",
    "Mengembangkan kolaborasi bersinergi bersama komunitas praktisi guru, pihak sekolah, akademisi, serta wali murid guna menciptakan ekosistem belajar yang holistik."
  ],
  kompetensi: [
    {
      title: "Kompetensi Pedagogik Adaptif",
      description: "Keahlian mendesain modul/RPP interaktif yang fleksibel, memetakan keberagaman gaya belajar murid secara akurat, serta mahir memadukan pendekatan pembelajaran aktif masa kini.",
      iconName: "Compass"
    },
    {
      title: "Kompetensi Profesional Mendalam",
      description: "Kedalaman penguasaan cabang ilmu pengetahuan, literasi riset tindakan kelas, serta kemampuan mengaitkan konsep materi dengan studi kasus praktis di kehidupan riil.",
      iconName: "BookOpen"
    },
    {
      title: "Kompetensi Kepribadian Unggul",
      description: "Kestabilan emosional yang dewasa, kedisiplinan yang menjadi teladan hidup bagi siswa, serta internalisasi nilai kejujuran intelektual tinggi.",
      iconName: "Shield"
    },
    {
      title: "Kompetensi Sosial & Kolaboratif",
      description: "Keterampilan merangkul perbedaan latar belakang, mengobarkan komunikasi efektif penuh empati, serta aktif membangun jejaring kolaboratif demi kemajuan siswa.",
      iconName: "Users"
    }
  ],
  karakter: [
    {
      title: "Welas Asih (Compassionate)",
      description: "Menghadirkan kelembutan kasih sayang dalam membimbing murid yang sedang mengalami fase kesulitan belajar.",
      iconName: "Heart"
    },
    {
      title: "Reflektif & Adaptif",
      description: "Secara sadar senantiasa mengevaluasi efektivitas metode mengajar diri sendiri demi pembaharuan tiada henti.",
      iconName: "RefreshCw"
    },
    {
      title: "Inovatif & Kreatif",
      description: "Jiwa pembaharu yang berani memformulasikan media pembelajaran segar nan menarik demi mendongkrak minat siswa.",
      iconName: "Cpu"
    },
    {
      title: "Gigih & Berdaya Juang",
      description: "Daya tahan mental yang tangguh laksana karakter pegunungan Wonosobo di Dieng untuk melampaui berbagai keterbatasan hambatan sarana.",
      iconName: "TrendingUp"
    }
  ]
};

export const artefactAspects: ArtefactAspect[] = [
  {
    id: "kendala",
    aspectTitle: "Kendala Selama Proses Penyusunan",
    description: "Tantangan nyata yang dihadapi saat mendesain rancangan perangkat dan produk pembelajaran.",
    details: [
      "Mengidentifikasi secara presisi kebutuhan belajar individual siswa SMA Negeri 3 Salatiga yang memiliki tingkat pemahaman kognitif serta keunikan gaya belajar yang sangat variatif.",
      "Mendesain aktivitas diferensiasi proses dan produk agar seluruh siswa tetap merasa difasilitasi tanpa merasa dikotak-kotakkan.",
      "Kesulitan menyelaraskan muatan lokal kemasyarakatan ke dalam Capaian Pembelajaran secara logis tanpa mengorbankan durasi waktu yang terbatas.",
      "Merumuskan instrumen penilaian autentik yang mengukur tingkat literasi dan berpikir kritis (HOTS) siswa daripada sekadar ingatan mekanistis."
    ],
    iconName: "AlertCircle"
  },
  {
    id: "pedagogi",
    aspectTitle: "Teori Pedagogi yang Diadopsi",
    description: "Landasan keilmuan pendidikan yang dijadikan sebagai kompas penyusunan perangkat pembelajaran.",
    details: [
      "Teori Pembelajaran Berdiferensiasi dari Carol Ann Tomlinson: Membagi pendekatan berdasarkan Diferensiasi Konten, Diferensiasi Proses, dan Diferensiasi Produk untuk memfasilitasi keragaman potensi murid.",
      "Understanding by Design (UbD) dari Jay McTighe & Grant Wiggins: Menerapkan paradigma alur mundur (Backward Design) yang memprioritaskan outcomes target capaian akhir terlebih dahulu sebelum melangkah pada penyusunan modul operasional.",
      "Konstruktivisme Sosial Lev Vygotsky: Menekankan Zone of Proximal Development (ZPD) dan pemberian bantuan sementara (Scaffolding) lewat pembentukan kelompok kooperatif berpasangan heterogen.",
      "Self-Determined Learning (Heutagogy): Mendorong kemandirian peserta didik dalam menentukan metode pengerjaan projek mandiri mereka."
    ],
    pedagogicalTheory: "Perpaduan harmonis antara Understanding by Design dan Pembelajaran Berdiferensiasi menghasilkan modul pembelajaran yang tidak hanya efisien mencapai tujuan kurikulum standar nasional, melainkan juga humanis memperlakukan murid sesuai kapasitas natural mereka.",
    iconName: "GraduationCap"
  },
  {
    id: "keberhasilan",
    aspectTitle: "Faktor Keberhasilan Penerapan",
    description: "Aspek utama pendorong terealisasinya produk pembelajaran berkualitas di ruang kelas SMA Negeri 3 Salatiga.",
    details: [
      "Bimbingan intensif interaktif harian serta saran berharga dari Guru Pamong di SMA Negeri 3 Salatiga dan Dosen Pembimbing UKSW.",
      "Pemanfaatan media pembelajaran interaktif berbasis teknologi (Game edukasi, simulasi virtual, LKPD digital berbasis kanvas kreatif).",
      "Keterlibatan proaktif siswa yang tinggi akibat tema pembelajaran yang diangkat sangat dekat dengan keseharian kontekstual mereka.",
      "Kemauan guru praktikan untuk terus mengevaluasi dan merespons kegaduhan atau kebosanan anak di sela-sela jam mengajar secara sigap."
    ],
    iconName: "Award"
  },
  {
    id: "penyesuaian",
    aspectTitle: "Penyesuaian Situasi Kelas Berbeda",
    description: "Fleksibilitas model rancangan pembelajaran untuk diterapkan pada karakteristik kelas yang berbeda-beda.",
    details: [
      "Apabila kelas selanjutnya tidak memiliki fasilitas proyektor digital aktif, media interaktif slide diubah menjadi media papan tempel berukuran besar (Concept Map Board) yang digerakkan manual oleh siswa.",
      "Di kelas dengan tingkat keteraturan mandiri rendah, porsi kerja kelompok yang terbuka luas dikompresi menjadi aktivitas berpasangan (Think-Pair-Share) yang didampingi dengan lembaran instruksi mini per 10 menit.",
      "Menyediakan bank soal bertingkat tingkat Bloom (dari C2 s.d C6) sehingga sekolah berkebutuhan akselerasi di kelas tertentu mendapat tantangan setara kognitifnya."
    ],
    iconName: "Sliders"
  }
];

export const instrumentsData: Instrument[] = [
  {
    id: "lampiran7",
    title: "Lampiran 7: Instrumen Penilaian Penyusunan Perangkat",
    subtitle: "Rancangan Pembelajaran Terbaik dari Guru Pamong",
    description: "Mengevaluasi kompetensi guru praktikan dalam menyusun modul bimbingan, rencana pelaksanaan pembelajaran, perangkat asesmen, keselarasan TP, serta media ajar.",
    records: [
      {
        component: "Tujuan Pembelajaran",
        indicator: "Kesesuaian TP dengan Capaian Pembelajaran (CP) dan perumusan komponen kompetensi & lingkup materi",
        siklus1: 82,
        siklus2: 88,
        siklus3: 95,
        maxScore: 100,
        notes: "Meningkat pesat pada siklus 3 dengan integrasi literasi kontekstual."
      },
      {
        component: "Rencana Asesmen Awal",
        indicator: "Rancangan asesmen diagnostik kognitif dan non-kognitif untuk pemetaan kesiapan belajar siswa",
        siklus1: 78,
        siklus2: 86,
        siklus3: 94,
        maxScore: 100,
        notes: "Analisis diagnostik siklus 3 berkontribusi tinggi pada ketepatan pembelajaran diferensiasi."
      },
      {
        component: "Langkah Pembelajaran",
        indicator: "Skenario langkah kegiatan saintifik terperinci yang mencerminkan pembelajaran berpusat pada siswa",
        siklus1: 80,
        siklus2: 90,
        siklus3: 96,
        maxScore: 100,
        notes: "Siklus 3 menunjukkan manajemen waktu yang tertata sangat rapi dan luwes."
      },
      {
        component: "Media & Sumber Belajar",
        indicator: "Ketepatan pemilihan media ajar berbasis teknologi digital (TPACK) serta relevansinya dengan materi",
        siklus1: 85,
        siklus2: 92,
        siklus3: 98,
        maxScore: 100,
        notes: "Guru pamong mengapresiasi penggunaan kuis berbasis game interaktif."
      },
      {
        component: "Rancangan Asesmen Berkelanjutan",
        indicator: "Rancangan instrumen penilaian formatif (self-assessment & rubrik kinerja) dan sumatif berbasis HOTS",
        siklus1: 75,
        siklus2: 85,
        siklus3: 94,
        maxScore: 100,
        notes: "Kejelasan rubrik meningkat, sangat mempermudah obyektifitas penilaian mandiri siswa."
      }
    ]
  },
  {
    id: "lampiran8",
    title: "Lampiran 8: Instrumen Penilaian Praktik Mengajar",
    subtitle: "Kualitas Implementasi Pembelajaran Riil di Kelas SMAN 3 Salatiga",
    description: "Mengevaluasi performa guru praktikan di lapangan dalam mengelola atmosfer kelas, membangkitkan motivasi siswa, keterampilan komunikasi, serta kemampuan adaptasi real-time.",
    records: [
      {
        component: "Apersepsi & Motivasi",
        indicator: "Keterampilan membuka pembelajaran, menarik emosi siswa, serta menyampaikan relevansi materi dengan kehidupan nyata",
        siklus1: 84,
        siklus2: 89,
        siklus3: 96,
        maxScore: 100,
        notes: "Sangat segar dalam membawakan video studi kasus yang mengundang tanya siswa."
      },
      {
        component: "Implementasi Pendekatan",
        indicator: "Kemampuan memandu model pembelajaran kooperatif, fasilitasi penyelidikan dan pemecahan masalah",
        siklus1: 80,
        siklus2: 91,
        siklus3: 95,
        maxScore: 100,
        notes: "Siklus 3 menunjukkan scaffolding yang optimal tanpa memberikan jawaban langsung ke murid."
      },
      {
        component: "Pengelolaan Kelas",
        indicator: "Ketangkasan mengatasi keriuhan kelas, menjaga kedisiplinan yang asertif-humoris, dan alokasi durasi fase",
        siklus1: 76,
        siklus2: 88,
        siklus3: 93,
        maxScore: 100,
        notes: "Keterampilan mengelola dinamika diskusi kelas besar membaik signifikan."
      },
      {
        component: "Keterampilan Bertanya",
        indicator: "Kualitas mengajukan pertanyaan pemantik beruntun (prompting) guna membakar semangat bernalar kritis siswa",
        siklus1: 81,
        siklus2: 90,
        siklus3: 97,
        maxScore: 100,
        notes: "Penguasaan teknik scaffolding verbal sangat natural."
      },
      {
        component: "Bahasa & Volume Suara",
        indicator: "Kejelasan artikulasi pengucapan, kehangatan intonasi suara, keluwesan gestur/tubuh guru",
        siklus1: 88,
        siklus2: 94,
        siklus3: 98,
        maxScore: 100,
        notes: "Suara nyaring, hangat, dan ekspresi bersahabat mengikis kecemasan siswa."
      },
      {
        component: "Refleksi & Penutup",
        indicator: "Keterampilan menutup pembelajaran secara elegan, memandu kesimpulan bersama murid, serta tindak lanjut",
        siklus1: 80,
        siklus2: 88,
        siklus3: 96,
        maxScore: 100,
        notes: "Menciptakan jurnal refleksi singkat di akhir yang sangat disukai murid."
      }
    ]
  }
];

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
  originUnique: "Demak adalah kabupaten di pesisir Pantura Jawa Tengah yang dikenal sebagai kota Islam tertua di Pulau Jawa, dengan Masjid Agung Demak sebagai saksi bisu kejayaan Walisongo. Udaranya panas dan terik khas pantai utara, kehidupan masyarakatnya dinamis dengan tradisi nelayan dan tambak yang kuat. Dari tambak itulah lahir kuliner paling ikonik Demak Bandeng Presto, ikan bandeng yang dimasak dengan tekanan tinggi hingga seluruh durinya lunak dan bisa dimakan, dengan cita rasa gurih dan harum rempah yang khas, menjadikannya oleh-oleh favorit yang selalu diburu siapa pun yang melintas di jalur Pantura.",
  inspiration: "Kecintaan saya pada dunia pendidikan berawal dari hal yang sederhana melihat anak-anak di kampung halaman saya yang penuh semangat namun harus berjuang lebih keras dari siapapun hanya untuk bisa mengenyam pendidikan yang layak. Dari situlah saya mulai memahami betapa besarnya peran seorang guru dalam hidup seseorang. Perjalanan saya di UKSW membentuk fondasi akademik yang kuat, sementara pengalaman PPL di SMA Negeri 3 Salatiga mengajarkan saya arti mengajar yang sesungguhnya bahwa kelas bukan hanya soal materi and nilai, melainkan tentang bagaimana seorang pendidik mampu menyentuh hati siswa, membangkitkan rasa percaya diri mereka, dan menemani mereka menemukan jati diri serta potensi yang selama ini tersembunyi dalam diri mereka.",
  quote: "Pendidik yang hebat tidak sekadar mentransfer pengetahuan; mereka menyalakan api rasa ingin tahu, melahirkan pemikiran mandiri, dan memahat karakter masa depan dengan penuh welas asih.",
  quoteAuthor: "Yan Amru Abdilah, S.Pd."
};

export const teacherModelData: TeacherModel = {
  misi: [
    "Menyelenggarakan kegiatan pembelajaran yang berpihak sepenuhnya pada murid (Student-Centered Learning) dengan skenario yang aman, inklusif, dan menyenangkan.",
    "Mengintegrasikan secara aktif kebudayaan lokal daerah (Demak dan Salatiga) ke dalam konten ajar guna memperkuat penanaman nilai Profil Pelajar Pancasila.",
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
      description: "Daya tahan mental yang tangguh laksana karakter gigih historis masyarakat Demak untuk melampaui berbagai keterbatasan hambatan sarana.",
      iconName: "TrendingUp"
    }
  ]
};

export const artefactAspects: ArtefactAspect[] = [
  {
    id: "kendala",
    aspectTitle: "Kendala selama Proses Pelaksanaan PPL",
    description: "Tantangan nyata yang dihadapi saat mendesain rancangan perangkat dan produk pembelajaran.",
    details: [
      "Mengidentifikasi secara presisi kebutuhan belajar individual siswa SMA Negeri 3 Salatiga yang memiliki tingkat pemahaman kognitif serta keunikan gaya belajar yang sangat variatif.",
      "Mendesain aktivitas diferensiasi proses dan produk agar seluruh siswa tetap merasa difasilitasi tanpa merasa dikotak-kotakkan.",
      "Kesulitan menyelaraskan muatan lokal kemasyarakatan ke dalam Capaian Pembelajaran secara logis tanpa mengorbankan durasi waktu yang terbatas.",
      "Merumuskan instrumen penilaian autentik yang mengukur tingkat literasi dan berpikir kritis (HOTS) siswa daripada sekadar ingatan mekanistis.",
      "Fasilitas yang ada dikelas terkadang memiliki kendala, seperti proyektor yang error"
    ],
    iconName: "AlertCircle"
  },
  {
    id: "pedagogi",
    aspectTitle: "Teori yang dipakai",
    description: "Landasan keilmuan pendidikan yang dijadikan sebagai kompas pelaksanaan pembelajaran.",
    details: [
      "Teori Pembelajaran Berdiferensiasi dari Carol Ann Tomlinson: Membagi pendekatan berdasarkan Diferensiasi Konten, Diferensiasi Proses, dan Diferensiasi Produk untuk memfasilitasi keragaman potensi murid.",
      "Konstruktivisme Sosial Lev Vygotsky: Menekankan Zone of Proximal Development (ZPD) dan pemberian bantuan sementara (Scaffolding) lewat pembentukan kelompok kooperatif berpasangan heterogen.",
      "guru ditempatkan sebagai penuntun, bukan penguasa. Guru bertugas mengarahkan, membimbing, dan memfasilitasi perkembangan anak sesuai dengan kodratnya, tanpa berhak memaksakan kehendaknya ( ki hajar dewantoro )"
    ],
    iconName: "GraduationCap"
  },
  {
    id: "keberhasilan",
    aspectTitle: "Faktor Keberhasilan Penerapan",
    description: "Aspek utama pendorong terealisasinya pembelajaran berkualitas di ruang kelas SMA Negeri 3 Salatiga.",
    details: [
      "Bimbingan intensif interaktif harian serta saran berharga dari Guru Pamong di SMA Negeri 3 Salatiga dan Dosen Pembimbing UKSW.",
      "Penerapan pembelajaran yang berfokus pada siswa (Students-Centric) dan pembelajaran berdiferensiasi untuk memenuhi keunikan kebutuhan belajar masing-masing anak.",
      "Pemanfaatan media pembelajaran interaktif berbasis teknologi (Game edukasi, simulasi virtual, LKPD digital berbasis kanvas kreatif).",
      "Keterlibatan proaktif siswa yang tinggi akibat tema pembelajaran yang diangkat sangat dekat dengan keseharian kontekstual mereka.",
      "Kemauan guru praktikan untuk terus mengevaluasi dan merespons kegaduhan atau kebosanan anak di sela-sela jam mengajar secara sigap."
    ],
    iconName: "Award"
  },
  {
    id: "penyesuaian",
    aspectTitle: "Penyesuaian Situasi Kelas Berbeda",
    description: "Fleksibilitas model pembelajaran untuk diterapkan pada karakteristik kelas yang berbeda-beda.",
    details: [
      "Apabila kelas selanjutnya tidak memiliki fasilitas proyektor digital aktif, media interaktif yang bisa diakses melalui handphone siswa masing masing.",
      "Di kelas dengan tingkat keteraturan mandiri rendah, porsi kerja kelompok yang terbuka luas dikompresi menjadi aktivitas berpasangan (Think-Pair-Share) yang didampingi dengan lembaran instruksi mini per 10 menit.",
      "Menyediakan bank soal bertingkat tingkat Bloom (dari C2 s.d C6) sehingga sekolah berkebutuhan akselerasi di kelas tertentu mendapat tantangan setara kognitifnya."
    ],
    iconName: "Sliders"
  },
  {
    id: "capaian",
    aspectTitle: "Capaian Akhir",
    description: "Harapan yang dicapai dalam kegiatan PPL",
    details: [
      "Penguasaan Kompetensi Mengajar — Mahasiswa mampu menerapkan teori pendidikan yang telah dipelajari di bangku kuliah ke dalam praktik pembelajaran nyata di sekolah, mulai dari perencanaan, pelaksanaan, hingga evaluasi pembelajaran.",
      "Pengembangan Profesionalisme Keguruan — Mahasiswa memiliki sikap dan perilaku profesional sebagai calon pendidik, termasuk kemampuan berinteraksi dengan peserta didik, sesama guru, dan lingkungan sekolah secara etis dan bertanggung jawab.",
      "Refleksi dan Peningkatan Diri — Mahasiswa mampu melakukan refleksi kritis terhadap pengalaman mengajar selama PPL sebagai dasar untuk terus mengembangkan diri menjadi pendidik yang kompeten dan adaptif."
    ],
    iconName: "TrendingUp"
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

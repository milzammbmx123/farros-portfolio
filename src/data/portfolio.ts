import {
  PersonalInfo,
  WorkItem,
  ExperienceItem,
  CaseStudyItem,
  CertificateItem,
  GitHubRepo,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Farros Asadudin Milzam",
  role: "Lulusan Teknik Informatika (S.Kom) — 3D & UI/UX",
  subRole: "3D Visualization • UI/UX Design • IT Support • Web Development",
  degree: "S.Kom — IPK 3.67",
  bio: "Lulusan Teknik Informatika UIN Maulana Malik Ibrahim Malang (S.Kom, IPK 3.67). Bekerja di antara visual 3D, desain antarmuka, dan penanganan sistem — dari render Blender sampai dukungan teknis harian.",
  detailedBio: [
    "Saya Farros, lulusan Teknik Informatika UIN Maulana Malik Ibrahim Malang dengan IPK 3.67. Minat saya ada di persimpangan visual, kode, dan orang: merancang tampilan, membangunnya, lalu memastikan perangkat serta sistem di sekitarnya ikut berjalan.",
    "Sekarang saya asisten laboratorium Praktikum Computer Graphic — membimbing dua kelas Blender, mengevaluasi progres proyek mahasiswa dalam lima tahap, dan menangani troubleshooting perangkat keras maupun lunak di laboratorium.",
    "Sebelumnya saya praktik kerja lapangan di CV. Telematika Sains sebagai UI Designer & Web Support untuk Seminara.id: merancang antarmuka di Figma, menyusun tata letak halaman, dan menguji fungsionalitasnya lewat black-box testing.",
    "Sisi kreatifnya saya isi dengan visualisasi 3D di Blender, sisi teknisnya dengan Python, Next.js, dan TypeScript — termasuk situs yang sedang Anda baca.",
  ],
  location: "Malang, Jawa Timur, Indonesia",
  institution: "UIN Maulana Malik Ibrahim Malang",
  email: "farrosmilzam10@gmail.com",
  githubUrl: "https://github.com/milzammbmx123",
  githubUsername: "milzammbmx123",
  linkedinUrl:
    "https://www.linkedin.com/in/farros-asadudin-milzam-09822424b",
  whatsappUrl: "https://wa.me/6282230116506",
  whatsappDisplay: "0822-3011-6506",
  cvUrl: "/cv/CV-Farros-Asadudin-Milzam.pdf",
  availability: "Terbuka untuk Full-time, Internship, & Proyek",
  profileImage: "/images/profile/foto-profil.jpg",
};

export const skillsList = [
  { name: "Blender 3D", category: "3D & Visual", level: "Lanjutan" },
  { name: "Cycles / Eevee", category: "3D & Visual", level: "Lanjutan" },
  {
    name: "Architectural Visualization",
    category: "3D & Visual",
    level: "Lanjutan",
  },
  {
    name: "Character & Hard Surface Modeling",
    category: "3D & Visual",
    level: "Menengah",
  },
  { name: "Figma", category: "UI/UX & Desain", level: "Menengah" },
  {
    name: "Wireframe & Prototyping",
    category: "UI/UX & Desain",
    level: "Menengah",
  },
  {
    name: "Adobe Lightroom",
    category: "UI/UX & Desain",
    level: "Menengah",
  },
  {
    name: "Troubleshooting Hardware",
    category: "IT Support",
    level: "Lanjutan",
  },
  {
    name: "Instalasi & Perawatan Software",
    category: "IT Support",
    level: "Menengah",
  },
  {
    name: "Microsoft Office / Google Workspace",
    category: "IT Support",
    level: "Lanjutan",
  },
  { name: "Python", category: "Programming & AI", level: "Lanjutan" },
  { name: "Machine Learning", category: "Programming & AI", level: "Menengah" },
  {
    name: "Data Science (Pandas/NumPy)",
    category: "Programming & AI",
    level: "Menengah",
  },
  {
    name: "TypeScript / JavaScript",
    category: "Web Dev",
    level: "Menengah",
  },
  { name: "Next.js & React", category: "Web Dev", level: "Menengah" },
  { name: "Tailwind CSS", category: "Web Dev", level: "Lanjutan" },
  { name: "Git & GitHub", category: "Tools", level: "Menengah" },
];

export const worksData: WorkItem[] = [
  {
    id: "dreamhouse-front",
    title: "Dreamhouse — Fasad Depan, Malam",
    category: "3D Architecture",
    description:
      "Tampak depan rumah minimalis saat malam, lengkap dengan carport dan tiga kendaraan. Kontras antara cahaya hangat dari dalam dan langit gelap jadi fokus utamanya.",
    image: "/images/works/dreamhouse-front.png",
    stages: [
      "Blockout massa bangunan & skala",
      "Modeling fasad, carport, vegetasi",
      "Material & pencahayaan malam",
      "Render Cycles + color grading",
    ],
    tools: ["Blender", "Architectural Visualization", "Cycles Render"],
    year: "2024",
  },
  {
    id: "dreamhouse-balcony",
    title: "Dreamhouse — Balkon Lantai Atas",
    category: "3D Architecture",
    description:
      "Balkon dengan sofa, tanaman, dan pintu kaca geser. Latihan mengatur cahaya interior supaya ruangan tetap terbaca dari luar pada malam hari.",
    image: "/images/works/dreamhouse-balcony.png",
    stages: [
      "Blockout & sirkulasi balkon",
      "Modeling sofa, tanaman, kusen kaca",
      "Uji cahaya interior vs eksterior",
      "Render Cycles",
    ],
    tools: ["Blender", "Lighting Design", "Cycles Render"],
    year: "2024",
  },
  {
    id: "dreamhouse-rear",
    title: "Dreamhouse — Sisi Belakang & Tangga Luar",
    category: "3D Architecture",
    description:
      "Tampak belakang rumah dengan tangga luar, balkon, dan void antar lantai. Fokus pada massa bangunan serta permainan bayangan saat malam.",
    image: "/images/works/dreamhouse-rear.png",
    stages: [
      "Blockout massa & void antar lantai",
      "Modeling tangga luar & railing",
      "Pencahayaan tepi untuk bayangan",
      "Render Cycles",
    ],
    tools: ["Blender", "ArchViz", "Cycles Render"],
    year: "2024",
  },
  {
    id: "dreamhouse-rooftop",
    title: "Dreamhouse — Rooftop Terrace",
    category: "3D Architecture",
    description:
      "Rooftop dengan string light, area bar, dan tempat duduk. Pencahayaan hangat dipakai untuk membentuk suasana santai tanpa terasa berlebihan.",
    image: "/images/works/dreamhouse-rooftop.png",
    stages: [
      "Blockout area & jalur sirkulasi",
      "Modeling bar, dudukan, string light",
      "Pencahayaan hangat berlapis",
      "Render Cycles",
    ],
    tools: ["Blender", "Lighting & Composition", "Cycles Render"],
    year: "2024",
  },
  {
    id: "cozy-pc-setup",
    title: "Cozy PC Battlestation",
    category: "3D Interior",
    description:
      "Meja kerja di siang hari dengan monitor, speaker, jam dinding, dan rak kayu. Latihan menata banyak objek kecil agar ruangan tetap terasa lapang.",
    image: "/images/works/cozy-pc-setup.png",
    stages: [
      "Blockout meja & proporsi ruang",
      "Modeling periferal, jam, rak kayu",
      "Cahaya siang dari jendela",
      "Render Cycles",
    ],
    tools: ["Blender", "Interior Design", "Cycles Render"],
    year: "2024",
  },
  {
    id: "gaming-room",
    title: "Gaming Room, Malam",
    category: "3D Interior",
    description:
      "Ruangan gaming dengan meja kerja, kursi gaming, dan pencahayaan RGB. Suasana malam jadi fokus utama lewat neon biru dan cahaya dari jendela.",
    image: "/images/works/bedroom-wide.png",
    stages: [
      "Blockout ruang & penempatan meja",
      "Modeling kursi gaming & periferal",
      "Lighting RGB + cahaya jendela",
      "Render Cycles",
    ],
    tools: ["Blender", "Interior Visualization", "Cycles Render"],
    year: "2024",
  },
  {
    id: "character-turnaround",
    title: "Character Turnaround — Low Poly",
    category: "3D Character",
    description:
      "Model karakter bergaya low-poly dengan pakaian sederhana, disajikan dalam empat sudut pandang: depan, belakang, samping kiri, dan samping kanan untuk memeriksa proporsi serta siluet.",
    image: "/images/works/cleveland.png",
    imageFit: "contain",
    stages: [
      "Blockout proporsi tubuh",
      "Modeling low-poly & UV",
      "Material datar bergaya stylized",
      "Render 4 sudut pandang",
    ],
    tools: ["Blender", "Character Modeling", "Turnaround"],
    year: "2024",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "asisten-lab-grafkom",
    role: "Asisten Laboratorium — Praktikum Computer Graphic",
    org: "UIN Maulana Malik Ibrahim Malang",
    type: "Laboratorium",
    period: "Agustus 2026 — Sekarang",
    location: "Malang, Jawa Timur",
    summary:
      "Mendampingi praktikum pemodelan 3D di Blender, dari sesi pertama sampai presentasi proyek akhir mahasiswa.",
    points: [
      "Membimbing dua kelas praktikum Computer Graphic: menjelaskan alur kerja Blender, mendemonstrasikan teknik modeling, dan mendampingi sesi mandiri.",
      "Mengevaluasi lima tahap progres proyek mahasiswa — dari blockout sampai render akhir — lalu memberi catatan perbaikan per tahap.",
      "Menangani troubleshooting perangkat keras dan perangkat lunak di laboratorium: pengecekan spesifikasi, instalasi ulang, dan pemulihan file kerja.",
    ],
    tags: ["Blender", "Pengajaran", "Troubleshooting", "Evaluasi Proyek"],
    current: true,
  },
  {
    id: "pkl-telematika",
    role: "UI Designer & Web Support — Praktik Kerja Lapangan",
    org: "CV. Telematika Sains",
    type: "PKL / Magang",
    period: "Juli — Agustus 2025",
    location: "Malang, Jawa Timur",
    summary:
      "Merancang dan merapikan antarmuka Seminara.id, platform manajemen seminar, lalu memastikan tampilannya jalan di peramban.",
    points: [
      "Merancang antarmuka platform manajemen seminar Seminara.id di Figma, mulai dari susunan informasi sampai komponen form pendaftaran.",
      "Menyusun tata letak halaman (front-end layouting) agar hasil rancangan konsisten dengan tampilan yang dipakai pengguna.",
      "Melakukan pengujian fungsionalitas dengan black-box testing pada alur pendaftaran, pengelolaan jadwal, dan halaman peserta.",
    ],
    tags: ["Figma", "Wireframe", "Front-end Layout", "Black-box Testing"],
  },
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "seminara",
    title: "Seminara.id",
    tagline: "Platform manajemen & pendaftaran seminar",
    role: "UI Designer & Web Support",
    period: "Jul — Agu 2025",
    status: "Proyek PKL — CV. Telematika Sains",
    summary:
      "Platform untuk mengelola jadwal, pendaftaran, dan data peserta seminar. Saya masuk di sisi rancangan: menyusun alur pendaftaran yang pendek, merapikan hierarki informasi, lalu menerjemahkannya ke tata letak halaman.",
    contributions: [
      {
        label: "Rancangan antarmuka",
        text: "Wireframe alur pendaftaran dan halaman acara di Figma, disusun dari kebutuhan pengelola seminar dan peserta.",
      },
      {
        label: "Sistem visual",
        text: "Menyeragamkan tipografi, jarak, dan komponen form supaya halaman tetap konsisten saat diisi konten berbeda.",
      },
      {
        label: "Uji fungsionalitas",
        text: "Black-box testing pada alur daftar, jadwal, dan data peserta; temuan dicatat lalu diperbaiki bersama tim.",
      },
    ],
    tools: ["Figma", "Wireframe", "HTML/CSS", "Black-box Testing"],
    diagram: "web",
    image: "/images/case-studies/seminara-landing.jpg",
    imageAlt:
      "Halaman landing Seminara.id: navigasi Beranda, Seminar, Pembicara, Kontak, dan hero biru bertuliskan Tingkatkan Kompetensi Profesional Melalui Event Berkualitas",
    imageRatio: "1691 / 881",
    imageNote:
      "Tangkapan layar halaman landing — lampiran laporan PKL, 2025",
    screensAspect: "4 / 3",
    screens: [
      {
        src: "/images/case-studies/seminara-seminar.jpg",
        alt: "Halaman daftar seminar Seminara.id dengan tiga kartu acara",
        caption:
          "Daftar seminar: kartu acara memuat harga, tanggal, lokasi, dan tombol daftar.",
      },
      {
        src: "/images/case-studies/seminara-detail.jpg",
        alt: "Halaman detail seminar Work Smart dengan poster acara dan panel informasi",
        caption:
          "Detail seminar: poster acara, ringkasan materi, dan panel jadwal.",
      },
      {
        src: "/images/case-studies/seminara-speakers.jpg",
        alt: "Halaman daftar pembicara Seminara.id berisi empat profil narasumber",
        caption:
          "Daftar pembicara: foto, gelar, dan ringkasan keahlian tiap narasumber.",
      },
      {
        src: "/images/case-studies/seminara-profile.jpg",
        alt: "Halaman profil pembicara dengan biografi dan daftar seminar yang diisi",
        caption:
          "Profil pembicara: biografi singkat dan seminar yang pernah diisi.",
      },
    ],
  },
  {
    id: "trash-tycoon",
    title: "Trash Tycoon",
    tagline: "Game simulasi pengelolaan sampah",
    role: "Game UI & Performance",
    period: "2026",
    status: "Tugas Akhir — Program Studi Teknik Informatika",
    summary:
      "Game bergaya tycoon tentang memilah dan mengolah sampah. Selain aturan permainan, saya menggarap antarmuka HUD dan mengukur dampak optimasi grafis terhadap kelancaran permainan.",
    contributions: [
      {
        label: "Antarmuka permainan",
        text: "HUD, panel sumber daya, dan menu jeda dirancang agar tetap terbaca di layar kecil tanpa menutupi area bermain.",
      },
      {
        label: "Optimasi performa",
        text: "Profiling frame rate untuk menemukan bagian terberat, lalu menyederhanakan geometri dan tekstur yang tidak perlu.",
      },
      {
        label: "Pengukuran",
        text: "Perbandingan performa sebelum dan sesudah optimasi dicatat sebagai grafik pada laporan tugas akhir.",
      },
    ],
    tools: ["C#", "Game UI", "Profiling", "Optimasi Grafis"],
    diagram: "game",
    image: "/images/case-studies/trash-tycoon-menu.jpg",
    imageAlt:
      "Menu utama Trash Tycoon bertajuk kayu dengan tombol MULAI, PENGATURAN, dan KELUAR",
    imageRatio: "1919 / 1079",
    imageNote: "Tangkapan layar build permainan, 2026",
    screensAspect: "16 / 9",
    screens: [
      {
        src: "/images/case-studies/trash-tycoon-hud.jpg",
        alt: "HUD Trash Tycoon saat bermain: sisa waktu, isi truk, koin, dan tiga daya tahan sampah",
        caption:
          "HUD saat bermain: sisa waktu, isi truk, koin, dan daya tahan tiga jenis sampah — panel performa terbaca 72 FPS pada Quality UltraHigh.",
      },
      {
        src: "/images/case-studies/trash-tycoon-quality-low.jpg",
        alt: "Modal sambutan Trash Tycoon dengan panel performa 144 FPS pada Quality UltraLow",
        caption:
          "Modal sambutan pada Quality UltraLow — frame rate terbaca 144 FPS saat detail grafis diturunkan.",
      },
    ],
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: "ibm-ds-methodology",
    title: "Data Science Methodology",
    issuer: "IBM / Cognitive Class",
    category: "Data Science & AI",
    issueDate: "24 Apr 2025",
    fileUrl: "/certificates/Data Science Methodology_Farros Asadudin Milzam.pdf",
    description: "Metodologi Data Science terstruktur mencakup tahapan problem understanding, data requirement, modeling, evaluasi, hingga deployment.",
  },
  {
    id: "ibm-ds-tools",
    title: "Data Science Tools",
    issuer: "IBM / Cognitive Class",
    category: "Data Science & AI",
    issueDate: "9 Mar 2025",
    fileUrl: "/certificates/Data Science Tools_Farros Asadudin Milzam.pdf",
    description: "Penguasaan ekosistem tool komputasi data sains: Jupyter Notebook, RStudio, GitHub, Watson Studio, dan library open-source.",
  },
  {
    id: "ibm-ml-python",
    title: "Machine Learning with Python",
    issuer: "IBM / Cognitive Class",
    category: "Data Science & AI",
    issueDate: "27 Apr 2025",
    fileUrl: "/certificates/Machine Learning with Python_Farros Asadudin Milzam.pdf",
    description: "Algoritma Machine Learning (Regression, Classification, Clustering, Recommender Systems) menggunakan Scikit-Learn dan SciPy.",
  },
  {
    id: "ibm-py-ds",
    title: "Python 101 for Data Science",
    issuer: "IBM / Cognitive Class",
    category: "Data Science & AI",
    issueDate: "1 Mei 2025",
    fileUrl: "/certificates/Python 101 for Data Science_Farros Asadudin Milzam.pdf",
    description: "Fondasi pemrograman Python untuk data: struktur data, fungsi, manipulasi berkas, serta analisis dengan Pandas dan NumPy.",
  },
  {
    id: "sertifikat-ai-ml",
    title: "Sertifikat AI dan Machine Learning",
    issuer: "Pelatihan Profesional AI & ML",
    category: "Data Science & AI",
    issueDate: "4 Mar 2025",
    fileUrl: "/certificates/Sertifikat AI dan Machine Learning.pdf",
    description: "Pelatihan intensif pengembangan solusi berbasis Artificial Intelligence dan integrasi model Machine Learning.",
  },
  {
    id: "webinar-mti",
    title: "Webinar MTI: Emerging Tech & Computing",
    issuer: "Magister TI UIN Syarif Hidayatullah Jakarta",
    category: "Academic & Language",
    issueDate: "30 Apr 2025",
    fileUrl: "/certificates/Sertifikat Webinar MTI UIN JAKARTA 30 April 2025 #2 Farros Asadudin Milzam.pdf",
    description: "Wawasan terkini seputar riset teknologi informasi, komputasi awan, dan tren kecerdasan buatan.",
  },
  {
    id: "pkpbi",
    title: "Program Khusus Pengembangan Bahasa Inggris (PKPBI)",
    issuer: "UIN Maulana Malik Ibrahim Malang",
    category: "Academic & Language",
    issueDate: "Des 2024",
    fileUrl: "/certificates/SERTIFIKAT PKPBI_FARROS ASADUDIN MILZAM_220605110097.pdf",
    description: "Sertifikasi kemahiran berbahasa Inggris tingkat lanjut untuk komunikasi akademik dan profesional (NIM: 220605110097).",
  },
  {
    id: "toefl",
    title: "TOEFL English Proficiency Test",
    issuer: "Pusat Pengembangan Bahasa UIN Malang",
    category: "Academic & Language",
    issueDate: "30 Apr 2026",
    fileUrl: "/certificates/Sertifikat TOEFL UIN Malang.pdf",
    description: "Uji standar kompetensi bahasa Inggris mencakup Listening Comprehension, Structure & Written Expression, dan Reading.",
  },
  {
    id: "toafl",
    title: "TOAFL Test of Arabic as a Foreign Language",
    issuer: "Pusat Pengembangan Bahasa UIN Malang",
    category: "Academic & Language",
    issueDate: "29 Apr 2026",
    fileUrl: "/certificates/Sertifikat TOAFL UIN Malang.pdf",
    description: "Uji standar kompetensi bahasa Arab akademik dan komunikasi formal.",
  },
  {
    id: "kkm",
    title: "Sertifikat Pengabdian kepada Masyarakat (KKM)",
    issuer: "Yayasan Al-Hidayah — Bodean Krajan, Singosari",
    category: "Achievement & Community",
    issueDate: "Jan 2025",
    fileUrl: "/certificates/Sertifikat KKM.jpg",
    description: "Peserta Kuliah Kerja Nyata (KKN) di Yayasan Al-Hidayah Bodean Krajan, Singosari, Kab. Malang, pada 20 Desember 2024 – 25 Januari 2025.",
  },
];

export const fallbackRepos: GitHubRepo[] = [
  {
    id: 101,
    name: "TrashTycoon",
    full_name: "milzammbmx123/TrashTycoon",
    description: "Game simulasi pengelolaan dan daur ulang limbah (Tycoon) interaktif yang menantang pemain mengoptimalkan logistik pemilahan sampah dan efisiensi lingkungan.",
    html_url: "https://github.com/milzammbmx123/TrashTycoon",
    homepage: null,
    stargazers_count: 5,
    forks_count: 1,
    language: "C#",
    topics: ["game-development", "simulation", "tycoon", "waste-management"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 102,
    name: "Aplikasi-Resep-Makanan",
    full_name: "milzammbmx123/Aplikasi-Resep-Makanan",
    description: "Aplikasi katalog dan panduan resep kuliner modern dengan fitur pencarian bahan, kategori hidangan, langkah memasak terstruktur, dan antarmuka ramah pengguna.",
    html_url: "https://github.com/milzammbmx123/Aplikasi-Resep-Makanan",
    homepage: null,
    stargazers_count: 4,
    forks_count: 0,
    language: "Dart",
    topics: ["mobile-app", "flutter", "recipe-app", "ui-ux"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 103,
    name: "Rekonstruksi-B015",
    full_name: "milzammbmx123/Rekonstruksi-B015",
    description: "Proyek pemodelan 3D dan rekonstruksi digital Ruang B015 UIN Maulana Malik Ibrahim Malang dengan akurasi dimensi ruang, tata letak interior, dan pencahayaan realistis.",
    html_url: "https://github.com/milzammbmx123/Rekonstruksi-B015",
    homepage: null,
    stargazers_count: 3,
    forks_count: 0,
    language: "3D Blender",
    topics: ["blender", "3d-reconstruction", "architectural-viz", "campus-project"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 104,
    name: "Dream-House",
    full_name: "milzammbmx123/Dream-House",
    description: "Koleksi aset dan file proyek 3D Architectural Visualization Modern Dreamhouse (fasad malam, balkon, sisi belakang, dan rooftop) menggunakan Blender Cycles.",
    html_url: "https://github.com/milzammbmx123/Dream-House",
    homepage: null,
    stargazers_count: 4,
    forks_count: 1,
    language: "ShaderLab",
    topics: ["blender", "cycles-render", "architecture", "3d-art"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 105,
    name: "Gaming-room",
    full_name: "milzammbmx123/Gaming-room",
    description: "Desain interior 3D workstation modern bernuansa cozy battlestation. Dilengkapi pemodelan periferal PC, mechanical keyboard, rak dekorasi, dan sistem pencahayaan LED.",
    html_url: "https://github.com/milzammbmx123/Gaming-room",
    homepage: null,
    stargazers_count: 3,
    forks_count: 0,
    language: "3D Blender",
    topics: ["blender", "interior-design", "battlestation", "cycles"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 106,
    name: "farros-portfolio",
    full_name: "milzammbmx123/farros-portfolio",
    description: "Website portofolio personal & etalase karya kreatif 3D yang dibangun menggunakan Next.js (App Router), TypeScript, dan Tailwind CSS.",
    html_url: "https://github.com/milzammbmx123/farros-portfolio",
    homepage: null,
    stargazers_count: 6,
    forks_count: 2,
    language: "TypeScript",
    topics: ["nextjs", "typescript", "tailwindcss", "portfolio", "dark-mode"],
    updated_at: new Date().toISOString(),
  },
];

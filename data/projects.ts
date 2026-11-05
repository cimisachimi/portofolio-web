// data/projects.ts

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "travelmore",
    title: "Travelmore.travel",
    role: "Full Stack Web Developer",
    description: "Sistem reservasi pariwisata komprehensif yang dibangun dengan arsitektur decoupled (headless) sebagai proyek tugas akhir (Skripsi). Mengerjakan 100% pengembangan backend RESTful API dengan Laravel dan 30% integrasi UI frontend menggunakan Next.js. Mengintegrasikan payment gateway Midtrans untuk transaksi real-time yang aman. Mengelola deployment infrastruktur di Ubuntu VPS menggunakan PM2 dan melakukan optimasi Nginx (tuning fastcgi_buffer & client_max_body_size) untuk menangani payload file media berukuran besar.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Laravel (PHP 8.3)",
      "MySQL",
      "Midtrans API",
      "Tailwind CSS",
      "Nginx",
      "PM2",
      "Ubuntu VPS"
    ],
    link: "https://travelmore.muhfaturahman.site"
  },
  {
    id: "indocharcoal",
    title: "Indocharcoal Supply",
    role: "Full Stack Web Developer",
    description: "Platform B2B ekspor (Proyek Magang) yang dilengkapi dengan fitur multi-bahasa (menggunakan next-intl) dan sistem manajemen katalog produk terintegrasi. Membangun dashboard admin yang aman untuk pengelolaan konten dan melakukan deployment ke tahap produksi di subdomain khusus, dengan mengisolasi proses Node.js melalui PM2 di balik Nginx reverse proxy.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "next-intl",
      "Tailwind CSS",
      "Ubuntu VPS",
      "PM2"
    ],
    link: "https://indocharcoalsupply.muhfaturahman.site"
  },
  {
    id: "plant-analyzer",
    title: "Plant Analyzer",
    role: "Website Developer",
    description: "Aplikasi web berbasis kecerdasan buatan (AI) untuk mendiagnosis penyakit pada daun tomat. Berkolaborasi dalam tim lintas disiplin untuk mengintegrasikan model machine learning dari Hugging Face ke dalam antarmuka web yang responsif, serta mengelola sistem autentikasi dan penyimpanan data berbasis cloud.",
    techStack: [
      "Next.js",
      "NextAuth",
      "Supabase",
      "Vercel Blob",
      "Hugging Face ML"
    ],
    link: "#"
  },
  {
    id: "dota2-overlay",
    title: "Dota 2 Live Stream Overlay",
    role: "Full Stack Web Developer",
    description: "Dashboard overlay real-time untuk keperluan live streaming. Terintegrasi dengan OpenDota API untuk mengambil dan melacak metrik estimasi MMR serta medali rank pemain, yang kemudian diproses melalui koneksi WebSockets dua arah agar dapat ditampilkan tanpa delay pada layar streaming.",
    techStack: [
      "Node.js",
      "Express",
      "Socket.io",
      "Prisma ORM",
      "Next.js",
      "OpenDota API"
    ],
    link: "#"
  },
  {
    id: "portfolio",
    title: "Personal Developer Portfolio",
    role: "Frontend Engineer",
    description: "Web portofolio modern yang sangat responsif untuk menampilkan kemampuan full-stack engineering, arsitektur deployment server VPS, dan studi kasus teknis. Dirancang dengan fokus pada UI/UX yang bersih, maintainability yang tinggi, dan aksesibilitas komponen.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui"
    ],
    link: "https://muhfaturahman.site"
  }
];
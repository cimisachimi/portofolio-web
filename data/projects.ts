// data/projects.ts

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  link?: string;
  category: "internship" | "side";
  imageUrl?: string; // Menambahkan support untuk gambar screenshot
}

export const projects: Project[] = [
  {
    id: "travelmore-frontend",
    title: "Travelmore.travel - Frontend",
    role: "Frontend Developer (IT Internship)",
    description: "Website utama sistem reservasi pariwisata untuk audiens publik. Mengerjakan 30% integrasi template UI/UX menggunakan Next.js dan Tailwind CSS, serta menerapkan fitur multi-bahasa yang terhubung ke backend REST API secara decoupled.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "PM2", "Ubuntu VPS"],
    link: "https://travelmore.muhfaturahman.site",
    category: "internship",
    imageUrl: "/projects/travelmore-frontend.png"
  },
  {
    id: "travelmore-admin",
    title: "Travelmore.travel - Admin Dashboard & Backend",
    role: "Backend Developer (IT Internship)",
    description: "Mengerjakan 100% arsitektur backend RESTful API menggunakan Laravel (PHP 8.3) dan membangun React admin dashboard terpisah untuk manajemen operasional travel. Mengintegrasikan Midtrans payment gateway dan tuning Nginx VPS khusus untuk payload media besar.",
    techStack: ["Laravel (PHP 8.3)", "React", "MySQL", "Midtrans API", "Nginx"],
    link: "https://api.travelmore.muhfaturahman.site",
    category: "internship",
    imageUrl: "/projects/travelmore-admin.png"
  },
  {
    id: "indocharcoal-frontend",
    title: "Indocharcoal Supply - Frontend",
    role: "Full Stack Web Developer (IT Internship)",
    description: "Website landing page dan katalog produk B2B ekspor yang beroperasi secara mandiri. Sepenuhnya mendukung lokalisasi bahasa (next-intl) untuk 7 bahasa berbeda. Di-deploy secara terisolasi menggunakan PM2 di Ubuntu VPS.",
    techStack: ["Next.js", "React", "TypeScript", "next-intl", "Tailwind CSS"],
    link: "https://indocharcoalsupply.muhfaturahman.site",
    category: "internship",
    imageUrl: "/projects/indocharcoal-frontend.png"
  },
  {
    id: "indocharcoal-admin",
    title: "Indocharcoal Supply - Admin Dashboard",
    role: "Full Stack Web Developer (IT Internship)",
    description: "Sistem Manajemen Konten (CMS) khusus yang dipisah secara arsitektur dari website pengunjung. Digunakan secara internal oleh admin perusahaan untuk memperbarui katalog produk briket dan konten multi-bahasa tanpa mengganggu performa server frontend utama.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Ubuntu VPS"],
    link: "https://admin.indocharcoalsupply.muhfaturahman.site",
    category: "internship",
    imageUrl: "/projects/indocharcoal-admin.png"
  },
  {
    id: "imperial-villa",
    title: "Villa Imperial Syariah Yogyakarta",
    role: "Full Stack Web Developer",
    description: "Website company profile dan reservasi untuk Villa Imperial Syariah. Dibangun dengan Next.js dan mengimplementasikan fitur terjemahan multi-bahasa (next-intl) untuk menjangkau turis asing, serta integrasi pemesanan langsung melalui sistem WhatsApp.",
    techStack: ["Next.js", "TypeScript", "next-intl", "Tailwind CSS", "WhatsApp API"],
    link: "https://imperialvilla.site",
    category: "internship",
    imageUrl: "/projects/imperial-villa.png"
  },
  {
    id: "plant-analyzer",
    title: "Plant Analyzer",
    role: "Website Developer (Side Project)",
    description: "Aplikasi web berbasis kecerdasan buatan (AI) untuk mendiagnosis penyakit pada daun tomat. Berkolaborasi bersama Project Manager, Model Developer, UI/UX Designer, dan end-user tester untuk mengintegrasikan model ML Vision Transformer (ViT) & ResNet dari Hugging Face.",
    techStack: ["Next.js", "NextAuth.js", "Supabase", "Vercel Blob", "Hugging Face ML"],
    link: "#",
    category: "side",
    imageUrl: "/projects/plant-analyzer.png"
  },
  {
    id: "dota2-overlay",
    title: "Dota 2 Live Stream Overlay",
    role: "Full Stack Web Developer (Side Project)",
    description: "Dashboard overlay real-time untuk keperluan live streaming. Terintegrasi dengan OpenDota API untuk melacak estimasi MMR dan medali rank pemain, yang diproses melalui backend Express.js dan WebSockets (Socket.io) untuk me-render data tanpa delay pada browser.",
    techStack: ["Node.js", "Express.js", "Socket.io", "Prisma ORM", "Next.js", "OpenDota API"],
    link: "#",
    category: "side",
    imageUrl: "/projects/dota2-overlay.png"
  }
];
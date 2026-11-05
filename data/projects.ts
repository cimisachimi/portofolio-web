// data/projects.ts

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  link?: string;
  category: "internship" | "side";
  imageUrls?: string[]; // Diubah menjadi array untuk mendukung banyak gambar
}

export const projects: Project[] = [
  {
    id: "travelmore-frontend",
    title: "Travelmore.travel - Frontend",
    role: "Frontend Developer",
    description: "Website utama sistem reservasi pariwisata untuk audiens publik. Mengerjakan 30% integrasi template UI/UX menggunakan Next.js dan Tailwind CSS, serta menerapkan fitur multi-bahasa yang terhubung ke backend REST API secara decoupled.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "PM2", "Ubuntu VPS"],
    link: "https://travelmore.muhfaturahman.site",
    category: "internship",
    // Pola baku: /projects/[id]-1.png, /projects/[id]-2.png, dst.
    imageUrls: [
      "/projects/travelmore-frontend-1.png"
    ]
  },
  {
    id: "travelmore-admin",
    title: "Travelmore.travel - Admin Dashboard",
    role: "Backend Developer",
    description: "Mengerjakan 100% arsitektur backend RESTful API menggunakan Laravel (PHP 8.3) dan membangun React admin dashboard terpisah untuk manajemen operasional travel. Mengintegrasikan Midtrans payment gateway dan tuning Nginx VPS.",
    techStack: ["Laravel (PHP 8.3)", "React", "MySQL", "Midtrans API", "Nginx"],
    link: "https://api.travelmore.muhfaturahman.site",
    category: "internship",
    imageUrls: [
      "/projects/travelmore-admin-1.png",
      "/projects/travelmore-admin-2.png",
      "/projects/travelmore-admin-3.png",
      "/projects/travelmore-admin-4.png",
      "/projects/travelmore-admin-5.png",
      "/projects/travelmore-admin-6.png",
      "/projects/travelmore-admin-7.png",
      "/projects/travelmore-admin-8.png",
      "/projects/travelmore-admin-9.png",


    ]
  },
  {
    id: "indocharcoal-frontend",
    title: "Indocharcoal Supply - Frontend",
    role: "Full Stack Web Developer",
    description: "Website landing page dan katalog produk B2B ekspor yang beroperasi secara mandiri. Sepenuhnya mendukung lokalisasi bahasa (next-intl) untuk 7 bahasa berbeda. Di-deploy secara terisolasi menggunakan PM2 di Ubuntu VPS.",
    techStack: ["Next.js", "React", "TypeScript", "next-intl", "Tailwind CSS"],
    link: "https://indocharcoalsupply.muhfaturahman.site",
    category: "internship",
    imageUrls: [
      "/projects/indocharcoal-frontend-1.png",
      "/projects/indocharcoal-frontend-2.png"
    ]
  },
  {
    id: "indocharcoal-admin",
    title: "Indocharcoal Supply - Admin Dashboard",
    role: "Full Stack Web Developer",
    description: "Sistem Manajemen Konten (CMS) khusus yang dipisah secara arsitektur dari website pengunjung. Digunakan secara internal oleh admin perusahaan untuk memperbarui katalog produk briket dan konten multi-bahasa.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Ubuntu VPS"],
    link: "https://admin.indocharcoalsupply.muhfaturahman.site",
    category: "internship",
    imageUrls: [
      "/projects/indocharcoal-admin-1.png",
      "/projects/indocharcoal-admin-2.png",
      "/projects/indocharcoal-admin-3.png",
      "/projects/indocharcoal-admin-4.png",
      "/projects/indocharcoal-admin-5.png"
    ]
  },
  {
    id: "imperial-villa",
    title: "Villa Imperial Syariah Yogyakarta",
    role: "Full Stack Web Developer",
    description: "Website company profile dan reservasi untuk Villa Imperial Syariah. Dibangun dengan Next.js dan mengimplementasikan fitur terjemahan multi-bahasa (next-intl) untuk menjangkau turis asing, serta integrasi pemesanan WhatsApp.",
    techStack: ["Next.js", "TypeScript", "next-intl", "Tailwind CSS", "WhatsApp API"],
    link: "https://imperialvilla.site",
    category: "side",
    imageUrls: [
      "/projects/imperial-villa-1.png",
      "/projects/imperial-villa-2.png",
      "/projects/imperial-villa-3.png",
      "/projects/imperial-villa-4.png"
    ]
  },
  {
    id: "plant-analyzer",
    title: "Plant Analyzer",
    role: "Website Developer (Side Project)",
    description: "Aplikasi web berbasis AI untuk mendiagnosis penyakit pada daun tomat. Mengintegrasikan model ML Vision Transformer (ViT) & ResNet dari Hugging Face ke antarmuka Next.js.",
    techStack: ["Next.js", "NextAuth", "Supabase", "Vercel Blob", "Hugging Face ML"],
    link: "https://plant-analyzer.vercel.app/",
    category: "side",
    imageUrls: [
      "/projects/plant-analyzer-1.png",
      "/projects/plant-analyzer-2.png"
    ]
  },

];
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, MapPin, GraduationCap, Server, Code, Database, ChevronLeft, ChevronRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Komponen Khusus Slider Gambar
function ProjectSlider({ imageUrls, title }: { imageUrls?: string[], title: string }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  if (!imageUrls || imageUrls.length === 0) return null;

  // Fungsi Panah Navigasi
  const slide = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  // Fungsi Drag (Grab & Geser)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const handleMouseUpOrLeave = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Kecepatan geser
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative group border-b border-zinc-100 bg-zinc-100 overflow-hidden">
      {/* Container Gambar */}
      <div
        ref={sliderRef}
        className={`flex overflow-x-auto h-[300px] md:h-[450px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${isDragging ? "cursor-grabbing snap-none scroll-auto" : "cursor-grab snap-x snap-mandatory scroll-smooth"
          }`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
      >
        {imageUrls.map((url, idx) => (
          <div key={idx} className="relative min-w-full h-full flex-shrink-0 snap-center p-4 md:p-8">
            <Image
              src={url}
              alt={`${title} Screenshot ${idx + 1}`}
              fill
              draggable={false} // Mematikan drag default gambar browser
              className="object-contain select-none pointer-events-none p-4" // object-contain membuat gambar full tampil tanpa crop
            />
          </div>
        ))}
      </div>

      {/* Tombol Panah Kiri Kanan (Hanya muncul jika gambar > 1) */}
      {imageUrls.length > 1 && (
        <>
          <button
            onClick={() => slide("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-zinc-800 p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 z-10"
            aria-label="Geser kiri"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => slide("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-zinc-800 p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-10"
            aria-label="Geser kanan"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  );
}

export default function Home() {
  const internshipProjects = projects.filter((p) => p.category === "internship");
  const sideProjects = projects.filter((p) => p.category === "side");

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 p-6 md:p-24 selection:bg-zinc-200">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Hero Section */}
        <section className="space-y-6 pt-10">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 pb-2">
              Muhammad Faturahman
            </h1>
            <h2 className="text-2xl text-zinc-600 font-medium">
              Full Stack Web Developer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed">
            Membangun aplikasi web modern berkinerja tinggi dengan arsitektur decoupled. Berpengalaman dalam menggabungkan ekosistem frontend seperti Next.js & React dengan keandalan backend Laravel maupun Node.js.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 text-zinc-600 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zinc-500" />
              <span>Yogyakarta, Indonesia</span>
            </div>
            <div className="hidden sm:block text-zinc-300">•</div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-zinc-500" />
              <span>S1 Informatika, Univ. AMIKOM Yogyakarta (IPK 3.65)</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="https://github.com/cimisachimi" target="_blank">
              <Button variant="default" className="bg-zinc-900 text-zinc-50 hover:bg-zinc-800 shadow-sm">
                <GithubIcon className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </Link>
            <Link href="mailto:emailanda@example.com">
              <Button variant="outline" className="border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 shadow-sm">
                <Mail className="mr-2 h-4 w-4" /> Email
              </Button>
            </Link>
            <Button variant="outline" className="border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 shadow-sm">
              Download CV
            </Button>
          </div>
        </section>

        {/* SECTION 1: PROYEK MAGANG & PROFESIONAL */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-zinc-200 pb-4 text-zinc-900">Proyek Magang & Profesional</h2>
          <div className="grid grid-cols-1 gap-8">
            {internshipProjects.map((project) => (
              <Card key={project.id} className="bg-white border-zinc-200 flex flex-col transition-all duration-300 hover:border-zinc-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 overflow-hidden group">

                {/* Komponen Slider Kustom */}
                <ProjectSlider imageUrls={project.imageUrls} title={project.title} />

                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl text-zinc-900">{project.title}</CardTitle>
                      <CardDescription className="text-zinc-600 mt-1 font-medium">{project.role}</CardDescription>
                    </div>
                    {project.link && project.link !== "#" && (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="hover:bg-zinc-100 text-zinc-500 shrink-0">
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex-grow">
                  <p className="text-base text-zinc-600 leading-relaxed">{project.description}</p>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 font-medium px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION 2: SIDE PROJECTS */}
        <section className="space-y-6 pt-6">
          <h2 className="text-2xl font-semibold border-b border-zinc-200 pb-4 text-zinc-900">Side Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {sideProjects.map((project) => (
              <Card key={project.id} className="bg-white border-zinc-200 flex flex-col transition-all duration-300 hover:border-zinc-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 overflow-hidden group">

                {/* Komponen Slider Kustom */}
                <ProjectSlider imageUrls={project.imageUrls} title={project.title} />

                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl text-zinc-900">{project.title}</CardTitle>
                      <CardDescription className="text-zinc-600 mt-1 font-medium">{project.role}</CardDescription>
                    </div>
                    {project.link && project.link !== "#" && (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="hover:bg-zinc-100 text-zinc-500 shrink-0">
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex-grow">
                  <p className="text-base text-zinc-600 leading-relaxed">{project.description}</p>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 font-medium px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
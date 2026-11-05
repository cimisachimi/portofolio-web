import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, MapPin, GraduationCap, Server, Code, Database } from "lucide-react";

// Custom SVG Github agar terhindar dari error import lucide-react
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

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
              <span>S1 Informatika, Univ. AMIKOM Yogyakarta (IPK 3.64)</span>
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

        {/* Skills & Tech Stack Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-zinc-200 pb-4 text-zinc-900">Keahlian Teknis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <Code className="h-6 w-6 mb-2 text-zinc-600" />
                <CardTitle className="text-lg text-zinc-900">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 text-sm">
                Next.js, React, TypeScript, Tailwind CSS, shadcn/ui.
              </CardContent>
            </Card>
            <Card className="bg-white border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <Database className="h-6 w-6 mb-2 text-zinc-600" />
                <CardTitle className="text-lg text-zinc-900">Backend & Database</CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 text-sm">
                Laravel (PHP), Node.js, Express, MySQL, PostgreSQL, Prisma ORM.
              </CardContent>
            </Card>
            <Card className="bg-white border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <Server className="h-6 w-6 mb-2 text-zinc-600" />
                <CardTitle className="text-lg text-zinc-900">Infrastruktur & Ops</CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 text-sm">
                Ubuntu VPS, Nginx (Reverse Proxy), PM2, aaPanel, RESTful API Design.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 1: PROYEK MAGANG & PROFESIONAL */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-zinc-200 pb-4 text-zinc-900">Proyek Magang & Profesional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internshipProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-white border-zinc-200 flex flex-col transition-all duration-300 hover:border-zinc-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 overflow-hidden group"
              >
                {/* Komponen Gambar */}
                {project.imageUrl && (
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-zinc-100 bg-zinc-100">
                    <Image
                      src={project.imageUrl}
                      alt={`Screenshot ${project.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl text-zinc-900">{project.title}</CardTitle>
                      <CardDescription className="text-zinc-600 mt-1 font-medium">
                        {project.role}
                      </CardDescription>
                    </div>
                    {project.link && project.link !== "#" && (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Kunjungi ${project.title}`}>
                        <Button variant="ghost" size="icon" className="hover:bg-zinc-100 text-zinc-500 shrink-0">
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex-grow">
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 font-medium px-2.5 py-0.5"
                      >
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sideProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-white border-zinc-200 flex flex-col transition-all duration-300 hover:border-zinc-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 overflow-hidden group"
              >
                {/* Komponen Gambar */}
                {project.imageUrl && (
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-zinc-100 bg-zinc-100">
                    <Image
                      src={project.imageUrl}
                      alt={`Screenshot ${project.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl text-zinc-900">{project.title}</CardTitle>
                      <CardDescription className="text-zinc-600 mt-1 font-medium">
                        {project.role}
                      </CardDescription>
                    </div>
                    {project.link && project.link !== "#" && (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Kunjungi ${project.title}`}>
                        <Button variant="ghost" size="icon" className="hover:bg-zinc-100 text-zinc-500 shrink-0">
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex-grow">
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 font-medium px-2.5 py-0.5"
                      >
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
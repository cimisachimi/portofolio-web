import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
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
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 p-8 md:p-24">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Muhammad Faturahman
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Full Stack Web Developer. Membangun aplikasi web modern dengan arsitektur decoupled menggunakan Next.js, React, dan ekosistem backend seperti Laravel atau Node.js.
          </p>
          <div className="flex gap-4 pt-4">
            <Button variant="default">
              <GithubIcon className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button variant="outline" className="text-zinc-900">
              Download CV
            </Button>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Proyek Terpilih</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="bg-zinc-900 border-zinc-800 text-zinc-50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-zinc-400 mt-1">{project.role}</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4 text-zinc-400" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-zinc-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
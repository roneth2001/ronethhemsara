import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: '#0d2d2a' }}>Featured Work</h2>
            <p className="mt-2" style={{ color: '#4a7a74' }}>Highlighting my latest software and hardware builds.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project: { id: any; title: any; description: any; tech: any; }) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
}

const ProjectCard = ({ title, description, tech }: ProjectProps) => {
  return (
    <div className="p-6 bg-white/90 backdrop-blur-sm border rounded-2xl hover:shadow-lg transition-all group" style={{ borderColor: 'rgba(14,159,124,0.3)' }}>
      <h3 className="text-xl font-bold group-hover:transition" style={{ color: '#0d2d2a' }}>{title}</h3>
      <p className="text-sm mt-2 mb-4" style={{ color: '#4a7a74' }}>{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 text-[10px] font-bold rounded-md uppercase" style={{ backgroundColor: 'rgba(14,159,124,0.1)', color: '#0e9f7c' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
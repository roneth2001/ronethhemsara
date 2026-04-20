import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#0d2d2a' }}>About Me</h1>
      
      <section className="prose prose-slate lg:prose-lg space-y-6" style={{ color: '#4a7a74' }}>
        <p>
          I am a dedicated <b>Information and Communication Technology student</b> with a deep interest in how 
          software interacts with the real world through IoT and the intelligent 
          capabilities of AI.
        </p>
        <p>
          My technical journey focuses on building scalable backend systems with <b>Spring Boot</b> and creating seamless mobile experiences using <b>Flutter</b>. I am currently 
          delving into deep learning research for medical diagnostics.
        </p>
      </section>

      <h2 className="text-2xl font-bold mt-16 mb-8" style={{ color: '#0d2d2a' }}>Professional Journey</h2>
      
      <div className="space-y-10">
        {/* Internship Card */}
        <div className="relative pl-8 border-l-2" style={{ borderColor: '#0e9f7c' }}>
          <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full" style={{ backgroundColor: '#0e9f7c' }} />
          <h3 className="text-xl font-bold" style={{ color: '#0d2d2a' }}>Software Engineering Intern</h3>
          <p className="font-semibold text-sm" style={{ color: '#0e9f7c' }}>SLTMOBITEL</p>
          <p className="text-xs mt-1 italic" style={{ color: '#7aada6' }}>Since: April 07, 2026</p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: '#4a7a74' }}>
            Joining the digital platforms team to contribute to large-scale mobile and web infrastructure.
          </p>
        </div>

        {/* Education Card */}
        <div className="relative pl-8 border-l-2 border-slate-200">
          <div className="absolute -left-1.5 top-1 w-3 h-3 bg-slate-300 rounded-full" />
          <h3 className="text-xl font-bold" style={{ color: '#0d2d2a' }}>Bachelor of Information and Communication Technology (Honors)[UG]</h3>
          <p className="font-medium text-sm" style={{ color: '#4a9e90' }}>Vavuniya Campus, University of Jaffna</p>
          <p className="mt-2 text-sm" style={{ color: '#4a7a74' }}>
            Focusing on Software Engineering, Data Structures, and Embedded Systems.
          </p>
        </div>
      </div>

      <div className="mt-16 p-8 bg-white/90 backdrop-blur-sm rounded-2xl border" style={{ borderColor: 'rgba(14,159,124,0.3)' }}>
        <h3 className="font-bold mb-4" style={{ color: '#0d2d2a' }}>Core Competencies</h3>
        <div className="flex flex-wrap gap-3">
          {['Java', 'Spring Boot', 'Flutter', 'Node.js', 'Firebase', 'IoT'].map(skill => (
            <span key={skill} className="px-4 py-2 bg-white border rounded-lg text-sm font-medium shadow-sm" style={{ borderColor: 'rgba(14,159,124,0.3)', color: '#4a7a74' }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
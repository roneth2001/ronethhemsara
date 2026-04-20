import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase rounded-full" style={{ color: '#0e9f7c', backgroundColor: 'rgba(14,159,124,0.1)' }}>
        Available for Internships & Projects
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight" style={{ color: '#0d2d2a' }}>
        Building Intelligent <br />
        <span style={{ color: '#0e9f7c' }}>Digital Experiences</span>
      </h1>
      <p className="max-w-2xl text-lg mb-10 leading-relaxed" style={{ color: '#4a7a74' }}>
        I'm an Information and Communication Technology student specializing in Full-Stack development, 
        Mobile Application Development, and IoT systems. Currently focused on deep learning for medical imaging.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/projects" className="px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/10" style={{ backgroundColor: '#0d2d2a', color: 'white' }}>
          View Projects
        </Link>
        <Link href="/about" className="px-8 py-4 bg-white border rounded-xl font-bold hover:bg-slate-50 transition-all" style={{ color: '#0d2d2a', borderColor: 'rgba(14,159,124,0.3)' }}>
          Read My Story
        </Link>
      </div>
    </section>
  );
};

export default Hero;
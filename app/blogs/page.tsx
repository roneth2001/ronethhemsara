import { blogs } from "../data/blogs";

export default function BlogsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold" style={{ color: '#0d2d2a' }}>Insights & Writing</h1>
        <p className="mt-2" style={{ color: '#4a7a74' }}>Sharing my experiences in IT, AI research, and development.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((post) => (
          <article key={post.id} className="group p-8 bg-white/90 backdrop-blur-sm border rounded-3xl hover:shadow-xl transition-all duration-300" style={{ borderColor: 'rgba(14,159,124,0.3)' }}>
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full" style={{ backgroundColor: 'rgba(14,159,124,0.1)', color: '#0e9f7c' }}>
                {post.category}
              </span>
              <span className="text-xs" style={{ color: '#7aada6' }}>{post.date}</span>
            </div>
            
            <h2 className="text-2xl font-bold group-hover:transition mb-3" style={{ color: '#0d2d2a' }}>
              {post.title}
            </h2>
            
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#4a7a74' }}>
              {post.excerpt}
            </p>

            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: '#0d2d2a' }}>
              Read Article <span>→</span>
            </a>
          </article>
        ))}
      </div>

      {/* Newsletter / CTA */}
      <div className="mt-20 p-12 rounded-3xl text-center" style={{ backgroundColor: '#0d2d2a', color: 'white' }}>
        <h3 className="text-2xl font-bold mb-4">Want to stay updated?</h3>
        <p className="mb-8 max-w-md mx-auto" style={{ color: '#7aada6' }}>I occasionally share deep dives into IoT and AI architectures. Connect with me on LinkedIn to keep in touch.</p>
        <a href="https://linkedin.com" className="inline-block bg-white px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition" style={{ color: '#0d2d2a' }}>
          Let's Connect
        </a>
      </div>
    </div>
  );
}
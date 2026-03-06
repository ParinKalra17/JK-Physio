const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    ['10000+', 'Patients Treated'],
    ['15+', 'Years Experience'],
    ['98%', 'Success Rate'],
  ];

  return (
    <section id="home" className="hero-gradient mesh-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-200/30 rounded-full blur-3xl pulse-ring"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-red-100/40 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-red-400 rounded-full" style={{ animation: 'pulse 2s infinite' }}></div>
            <span className="text-brand text-xs font-semibold tracking-widest uppercase">
              Accepting New Patients
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
            Restore Your<br />
            <span className="text-brand">Movement,</span><br />
            Reclaim Your Life
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md font-light">
            Expert physiotherapy and rehabilitation care tailored to your unique recovery journey. Evidence-based treatments, compassionate professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-2xl text-base border-none cursor-pointer"
            >
              Schedule a Consultation →
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="btn-secondary border-2 border-slate-200 text-slate-600 font-semibold px-8 py-4 rounded-2xl text-base cursor-pointer bg-transparent"
              style={{ transition: 'border-color 0.2s, color 0.2s' }}
            >
              Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-slate-200/60">
            {stats.map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-slate-800" style={{ fontFamily: "'Montesserat" }}>
                  {num}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-brand/10 rounded-full pulse-ring"></div>
            <div
              className="absolute inset-4 rounded-full flex items-center justify-center shadow-xl"
              style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #ffffff 100%)' }}
            >
              <svg viewBox="0 0 160 160" fill="none" className="w-48 h-48 text-brand">
                <circle cx="80" cy="60" r="28" stroke="currentColor" strokeWidth="3" fill="white" />
                <path d="M80 88c-28 0-48 16-48 36h96c0-20-20-36-48-36z" stroke="currentColor" strokeWidth="3" fill="white" />
                <path d="M68 56h24M80 44v24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 border border-slate-100">
              <div className="text-xs font-semibold text-slate-500">Today's Sessions</div>
              <div className="text-2xl font-bold text-brand" style={{ fontFamily: "'Montesserat" }}>
                24
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3 border border-slate-100">
              <Stars />
              <div className="text-xs text-slate-400 mt-1">4.9 / 5.0 Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import BranchesMap from './BranchesMap';



const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    ['50000+', 'Patients Treated'],
    ['16+', 'Years Experience'],
    ['98%', 'Success Rate'],
  ];

  return (
    <section id="home" className="hero-gradient mesh-bg min-h-screen flex items-center pt-24 lg:pt-40 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-200/30 rounded-full blur-3xl pulse-ring"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-red-100/40 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-12 py-16 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center relative w-full">
        {/* Left Content */}
        <div className="max-w-xl">
          

         <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight mb-6">
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
                <div className="text-2xl font-bold text-slate-800">
                  {num}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <BranchesMap />
      </div>
    </section>
  );
};

export default Hero;
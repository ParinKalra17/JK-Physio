import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
        <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 28c2 4 5 6 8 6s6-2 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Orthopedic Rehab',
    desc: 'Targeted treatment for joint, bone, and muscle conditions. From chronic pain to acute injuries, we restore functional movement with precision-guided therapy.',
    tag: 'Most Popular',
    route: '/services/orthopedic-rehab',
    color: '#db261d',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M12 36L24 12l12 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 28h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="10" r="3" fill="currentColor" />
      </svg>
    ),
    title: 'Sports Injury Management',
    desc: 'Elite-level care for athletes at every stage. Rapid recovery protocols combining manual therapy, strength conditioning, and sport-specific rehabilitation.',
    tag: 'Athletes',
    route: '/services/sports-injury',
    color: '#db261d',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 8l8 0M40 8l0 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 24c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Neurological Rehabilitation',
    desc: "Compassionate, evidence-based therapy for stroke, Parkinson's, and nerve conditions. Helping patients regain independence through neuroplasticity-focused programs.",
    tag: 'Specialized',
    route: '/services/neurological-rehab',
    color: '#db261d',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="10" y="18" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 18v-4a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 28v4M20 30h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Post-Surgical Recovery',
    desc: 'Structured rehabilitation following orthopaedic surgeries. Our phased approach minimizes complications and accelerates your return to full activity.',
    tag: 'Surgical Care',
    route: '/services/post-surgical',
    color: '#db261d',
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Banner */}
      <div
        className="relative pt-28 pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 50%, #fff5f5 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(219,38,29,0.08)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(219,38,29,0.05)' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm font-semibold mb-8 bg-white/70 px-4 py-2 rounded-full border cursor-pointer"
            style={{ color: '#db261d', borderColor: '#fecaca' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Home
          </button>

          <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5"
            style={{ backgroundColor: '#fff1f1', color: '#db261d' }}>
            Our Specialties
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Comprehensive Care <span style={{ color: '#db261d' }}>For Every Patient</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            From acute injuries to chronic conditions, our multidisciplinary team delivers personalised, evidence-based treatment pathways tailored to you.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-10 pt-8 border-t" style={{ borderColor: '#fecaca' }}>
            {[['5+', 'Specialties'], ['500+', 'Patients Treated'], ['12+', 'Years Experience'], ['98%', 'Success Rate']].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-slate-800" style={{ fontFamily: "'Montesserat" }}>{num}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`fade-up fade-up-delay-${(i % 4) + 1} ${visible ? 'visible' : ''}`}
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  border: '1px solid #f1f5f9',
                  padding: '32px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 48px rgba(219,38,29,0.13)';
                  e.currentTarget.style.borderColor = 'rgba(219,38,29,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.05)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
                onClick={() => navigate(s.route)}
              >
                {/* Top color accent bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#db261d', borderRadius: '24px 24px 0 0' }} />

                {/* Tag */}
                <div
                  className="absolute top-6 right-6 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#fff1f1', color: '#db261d' }}
                >
                  {s.tag}
                </div>

                {/* Icon */}
                <div className="icon-hover mt-4 mb-5" style={{ color: '#db261d' }}>{s.icon}</div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">{s.desc}</p>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#db261d' }}>
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 rounded-3xl p-10 text-center"
            style={{ background: 'linear-gradient(135deg, #db261d, #b91c1c)' }}
          >
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Montesserat" }}>
              Not Sure Which Service You Need?
            </h3>
            <p className="text-red-100 mb-6 text-sm max-w-md mx-auto">
              Book a free consultation and our specialists will assess your condition and recommend the best treatment plan.
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="bg-white font-bold px-8 py-3.5 rounded-xl text-sm cursor-pointer border-none"
              style={{ color: '#db261d', boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
            >
              Book Free Consultation →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;


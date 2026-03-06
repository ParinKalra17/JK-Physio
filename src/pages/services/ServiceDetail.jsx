import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Banner */}
      <div
        className="relative pt-28 pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 50%, #fff5f5 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-brand text-sm font-semibold mb-8 bg-white/70 px-4 py-2 rounded-full border border-red-100 cursor-pointer"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Services
          </button>

          {/* Tag */}
          <div
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5"
            style={{ backgroundColor: '#fff1f1', color: '#dc2626' }}
          >
            {service.tag}
          </div>

          {/* Title */}
          <div className="flex items-start gap-6">
            <div className="text-brand mt-1 flex-shrink-0">{service.icon}</div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">{service.title}</h1>
              <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">{service.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left — Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
              <p className="text-slate-500 leading-relaxed">{service.overview}</p>
            </div>

            {/* What We Treat */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-5">What We Treat</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.conditions.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ backgroundColor: '#f8faff', border: '1px solid #fff5f5' }}>
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                    <span className="text-slate-600 text-sm font-medium">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Approach */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-5">Our Treatment Approach</h2>
              <div className="space-y-4">
                {service.approach.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100"
                    style={{ background: 'linear-gradient(145deg, #ffffff, #f8faff)' }}>
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: '#db261d' }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 mb-1">{step.title}</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-5">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 12 12">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-slate-600 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">

            {/* Quick Info */}
            <div className="rounded-2xl p-6 border border-slate-100"
              style={{ background: 'linear-gradient(145deg, #f8faff, #fff5f5)' }}>
              <h3 className="font-bold text-slate-800 mb-4">Quick Info</h3>
              <div className="space-y-3">
                {service.quickInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg">{info.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{info.label}</div>
                      <div className="text-sm text-slate-700 font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Is It For */}
            <div className="rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Who Is This For?</h3>
              <ul className="space-y-2">
                {service.whoFor.map((w, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Box */}
            <div className="rounded-2xl p-6 text-white text-center"
              style={{ background: 'linear-gradient(135deg, #db261d, #b91c1c)' }}>
              <h3 className="font-bold mb-2">Ready to Begin?</h3>
              <p className="text-red-100 text-xs mb-4 leading-relaxed">
                Book a consultation and start your recovery journey today.
              </p>
              <button
                onClick={() => navigate('/#contact')}
                className="btn-primary bg-white text-brand font-bold px-6 py-2.5 rounded-xl text-sm cursor-pointer border-none w-full"
                style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
              >
                Book Appointment →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

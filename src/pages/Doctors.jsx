import { useEffect, useRef, useState } from 'react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Piyush Devpura',
    title: 'Senior Physiotherapist',
    photo: "dr-piyush.jpeg",
    alt: "Dr. Piyush Devpura",
    initials: 'PD',
    color: '#db261d',
    experience: '16 Years',
    specialization: ['Orthopedic Rehab', 'Sports Injury', 'Manual Therapy'],
    qualifications: [
      { degree: 'BPT', field: 'Bachelor of Physiotherapy', university: 'Rajasthan University', year: '2010' },
      { degree: 'MPT', field: 'Master of Physiotherapy (Ortho)', university: 'AIIMS, New Delhi', year: '2012' },
      { degree: 'MIAP', field: 'Member, Indian Association of Physiotherapists', university: 'IAP Certified', year: '2013' },
    ],
    bio: 'Dr. Piyush brings over 16 years of expertise in orthopedic and sports rehabilitation. He has worked with national-level athletes and post-surgical patients, helping hundreds regain full mobility.',
  },
  {
    id: 2,
    name: 'Dr. Swati Devpura',
    title: 'Dietician',
    photo: "swati.jpeg",
    alt: "swati",
    initials: 'SD',
    color: '#db261d',
    experience: '16 Years',
    specialization: ['Neurological Rehab', 'Stroke Recovery', 'Pediatric Physio'],
    qualifications: [
      { degree: 'BPT', field: 'Bachelor of Physiotherapy', university: 'MAMC, Delhi', year: '2015' },
      { degree: 'MPT', field: 'Master of Physiotherapy (Neurology)', university: 'NIMHANS, Bangalore', year: '2017' },
      { degree: 'NDTA', field: 'Neurodevelopmental Treatment (Bobath)', university: 'International Bobath Institute', year: '2019' },
    ],
    bio: 'Dr. Swati specializes in neurological rehabilitation with a compassionate, patient-first approach. Her expertise in stroke recovery and neuroplasticity-based programs has transformed lives across all age groups.',
  },
];

const DoctorCard = ({ doctor, index, visible }) => {
  const [expanded, setExpanded] = useState(false);
  const [photo, setPhoto] = useState(doctor.photo);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhoto(url);
  };

  return (
    <div
      className={`fade-up fade-up-delay-${index + 1} ${visible ? 'visible' : ''}`}
      style={{
        background: 'white',
        borderRadius: '28px',
        border: '1px solid #f1f5f9',
        overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        minHeight: isMobile ? 'unset' : '420px',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 56px rgba(219,38,29,0.13)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.07)'}
    >
      {/* ── LEFT/TOP: Photo Panel ──────────────────────────── */}
      <div
        style={{
          width: isMobile ? '100%' : '260px',
          minWidth: isMobile ? 'unset' : '260px',
          height: isMobile ? '300px' : '420px',
          position: 'relative',
          background: 'linear-gradient(160deg, #fff5f5 0%, #fee2e2 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          overflow: 'hidden',
          cursor: 'pointer',
          alignSelf: isMobile ? 'stretch' : 'flex-start',
        }}
        onClick={() => fileInputRef.current?.click()}
        title="Click to upload photo"
      >
        <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(219,38,29,0.08)' }} />
        <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(219,38,29,0.05)' }} />

        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          {photo ? (
            <img src={photo} alt={doctor.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px', fontWeight: '800', color: '#db261d', opacity: 0.25, letterSpacing: '-2px' }}>
              {doctor.initials}
            </div>
          )}
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to top, rgba(219,38,29,0.18), transparent)', zIndex: 1 }} />

        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0)', transition: 'background 0.2s', zIndex: 2 }} className="photo-hover-overlay">
          <div style={{ background: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.15)', opacity: 0, transition: 'opacity 0.2s' }} className="camera-icon">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="#db261d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="13" r="4" stroke="#db261d" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhotoUpload} />
        <style>{`.photo-hover-overlay:hover { background: rgba(0,0,0,0.18) !important; } .photo-hover-overlay:hover .camera-icon { opacity: 1 !important; }`}</style>
      </div>

      {/* ── RIGHT: Details Panel ───────────────────────────── */}
      <div style={{ flex: 1, padding: isMobile ? '24px 20px 28px' : '36px 36px 32px', display: 'flex', flexDirection: 'column', gap: '0px', overflowY: 'auto' }}>

        <div style={{ marginBottom: '6px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#1e293b', margin: 0, letterSpacing: '-0.5px' }}>{doctor.name}</h3>
          <p style={{ fontSize: '13px', color: '#db261d', fontWeight: '600', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{doctor.title}</p>
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff5f5', border: '1px solid #fecaca', borderRadius: '999px', padding: '4px 12px', marginBottom: '18px', width: 'fit-content', marginTop: '10px' }}>
          <svg width="13" height="13" fill="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="6" stroke="#db261d" strokeWidth="1.5" />
            <path d="M8 5v3l2 1.5" stroke="#db261d" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#db261d' }}>{doctor.experience} Experience</span>
        </div>

        <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.75', margin: '0 0 20px' }}>{doctor.bio}</p>
        <div style={{ height: '1px', background: '#f1f5f9', marginBottom: '20px' }} />

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>Specializations</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {doctor.specialization.map((s) => (
              <span key={s} style={{ fontSize: '12px', fontWeight: '600', padding: '5px 12px', borderRadius: '8px', background: '#fff5f5', color: '#db261d', border: '1px solid #fecaca' }}>{s}</span>
            ))}
          </div>
        </div>

        <div style={{ height: '1px', background: '#f1f5f9', marginBottom: '20px' }} />

        <button
          onClick={() => setExpanded(!expanded)}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 16px', borderRadius: '14px', border: `1px solid ${expanded ? '#fecaca' : '#f1f5f9'}`, background: expanded ? '#fff5f5' : '#fafafa', cursor: 'pointer', transition: 'all 0.2s', marginBottom: expanded ? '14px' : '0' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
              <rect x="2" y="2" width="12" height="12" rx="2" stroke="#db261d" strokeWidth="1.5" />
              <path d="M5 6h6M5 9h4" stroke="#db261d" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b' }}>Qualifications & Certifications</span>
          </div>
          <svg width="15" height="15" fill="none" viewBox="0 0 16 16" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
            <path d="M4 6l4 4 4-4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {expanded && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {doctor.qualifications.map((q, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px 16px', borderRadius: '14px', background: '#fafafa', border: '1px solid #f1f5f9' }}>
                <div style={{ flexShrink: 0, width: '42px', height: '42px', borderRadius: '10px', background: 'linear-gradient(135deg, #db261d, #b91c1c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px', fontWeight: '800', letterSpacing: '0.03em' }}>
                  {q.degree}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b' }}>{q.field}</div>
                  <div style={{ fontSize: '11.5px', color: '#94a3b8', marginTop: '2px' }}>{q.university}</div>
                  <div style={{ fontSize: '11.5px', color: '#db261d', fontWeight: '600', marginTop: '4px' }}>Class of {q.year}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Doctors = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Banner */}
      <div className="relative pt-40 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 50%, #fff5f5 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl" />
        </div>

        {/* ✅ CHANGED: max-w-6xl px-6 → max-w-screen-xl px-12 */}
        <div className="max-w-screen-xl mx-auto px-12 relative">
          <div className="flex items-center gap-4 mb-8">
            {window.location.pathname !== '/' && (
              <button
                onClick={() => { window.location.href = '/'; }}
                className="inline-flex items-center gap-2 text-sm font-semibold bg-white/70 backdrop-blur px-4 py-2 rounded-full border border-red-100 cursor-pointer hover:bg-white transition-all mt-3"
                style={{ color: '#db261d' }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
            <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mt-3" style={{ background: '#fee2e2', color: '#db261d' }}>
              Our Team
            </div>
          </div>

          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Meet Our <span style={{ color: '#db261d' }}>Specialists</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Our team of certified physiotherapists and rehabilitation specialists bring world-class expertise and genuine compassion to every patient interaction.
          </p>

          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-red-100">
            {[['2', 'Expert Therapists'], ['35+', 'Combined Years Exp.'], ['12+', 'Certifications'], ['50000+', 'Patients Helped']].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-slate-800">{num}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Doctors List */}
      <section className="py-20" ref={sectionRef}>
        {/* ✅ CHANGED: max-w-5xl px-6 → max-w-screen-xl px-12 */}
        <div className="max-w-screen-xl mx-auto px-12">

          <div className={`text-center mb-14 fade-up ${visible ? 'visible' : ''}`}>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Click on any doctor's card to expand their full qualifications and certifications.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {doctors.map((doctor, i) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={i} visible={visible} />
            ))}
          </div>

          {/* CTA */}
          <div className={`mt-16 rounded-3xl p-10 text-center fade-up fade-up-delay-4 ${visible ? 'visible' : ''}`} style={{ background: 'linear-gradient(135deg, #db261d, #b91c1c)' }}>
            <h3 className="text-2xl font-bold text-white mb-3">Want to Join Us?</h3>
            <p className="text-red-100 mb-6 text-sm">Book a consultation with one of our specialists today.</p>
            <button
              onClick={() => { window.open('https://wa.me/919928981863?text=Hello!%20I%20would%20like%20to%20book%20a%20call.', '_blank'); }}
              style={{ background: 'white', color: '#db261d', fontWeight: '700', padding: '12px 32px', borderRadius: '12px', fontSize: '14px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
            >
              Book a Call →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
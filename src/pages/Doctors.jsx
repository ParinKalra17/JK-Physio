import { useEffect, useRef, useState } from 'react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Piyush Devpura',
    title: 'Senior Physiotherapist',
    photo: null,
    initials: 'PD',
    color: '#000000',
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
    photo: null,
    initials: 'SD',
    color: '#dc2626',
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

  return (
    <div
      className={`fade-up fade-up-delay-${index + 1} ${visible ? 'visible' : ''}`}
      style={{
        background: 'white',
        borderRadius: '24px',
        border: '1px solid #f1f5f9',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Top Banner */}
      <div style={{ height: '8px', background: doctor.color }} />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          {/* Avatar */}
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-2xl text-white font-bold text-2xl"
            style={{
              width: '80px',
              height: '80px',
              background: `linear-gradient(135deg, ${doctor.color}, ${doctor.color}cc)`,
              fontFamily: "'Montesserat",
            }}
          >
            {doctor.initials}
          </div>

          {/* Name & Title */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-xl font-bold text-slate-800">{doctor.name}</h3>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: `${doctor.badgeColor}15`, color: doctor.badgeColor }}
              >
                {doctor.badge}
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-3">{doctor.title}</p>

            {/* Experience pill */}
            <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-full px-3 py-1">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-xs font-semibold text-slate-600">{doctor.experience} Experience</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{doctor.bio}</p>

        {/* Specializations */}
        <div className="mb-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Specializations</div>
          <div className="flex flex-wrap gap-2">
            {doctor.specialization.map((s) => (
              <span
                key={s}
                className="text-xs font-medium px-3 py-1.5 rounded-lg"
                style={{ backgroundColor: `${doctor.color}10`, color: doctor.color }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Qualifications Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="qual-toggle w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 cursor-pointer transition-all"
          style={{
            background: expanded ? '#f8faff' : '#fafafa',
            borderColor: expanded ? '#fecaca' : '#f1f5f9',
          }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 16 16">
              <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M5 6h6M5 9h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-sm font-semibold text-slate-700">Qualifications & Certifications</span>
          </div>
          <svg
            className="w-4 h-4 text-slate-400 transition-transform"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            fill="none" viewBox="0 0 16 16"
          >
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Qualifications List */}
        {expanded && (
          <div className="mt-3 space-y-3">
            {doctor.qualifications.map((q, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ backgroundColor: '#f8faff', border: '1px solid #fff5f5' }}
              >
                {/* Degree Badge */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-lg text-white text-xs font-bold"
                  style={{ width: '44px', height: '44px', backgroundColor: doctor.color }}
                >
                  {q.degree}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{q.field}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{q.university}</div>
                  <div className="text-xs text-brand font-medium mt-1">Class of {q.year}</div>
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
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Banner */}
      <div
        className="relative pt-24 pb-16 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 50%, #fff5f5 100%)',
        }}
      >
        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Back button */}
          <button
            onClick={scrollToHome}
            className="inline-flex items-center gap-2 text-brand text-sm font-semibold mb-8 bg-white/70 backdrop-blur px-4 py-2 rounded-full border border-red-100 cursor-pointer hover:bg-white transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </button>

          <div className="inline-block bg-red-50 text-brand text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Our Team
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Meet Our <span className="text-brand">Specialists</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Our team of certified physiotherapists and rehabilitation specialists bring world-class expertise and genuine compassion to every patient interaction.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-red-100">
            {[['2', 'Expert Therapists'], ['35+', 'Combined Years Exp.'], ['12+', 'Certifications'], ['10000+', 'Patients Helped']].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-slate-800" style={{ fontFamily: "'Montesserat" }}>{num}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <section className="py-20" ref={sectionRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-14 fade-up ${visible ? 'visible' : ''}`}>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Click on any doctor's card to expand their full qualifications and certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {doctors.map((doctor, i) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={i} visible={visible} />
            ))}
          </div>

          {/* CTA */}
          <div
            className={`mt-16 rounded-3xl p-10 text-center fade-up fade-up-delay-4 ${visible ? 'visible' : ''}`}
            style={{ background: 'linear-gradient(135deg, #db261d, #b91c1c)' }}
          >
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Montesserat" }}>
              Ready to Start Your Recovery?
            </h3>
            <p className="text-red-100 mb-6 text-sm">
              Book a consultation with one of our specialists today.
            </p>
            <button
              onClick={() => { window.location.href = '/#contact'; }}
              className="btn-primary bg-white text-brand font-bold px-8 py-3.5 rounded-xl text-sm cursor-pointer border-none"
              style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.15)', transition: 'transform 0.2s' }}
            >
              Book an Appointment →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;

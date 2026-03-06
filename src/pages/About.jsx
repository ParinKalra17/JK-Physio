import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const highlights = [
  ['Evidence-Based', 'Grounded in latest clinical research'],
  ['Holistic Care', 'Treating the whole person, not just symptoms'],
  ['MAPT Certified', 'Internationally trained specialists'],
  ['Long-Term Wellness', 'Tools to sustain health beyond sessions'],
];


const machines = [
  {
    icon: '🔊',
    name: 'Ultrasound Therapy',
    desc: 'Deep tissue healing using high-frequency sound waves to reduce inflammation, accelerate tissue repair, and relieve chronic pain.',
    badge: 'Deep Tissue',
  },
  {
    icon: '⚡',
    name: 'TENS / EMS',
    desc: 'Transcutaneous electrical nerve stimulation and electrical muscle stimulation for pain management and muscle re-education.',
    badge: 'Pain Relief',
  },
  {
    icon: '🔴',
    name: 'Laser Therapy',
    desc: 'Low-level laser therapy (LLLT) promotes cellular regeneration, reduces swelling, and fast-tracks recovery from injuries.',
    badge: 'Regenerative',
  },
  {
    icon: '💥',
    name: 'Shockwave Therapy',
    desc: 'Extracorporeal shockwave therapy for chronic tendinopathies, plantar fasciitis, and calcific deposits — non-invasive and highly effective.',
    badge: 'Non-Invasive',
  },
  {
    icon: '🦴',
    name: 'Traction Unit',
    desc: 'Cervical and lumbar traction to decompress the spine, relieve nerve impingement, and treat herniated discs without surgery.',
    badge: 'Spinal Care',
  },
  {
    icon: '💧',
    name: 'Hydrotherapy',
    desc: 'Therapeutic aquatic exercises in temperature-controlled water to restore mobility, build strength, and reduce load on joints.',
    badge: 'Aquatic Rehab',
  },
];

const AboutPage = () => {
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
            About Us
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-4">
            Healing Centered <span style={{ color: '#db261d' }}>on You</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Learn about our mission, philosophy, and the team behind JK Physiotherapy & Rehab.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10 mt-10 pt-8 border-t" style={{ borderColor: '#fecaca' }}>
            {[['15+', 'Years of Excellence'], ['80+', 'Specialist Therapists'], ['10000+', 'Lives Changed'], ['98%', 'Success Rate']].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-slate-800" style={{ fontFamily: "'Montesserat'" }}>{num}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Text */}
            <div className={`fade-up ${visible ? 'visible' : ''}`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                Who We <span style={{ color: '#db261d' }}>Are</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                At JK Physiotherapy & Rehab, we believe recovery is more than treating symptoms — it's about understanding the whole person. Our team of certified physiotherapists brings together decades of combined expertise to craft individualised treatment plans that address the root causes of pain and dysfunction.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Our holistic approach integrates manual therapy, exercise rehabilitation, patient education, and the latest evidence-based modalities. We are committed to empowering patients with the knowledge and tools to sustain long-term wellness far beyond their time with us.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map(([bold, light]) => (
                  <div key={bold} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" style={{ color: '#db261d' }} fill="none" viewBox="0 0 12 12">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-700">{bold}</div>
                      <div className="text-xs text-slate-400">{light}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className={`fade-up fade-up-delay-2 ${visible ? 'visible' : ''}`}>
              <div
                className="rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #db261d 0%, #b91c1c 100%)' }}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>

                <div className="relative z-10">
                  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mb-6 text-red-200">
                    <path d="M8 14h32v24a4 4 0 01-4 4H12a4 4 0 01-4-4V14z" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M6 14h36M16 10v4M32 10v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M24 22v8M20 26h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>

                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Montesserat" }}>
                    Our Philosophy
                  </h3>
                  <p className="text-red-100 leading-relaxed">
                    Every patient deserves exceptional, personalised care. We measure our success not in sessions completed, but in lives transformed and movement restored.
                  </p>

                  <div className="mt-8 pt-8 border-t border-white/20 flex flex-wrap gap-6 sm:gap-8">
                    <div>
                      <div className="text-3xl font-semibold" style={{ fontFamily: "'Montesserat" }}>15+</div>
                      <div className="text-red-200 text-sm">Years of Excellence</div>
                    </div>
                    <div>
                      <div className="text-3xl font-semibold" style={{ fontFamily: "'Montesserat" }}>80+</div>
                      <div className="text-red-200 text-sm">Specialist Therapists</div>
                    </div>
                    <div>
                      <div className="text-3xl font-semibold" style={{ fontFamily: "'Montesserat" }}>10000+</div>
                      <div className="text-red-200 text-sm">Lives Changed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* ── OUR TECHNOLOGY / MACHINES ── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: 'rgba(219,38,29,0.04)' }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: 'rgba(219,38,29,0.04)' }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className={`text-center mb-12 fade-up ${visible ? 'visible' : ''}`}>
            <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5"
              style={{ backgroundColor: '#fff1f1', color: '#db261d' }}>
              Advanced Equipment
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Our <span style={{ color: '#db261d' }}>Technology</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              We invest in world-class rehabilitation equipment so your recovery is faster, safer, and more effective.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine, i) => (
              <div
                key={machine.name}
                className={`fade-up fade-up-delay-${(i % 3) + 1} ${visible ? 'visible' : ''} p-6 rounded-2xl bg-white border border-slate-100 relative overflow-hidden`}
                style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(219,38,29,0.10)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl"
                  style={{ backgroundColor: 'rgba(219,38,29,0.04)' }} />

                {/* Badge */}
                <span
                  className="inline-block text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-full mb-4"
                  style={{ backgroundColor: '#fff1f1', color: '#db261d' }}
                >
                  {machine.badge}
                </span>

                <div className="text-4xl mb-3">{machine.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{machine.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{machine.desc}</p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #db261d, #b91c1c)',
                    transition: 'width 0.4s ease',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-12 fade-up ${visible ? 'visible' : ''}`}>
            <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5"
              style={{ backgroundColor: '#fff1f1', color: '#db261d' }}>
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              What Makes Us <span style={{ color: '#db261d' }}>Different</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏥', title: 'Multi-Branch Network', desc: 'Clinics across Rajasthan and Gujarat, making expert care accessible wherever you are.' },
              { icon: '👨‍⚕️', title: 'Certified Specialists', desc: 'All our therapists are MAPT certified with advanced degrees and international training.' },
              { icon: '📋', title: 'Personalised Plans', desc: 'Every patient receives a fully customised treatment plan based on their unique condition and goals.' },
              { icon: '🔬', title: 'Evidence-Based Care', desc: 'Our treatments are grounded in the latest clinical research and rehabilitation science.' },
              { icon: '❤️', title: 'Patient-First Approach', desc: 'We measure success in lives transformed and movement restored — not just sessions completed.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`fade-up fade-up-delay-${(i % 3) + 1} ${visible ? 'visible' : ''} p-6 rounded-2xl border border-slate-100`}
                style={{
                  background: 'linear-gradient(145deg, #ffffff, #fff5f5)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(219,38,29,0.10)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-3xl p-10 text-center"
            style={{ background: 'linear-gradient(135deg, #db261d, #b91c1c)' }}
          >
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Montesserat" }}>
              Ready to Begin Your Recovery?
            </h3>
            <p className="text-red-100 mb-6 text-sm max-w-md mx-auto">
              Meet our team and start your personalised rehabilitation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/doctors')}
                className="bg-white font-bold px-8 py-3.5 rounded-xl text-sm cursor-pointer border-none"
                style={{ color: '#db261d', boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
              >
                Meet Our Doctors →
              </button>
              <button
                onClick={() => navigate('/#contact')}
                className="bg-transparent font-bold px-8 py-3.5 rounded-xl text-sm cursor-pointer text-white"
                style={{ border: '2px solid rgba(255,255,255,0.5)' }}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
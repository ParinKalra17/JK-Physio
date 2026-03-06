import { useEffect, useRef, useState } from 'react';

const services = [
  'Orthopedic Rehab',
  'Sports Injury Management',
  'Neurological Rehabilitation',
  'Post-Surgical Recovery',
];

const contactInfo = [
  {
    icon: '📍',
    label: 'Address',
    value: 'Krishna Vatika, Opposite Brij Vihar, Near RK Circle, Pulla Bhuwana, Rupsagar, Udaipur, Rajasthan 313001',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 99289 81863',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'piyushdevpura@rediff.com',
  },
  {
    icon: '🕐',
    label: 'Hours',
    value: 'Mon–Sat: 8 AM – 8 PM\nSunday: 9:30 AM – 2 PM\n2nd Sunday close',
  },
];

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '', service: '', message: '',
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ firstName: '', lastName: '', phone: '', email: '', service: '', message: '' });
  };

  const inputClass = `
    w-full bg-white/10 border border-white/10 text-white rounded-xl px-4 py-3 text-sm
    focus:outline-none focus:border-red-400
  `;

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#1e293b' }}
      ref={sectionRef}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(219,38,29,0.1)', transform: 'translate(-50%, -10%)' }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'rgba(96,165,250,0.1)', transform: 'translate(30%, 20%)' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className={`text-center mb-16 fade-up ${visible ? 'visible' : ''}`}>
          <div className="inline-block text-red-300 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(219,38,29,0.2)' }}>
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your <span className="text-red-400">Recovery Journey</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Book your consultation today. Our team will reach out within 24 hours to confirm your appointment.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 fade-up ${visible ? 'visible' : ''}`}>
          {/* Form */}
          <div
            className="rounded-3xl p-8"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Book an Appointment</h3>

            {submitted && (
              <div className="mb-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-sm font-medium">
                ✅ Thank you! We'll confirm your appointment within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text" name="firstName" value={form.firstName} onChange={handleChange}
                  placeholder="First Name" required className={inputClass}
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'white' }}
                />
                <input
                  type="text" name="lastName" value={form.lastName} onChange={handleChange}
                  placeholder="Last Name" required className={inputClass}
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'white' }}
                />
              </div>
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="Phone Number" required className={inputClass}
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'white' }}
              />
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="Email Address" required className={inputClass}
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'white' }}
              />
              <select
                name="service" value={form.service} onChange={handleChange}
                className={inputClass}
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: form.service ? 'white' : '#94a3b8' }}
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s} value={s} style={{ color: '#1e293b', backgroundColor: 'white' }}>{s}</option>
                ))}
              </select>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                rows={3} placeholder="Tell us about your condition (optional)"
                className={inputClass} style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'white', resize: 'none' }}
              />
              <button
                type="submit"
                className="btn-primary w-full bg-brand text-white font-semibold py-4 rounded-xl border-none cursor-pointer text-base"
              >
                Request Appointment →
              </button>
            </form>
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-white text-sm whitespace-pre-line">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div
              className="rounded-2xl overflow-hidden relative flex items-center justify-center"
              style={{
                height: '220px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #db261d 0, #db261d 1px, transparent 0, transparent 50%)',
                  backgroundSize: '20px 20px',
                }}>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="text-white font-semibold text-sm">JK Physiotherapy & Rehab</div>
                <div className="text-slate-400 text-xs mt-1">Krishna Vatika, Opposite Brij Vihar, Near RK Circle, Pulla Bhuwana, Rupsagar, Udaipur, Rajasthan 313001</div>
                <a
                  href="https://maps.google.com/?q=Jaipur+Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-red-400 text-xs font-semibold underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

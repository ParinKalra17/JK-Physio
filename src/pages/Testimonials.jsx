import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Marathon Runner',
    text: "After my ACL surgery, I thought my running days were over. JK Physiotherapy's team had me back on the trail in 5 months. Their dedication is unmatched.",
    initials: 'PS',
    rating: 5,
  },
  {
    name: 'Rahul Mehra',
    role: 'Software Engineer',
    text: "Chronic lower back pain from desk work was ruining my life. Three months of targeted therapy here, and I'm pain-free. Truly life-changing care.",
    initials: 'RM',
    rating: 5,
  },
  {
    name: 'Anita Verma',
    role: 'Retired Teacher',
    text: 'Post-stroke rehabilitation at JK gave me my independence back. The therapists are patient, skilled, and genuinely caring. I am forever grateful.',
    initials: 'AV',
    rating: 5,
  },
  {
    name: 'Karan Joshi',
    role: 'Cricket Player',
    text: "Shoulder injury during a match — JK had me back playing in record time. Their sports rehab program is world-class. Highly recommend to all athletes.",
    initials: 'KJ',
    rating: 5,
  },
  {
    name: 'Sunita Patel',
    role: 'Homemaker',
    text: 'I had severe knee pain for years. After just 8 weeks of treatment at JK, I can walk without pain. The staff is so kind and professional.',
    initials: 'SP',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Army Officer',
    text: 'After a spinal injury, I was told I might not walk properly again. JK Physiotherapy proved everyone wrong. Outstanding neurological rehab program.',
    initials: 'VS',
    rating: 5,
  },
];

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialsPage = () => {
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
            style={{ backgroundColor: 'rgba(219,38,29,0.08)' }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(219,38,29,0.05)' }}></div>
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
            Patient Stories
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-4">
            Real Recoveries, <span style={{ color: '#db261d' }}>Real Lives</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Hear directly from our patients about their journey to recovery and how JK Physiotherapy changed their lives.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-10 pt-8 border-t" style={{ borderColor: '#fecaca' }}>
            {[['500+', 'Patients Treated'], ['98%', 'Success Rate'], ['4.9★', 'Average Rating'], ['12+', 'Years of Excellence']].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-slate-800" style={{ fontFamily: "'Montesserat" }}>{num}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`fade-up fade-up-delay-${(i % 4) + 1} ${visible ? 'visible' : ''}`}
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  border: '1px solid #f1f5f9',
                  padding: '32px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(219,38,29,0.10)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.05)';
                }}
              >
                {/* Quote mark */}
                <div className="text-5xl leading-none mb-4 font-serif" style={{ color: '#fecaca' }}>"</div>

                <p className="text-slate-500 leading-relaxed text-sm italic mb-6">{t.text}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: '#db261d' }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.role}</div>
                    </div>
                  </div>
                  <Stars count={t.rating} />
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
              Ready to Write Your Success Story?
            </h3>
            <p className="text-red-100 mb-6 text-sm">
              Join hundreds of patients who have restored their movement and reclaimed their lives.
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="bg-white font-bold px-8 py-3.5 rounded-xl text-sm cursor-pointer border-none"
              style={{ color: '#db261d', boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
            >
              Book a Consultation →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* ─── Paste this <style> into your global CSS or index.css ─────────────────
   (if you already have these from the main site, skip)

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,400;1,600&display=swap');

.testi-carousel-wrap {
  overflow: hidden;
  position: relative;
  margin-top: 60px;
}
.testi-carousel-wrap::before,
.testi-carousel-wrap::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: 120px;
  z-index: 2;
  pointer-events: none;
}
.testi-carousel-wrap::before {
  left: 0;
  background: linear-gradient(90deg, #FAFAFA, transparent);
}
.testi-carousel-wrap::after {
  right: 0;
  background: linear-gradient(-90deg, #FAFAFA, transparent);
}
.testi-track {
  display: flex;
  gap: 24px;
  animation: tscroll 45s linear infinite;
  width: max-content;
}
.testi-track:hover { animation-play-state: paused; }
.testi-track.rev {
  animation: tscrollR 50s linear infinite;
}
.testi-track.rev:hover { animation-play-state: paused; }
@keyframes tscroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes tscrollR {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
──────────────────────────────────────────────────────────────────────────── */

const ROW1 = [
  { init: 'R', name: 'Rajesh Meena, 52',  cond: 'Paralysis Recovery',  loc: 'Udaipur Branch',      q: "After 2 years of paralysis, Dr. Piyush's team got me walking in 4 months. I came in on a stretcher and walked out on my own two feet." },
  { init: 'N', name: 'Neha Joshi, 38',    cond: 'Back Pain Relief',    loc: 'Udaipur Branch',      q: "Eight years of chronic back pain resolved in 6 weeks. The IFT and spinal traction combination worked when everything else had failed me." },
  { init: 'A', name: 'Amit Rathore, 24',  cond: 'Sports Injury',       loc: 'Ahmedabad Branch',    q: "As a national-level athlete, ACL injuries mean career end. JK Physio proved everyone wrong. Back on the field in 5 months, stronger than before." },
  { init: 'P', name: 'Pradeep Sharma',    cond: 'Stroke Recovery',     loc: 'Chittorgarh Branch',  q: "My mother's stroke left her bedridden. The team's dedication over 5 months brought her back to cooking and walking independently. Forever grateful." },
  { init: 'S', name: 'Sunita Agarwal, 45',cond: 'Spine Therapy',       loc: 'Bhilwara Branch',     q: "Spine surgery failed me twice. JK Physio's approach gave me a life without pain. I drive, walk, and live normally again." },
  { init: 'V', name: 'Vijay Patel, 61',   cond: 'Post-Surgery Rehab',  loc: 'Ahmedabad Branch',    q: "Post knee replacement I was told recovery takes a year. JK Physio's protocol had me walking confidently in 3 months. Exceptional." },
];

const ROW2 = [
  { init: 'K', name: 'Kavita Singh, 42',  cond: 'Cervical Spondylosis', loc: 'Chittorgarh Branch', q: "Dr. Piyush treated my cervical spondylosis with such precision. No surgery needed. Pure physiotherapy excellence transformed my life." },
  { init: 'M', name: 'Mukesh Gupta, 55',  cond: 'Frozen Shoulder',      loc: 'Bhilwara Branch',    q: "Frozen shoulder for 18 months. Tried everywhere. JK Physio resolved it in 8 sessions. The ultrasound and manual therapy is unmatched." },
  { init: 'D', name: 'Deepak Verma, 35',  cond: 'Gym & Fitness',        loc: 'Udaipur Branch',     q: "The gym at JK Physio is world-class. Combined with Dr. Piyush's program, I lost 18 kg and regained full mobility in just 4 months." },
  { init: 'Y', name: 'Yash Trivedi, 22',  cond: 'Sports Injury',        loc: 'Udaipur Branch',     q: "Cricket injury sidelined me. JK Physio's sports rehab was world-class. Back on the pitch in record time, better than ever before." },
  { init: 'G', name: 'Geeta Patel, 60',   cond: 'Knee Rehabilitation',  loc: 'Ahmedabad Branch',   q: "Knee osteoarthritis at 60 felt like a death sentence. JK Physio's laser and manual therapy gave me back my full independence." },
  { init: 'H', name: 'Harshit Shah',      cond: 'Neuro Rehabilitation', loc: 'Ahmedabad Branch',   q: "My father's Parkinson's mobility improved significantly within 3 months. The gait training program at JK Physio is truly exceptional." },
];

const TCard = ({ t }) => (
  <div
    style={{
      minWidth: '360px', maxWidth: '360px',
      background: '#fff',
      border: '1px solid #E5E7EB',
      borderRadius: '12px',
      padding: '28px',
      flexShrink: 0,
      transition: 'border-color .4s, box-shadow .4s, transform .4s',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = '#C8001E';
      e.currentTarget.style.boxShadow = '0 16px 50px rgba(200,0,30,.08)';
      e.currentTarget.style.transform = 'translateY(-6px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = '#E5E7EB';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    {/* Stars */}
    <div style={{ color: '#f59e0b', fontSize: '.75rem', letterSpacing: '2px', marginBottom: '12px' }}>
      ★★★★★
    </div>

    {/* Quote */}
    <p style={{
      fontSize: '.88rem', fontWeight: 300, color: '#555',
      lineHeight: 1.75, fontStyle: 'Italic', marginBottom: '18px',
      fontFamily: "'Montesserat",
    }}>
      "{t.q}"
    </p>

    {/* Author */}
    <div style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      paddingTop: '16px', borderTop: '1px solid #E5E7EB',
    }}>
      <div style={{
        width: '40px', height: '40px', borderRadius: '50%',
        background: 'linear-gradient(135deg, #C8001E, #7b0010)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '.9rem', fontWeight: 700, color: '#fff', flexShrink: 0,
        fontFamily: "'Montesserat",
      }}>
        {t.init}
      </div>
      <div>
        <div style={{ fontSize: '.82rem', fontWeight: 700, color: '#2a2a2a', fontFamily: "'Montesserat" }}>
          {t.name}
        </div>
        <div style={{ fontSize: '.7rem', color: '#C8001E', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px', fontFamily: "'Poppins', sans-serif" }}>
          {t.cond}
        </div>
        <div style={{ fontSize: '.7rem', color: '#888', fontFamily: "'Montesserat" }}>
          {t.loc}
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA', fontFamily: "'Montesserat" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div style={{ padding: '100px 5% 60px' }}>

       {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-brand text-sm font-semibold mb-8 bg-white/70 px-4 py-2 rounded-full border border-red-100 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            
          
    
        </button>

        {/* Split heading */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px',
          alignItems: 'end',
          marginBottom: '0',
        }}>
          {/* Left */}
          <div>
            {/* sec-label */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              fontSize: '.68rem', fontWeight: 700, letterSpacing: '5px',
              textTransform: 'uppercase', color: '#C8001E', marginBottom: '14px',
            }}>
              <span style={{ width: '24px', height: '2px', background: '#C8001E', display: 'block' }} />
              Patient Stories
            </div>

            {/* sec-h2 */}
            <h1 style={{
              fontFamily: "'Montesserat",
              fontSize: 'clamp(2rem, 4vw, 3.8rem)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-.5px', color: '#0F0F0F',
              margin: 0,
            }}>
              What Our{' '}
              <span style={{ color: '#C8001E', fontStyle: 'Montesserat' }}>Patients Say</span>
            </h1>
          </div>

          {/* Right */}
          <div>
            <p style={{
              fontSize: '1rem', fontWeight: 300, color: '#555',
              lineHeight: 1.9, maxWidth: '540px', margin: '0 0 28px',
            }}>
              Real stories from real patients across our 4 branches — their journeys
              from pain to performance inspire everything we do.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '36px',
              paddingTop: '24px', borderTop: '1px solid #E5E7EB',
            }}>
              {[['10000+', 'Patients Treated'], ['95%', 'Recovery Rate'], ['4.9 ★', 'Avg Rating'], ['16+', 'Years Experience']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Montesserat", fontSize: '1.8rem', fontWeight: 700, color: '#0F0F0F', lineHeight: 1 }}>
                    {num}
                  </div>
                  <div style={{ fontSize: '.68rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#888', marginTop: '4px' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Carousel rows ────────────────────────────────────── */}
      <div style={{ paddingBottom: '100px' }}>

        {/* Row 1 — scrolls left */}
        <div className="testi-carousel-wrap">
          <div className="testi-track">
            {[...ROW1, ...ROW1].map((t, i) => <TCard key={i} t={t} />)}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="testi-carousel-wrap" style={{ marginTop: '24px' }}>
          <div className="testi-track rev">
            {[...ROW2, ...ROW2].map((t, i) => <TCard key={i} t={t} />)}
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────── */}
        <div style={{ padding: '0 5%', marginTop: '80px' }}>
          <div style={{
            position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(135deg, #0F0F0F, #2a0a0a)',
            borderRadius: '16px', padding: '80px 5%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '60px', alignItems: 'center',
          }}>
            {/* Glow blob */}
            <div style={{
              position: 'absolute', right: '-5%', top: '-50%',
              width: '500px', height: '500px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200,0,30,.12), transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative' }}>
              {/* sec-label white */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                fontSize: '.68rem', fontWeight: 700, letterSpacing: '5px',
                textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: '14px',
              }}>
                <span style={{ width: '24px', height: '2px', background: 'rgba(255,255,255,.4)', display: 'block' }} />
                Start Your Journey
              </div>
              <h3 style={{
                fontFamily: "'Montesserat",
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: '0 0 12px',
              }}>
                Ready to Write Your<br />
                <span style={{ color: '#C8001E', fontStyle: 'Montesserat' }}>Success Story?</span>
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 300, color: 'rgba(255,255,255,.55)', lineHeight: 1.8, maxWidth: '500px' }}>
                Join thousands of patients who have restored their movement and reclaimed their lives across our 6 branches.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '28px' }}>
                {['Free Initial Consultation', 'Same-Day Appointments'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '.82rem', color: 'rgba(255,255,255,.6)' }}>
                    <span style={{ color: '#C8001E', fontSize: '1rem' }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <button
                onClick={() => navigate('/#contact')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  fontSize: '.78rem', fontWeight: 700, letterSpacing: '1.5px',
                  textTransform: 'uppercase', padding: '18px 40px',
                  background: '#C8001E', color: '#fff', border: '2px solid #C8001E',
                  borderRadius: '4px', cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(200,0,30,.3)',
                  transition: 'all .35s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'inset 0 0 0 2px #fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#C8001E'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(200,0,30,.3)'; }}
              >
                Book a Consultation →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
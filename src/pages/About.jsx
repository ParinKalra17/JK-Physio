import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ─── DATA ─────────────────────────────────────────────────── */
const whoItems = [
  {
    icon: 'fas fa-microscope',
    title: 'Evidence-Based Practice',
    desc: 'Every treatment protocol is grounded in the latest clinical research and proven methodologies.',
  },
  {
    icon: 'fas fa-microchip',
    title: 'Advanced Technology',
    desc: 'World-class rehabilitation equipment including FES, Laser, IFT, and Gait Training systems.',
  },
  {
    icon: 'fas fa-heart-pulse',
    title: 'Patient-First Philosophy',
    desc: 'Personalised care plans crafted around each patient\'s unique goals and recovery pace.',
  },
];

const whyItems = [
  {
    num: '01',
    title: 'We Listen to You First',
    desc: 'Every patient is unique. We prioritise understanding your specific needs, concerns, and goals before designing your treatment plan.',
  },
  {
    num: '02',
    title: 'Pioneer in Modern Rehabilitation',
    desc: 'We lead Rajasthan in adopting advanced rehabilitation technologies and innovative treatment approaches.',
  },
  {
    num: '03',
    title: 'Expert Team of Specialists',
    desc: 'Led by Dr. Piyush Devpura with 16+ years experience — individually strong, unstoppable together for your results.',
  },
  {
    num: '04',
    title: 'Proven, Measurable Outcomes',
    desc: '98% recovery success rate across 10,000+ patients — not just promises, but transformation backed by clinical data.',
  },
];

const stats = [
  { icon: 'fas fa-users', id: 'st1', target: 10000, suffix: '+', label: 'Patients Treated' },
  { icon: 'fas fa-chart-line', id: 'st2', target: 98, suffix: '%', label: 'Recovery Success Rate', gold: true },
  { icon: 'fas fa-trophy', id: 'st3', target: 15, suffix: '+', label: 'Years Experience' },
  { icon: 'fas fa-map-marker-alt', id: 'st4', target: 4, suffix: '+', label: 'City Branches' },
];

const machines = [
  { icon: 'fas fa-bolt', title: 'IFT & Ultrasound Therapy', desc: 'Deep tissue healing using interferential current and high-frequency sound waves to reduce inflammation and accelerate tissue repair.' },
  { icon: 'fas fa-microchip', title: 'FES & TENS Therapy', desc: 'Functional electrical stimulation and transcutaneous nerve stimulation for neurological recovery and pain management.' },
  { icon: 'fas fa-walking', title: 'Gait Trainer System', desc: 'Robotic-assisted gait retraining for patients with mobility impairments, enabling safe and progressive walking rehabilitation.' },
  { icon: 'fas fa-sun', title: 'Laser Therapy', desc: 'Low-level laser therapy (LLLT) promotes cellular regeneration, reduces swelling, and fast-tracks recovery from injuries.' },
  { icon: 'fas fa-arrows-alt-v', title: 'Spinal Decompression', desc: 'Motorised traction to decompress the spine, relieve nerve impingement, and treat herniated discs non-surgically.' },
  { icon: 'fas fa-dumbbell', title: 'Therapeutic Gym', desc: 'State-of-the-art gym with therapeutic supervision for strength building and complete fitness transformation.' },
];

const marqueeItems = [
  'Paralysis Rehabilitation', 'Stroke Recovery', 'Back Pain Relief',
  'Sports Injury Rehab', 'Post-Surgery Physio', 'Slip Disc Treatment',
  'Gym & Fitness', '16+ Years Experience', '4 City Branches', '10,000+ Patients Healed',
];

/* ─── COMPONENT ─────────────────────────────────────────────── */
const AboutPage = () => {
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const statsDone = useRef(false);
  const [counts, setCounts] = useState({ st1: 0, st2: 0, st3: 0, st4: 0 });

  /* Scroll-reveal */
  useEffect(() => {
    window.scrollTo(0, 0);

    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('sr-vis'); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-sr]').forEach(el => io.observe(el));

    /* Stats counter */
    const statsIo = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !statsDone.current) {
        statsDone.current = true;
        stats.forEach(({ id, target }) => {
          let v = 0;
          const step = target / (1500 / 16);
          const t = setInterval(() => {
            v = Math.min(v + step, target);
            setCounts(c => ({ ...c, [id]: Math.floor(v) }));
            if (v >= target) clearInterval(t);
          }, 16);
        });
      }
    }, { threshold: 0.4 });
    if (statsRef.current) statsIo.observe(statsRef.current);

    return () => { io.disconnect(); statsIo.disconnect(); };
  }, []);

  return (
    <>
      {/* ── FONTS & ICONS ── */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

      <style>{`
        :root {
          --red:   #C8001E;
          --red2:  #E30019;
          --red-l: #fff0f2;
          --red-m: #ffd6db;
          --gold:  #B8851A;
          --gold-l:#FEF3DC;
          --dark:  #0F0F0F;
          --dark2: #1a1a1a;
          --txt:   #2a2a2a;
          --txt2:  #555;
          --txt3:  #888;
          --off:   #FAFAFA;
          --light: #F3F4F6;
          --bdr:   #E5E7EB;
          --ease:  cubic-bezier(.19,1,.22,1);
        }
        .about-page { font-family:'Poppins',sans-serif; color:var(--txt); overflow-x:hidden; }
        .about-page * { box-sizing:border-box; }

        /* ── SCROLL REVEAL ── */
        [data-sr] { opacity:0; transition: opacity .85s var(--ease), transform .85s var(--ease); }
        [data-sr="up"]    { transform:translateY(50px); }
        [data-sr="left"]  { transform:translateX(-50px); }
        [data-sr="right"] { transform:translateX(50px); }
        [data-sr="zoom"]  { transform:scale(.94); }
        [data-sr].sr-vis  { opacity:1; transform:none; }

        /* ── SECTION COMMON ── */
        .ap-sec { padding:100px 5%; }
        .sec-label {
          display:inline-flex; align-items:center; gap:10px;
          font-size:.68rem; font-weight:700; letter-spacing:5px;
          text-transform:uppercase; color:var(--red); margin-bottom:14px;
        }
        .sec-label .ln { width:24px; height:2px; background:var(--red); flex-shrink:0; }
        .sec-h2 {
          font-family:'Playfair Display',serif;
          font-size:clamp(2rem,4vw,3.2rem);
          font-weight:700; line-height:1.15; letter-spacing:-.5px; color:var(--dark);
        }
        .sec-h2 span { color:var(--red); font-style:italic; }
        .sec-p { font-size:.95rem; font-weight:300; color:var(--txt2); line-height:1.9; margin-top:14px; }

        /* ── HERO ── */
        .ab-hero {
          background: linear-gradient(135deg,#0F0F0F 0%,#1a0609 100%);
          padding: 120px 5% 80px; position:relative; overflow:hidden;
        }
        .ab-hero::before {
          content:''; position:absolute; top:-80px; right:-80px;
          width:520px; height:520px; border-radius:50%;
          background:radial-gradient(circle,rgba(200,0,30,.09),transparent 70%);
          pointer-events:none;
        }
        .ab-hero::after {
          content:''; position:absolute; bottom:-60px; left:-60px;
          width:340px; height:340px; border-radius:50%;
          background:radial-gradient(circle,rgba(184,133,26,.06),transparent 70%);
          pointer-events:none;
        }
        .ab-eyebrow {
          display:inline-flex; align-items:center; gap:10px;
          font-size:.7rem; font-weight:600; letter-spacing:5px; text-transform:uppercase;
          color:rgba(255,255,255,.6); margin-bottom:20px;
        }
        .ab-eyebrow .dot { width:6px; height:6px; border-radius:50%; background:var(--red); }
        .ab-hero h1 {
          font-family:'Playfair Display',serif;
          font-size:clamp(2.6rem,5vw,4.8rem); font-weight:700;
          color:#fff; line-height:1.1; letter-spacing:-.5px;
        }
        .ab-hero h1 span { color:var(--red); font-style:italic; }
        .ab-hero p { font-size:1rem; font-weight:300; color:rgba(255,255,255,.6); line-height:1.8; max-width:560px; margin:20px 0 0; }
        .ab-stats { display:flex; flex-wrap:wrap; gap:40px 60px; margin-top:60px; padding-top:50px; border-top:1px solid rgba(255,255,255,.08); }
        .ab-stat-num { font-family:'Playfair Display',serif; font-size:2.4rem; font-weight:700; color:#fff; }
        .ab-stat-lbl { font-size:.7rem; font-weight:400; color:rgba(255,255,255,.4); letter-spacing:2px; text-transform:uppercase; margin-top:2px; }

        /* ── MARQUEE ── */
        .mq-band { background:var(--red); overflow:hidden; padding:15px 0; }
        .mq-inner { display:flex; white-space:nowrap; animation:mq 28s linear infinite; gap:0; }
        .mq-inner span { font-size:.72rem; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:rgba(255,255,255,.85); padding:0 28px; }
        .mq-inner .sep { color:rgba(255,255,255,.35); padding:0 4px; }
        @keyframes mq { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        /* ── WHO WE ARE ── */
        .who-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .who-img-wrap {
          position:relative; border-radius:8px; overflow:hidden; cursor:pointer;
          aspect-ratio:4/3;
          background:linear-gradient(135deg,#f5f5f5,#fff);
        }
        .who-img-wrap:hover .who-img { transform:scale(1.04); }
        .who-img { width:100%; height:100%; object-fit:cover; object-position:top center; transition:transform .6s; display:block; }
        .who-img-placeholder {
          width:100%; height:100%; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(135deg,#f9f0f1,#fff5f6);
          font-size:4rem; color:var(--red); opacity:.3;
        }
        .play-btn {
          position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
          width:72px; height:72px; border-radius:50%; background:var(--red);
          display:flex; align-items:center; justify-content:center;
          font-size:1.3rem; color:#fff;
          box-shadow:0 0 0 0 rgba(200,0,30,.5);
          animation:playP 2.5s infinite; transition:transform .3s;
        }
        .who-img-wrap:hover .play-btn { transform:translate(-50%,-50%) scale(1.1); }
        @keyframes playP { 0%,100%{box-shadow:0 0 0 0 rgba(200,0,30,.5)} 70%{box-shadow:0 0 0 22px rgba(200,0,30,0)} }
        .vid-badge {
          position:absolute; top:20px; left:20px;
          background:rgba(10,10,10,.75); backdrop-filter:blur(10px);
          color:#fff; padding:8px 16px; border-radius:4px;
          font-size:.68rem; font-weight:600; letter-spacing:2px; text-transform:uppercase;
          border-left:3px solid var(--red);
        }
        .who-quote {
          font-family:'Playfair Display',serif;
          font-size:1.35rem; font-style:italic; font-weight:400;
          color:var(--txt2); line-height:1.6;
          border-left:3px solid var(--red); padding-left:24px;
          margin:28px 0 28px;
        }
        .who-list { display:flex; flex-direction:column; gap:14px; }
        .who-item {
          display:flex; gap:14px; align-items:flex-start;
          padding:16px; border:1px solid var(--bdr); border-radius:8px;
          transition:all .35s;
        }
        .who-item:hover { border-color:var(--red-m); background:var(--red-l); transform:translateX(6px); }
        .wi-icon {
          width:40px; height:40px; border-radius:8px;
          background:var(--red-l); display:flex; align-items:center; justify-content:center;
          color:var(--red); font-size:1rem; flex-shrink:0; transition:all .3s;
        }
        .who-item:hover .wi-icon { background:var(--red); color:#fff; }
        .wi-title { font-size:.88rem; font-weight:700; color:var(--txt); margin-bottom:3px; }
        .wi-desc  { font-size:.78rem; font-weight:300; color:var(--txt3); line-height:1.5; }

        /* ── WHY CHOOSE US ── */
        .why-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .why-img-wrap {
          position:relative; border-radius:8px; overflow:hidden;
        }
        .why-corner {
          position:absolute; top:-16px; left:-16px;
          width:100px; height:100px; border-radius:4px;
          border:2px solid var(--red); opacity:.15; z-index:0;
        }
        .why-img {
  position:relative; z-index:1;
  width:100%; border-radius:8px; display:block;
  aspect-ratio:3/4; object-fit:cover; object-position:top;
        }
        .why-floater {
          position:absolute; bottom:-24px; right:-24px; z-index:2;
          background:var(--red); color:#fff; border-radius:8px; padding:22px 26px;
          text-align:center; box-shadow:0 12px 40px rgba(200,0,30,.35);
        }
        .wf-num { font-family:'Playfair Display',serif; font-size:2.2rem; font-weight:700; }
        .wf-text { font-size:.68rem; font-weight:500; letter-spacing:2px; text-transform:uppercase; opacity:.8; margin-top:4px; }
        .why-item {
          display:flex; gap:20px; align-items:flex-start;
          padding:18px; border:1px solid var(--bdr); border-radius:8px;
          margin-bottom:12px; transition:all .35s;
        }
        .why-item:hover { border-color:var(--red-m); background:var(--red-l); }
        .wyi-num { font-family:'Playfair Display',serif; font-size:1.8rem; font-weight:700; color:rgba(200,0,30,.18); flex-shrink:0; line-height:1; }
        .wyi-title { font-size:.9rem; font-weight:700; color:var(--txt); margin-bottom:4px; }
        .wyi-desc  { font-size:.78rem; font-weight:300; color:var(--txt3); line-height:1.55; }

        /* ── STATS DARK ── */
        .stats-dark { background:var(--dark); }
        .stats-row {
          display:grid; grid-template-columns:repeat(4,1fr);
        }
        .stat-box {
          padding:60px 5%; border-right:1px solid rgba(255,255,255,.06);
          text-align:center;
        }
        .stat-box:last-child { border-right:none; }
        .stat-n {
          font-family:'Playfair Display',serif;
          font-size:3.2rem; font-weight:700; color:#fff; line-height:1;
        }
        .stat-n .plus { font-size:2rem; color:var(--red); }
        .stat-n .gold { color:var(--gold) !important; }
        .stat-l { font-size:.72rem; font-weight:400; color:rgba(255,255,255,.35); letter-spacing:2px; text-transform:uppercase; margin-top:10px; }

        /* ── SPEC GRID ── */
        .spec-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .spec-card {
          position:relative; border-radius:8px; overflow:hidden;
          height:260px; cursor:pointer;
          background:var(--light);
        }
        .spec-bg {
          position:absolute; inset:0;
          background:linear-gradient(135deg,var(--red-l),#fff);
          transition:transform .6s var(--ease);
        }
        .spec-card:hover .spec-bg { transform:scale(1.06); }
        .spec-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top, rgba(10,10,10,.82) 0%, rgba(10,10,10,.2) 60%, transparent 100%);
          transition:opacity .4s;
        }
        .spec-icon-bg {
          position:absolute; top:50%; left:50%; transform:translate(-50%,-60%);
          font-size:5rem; color:var(--red); opacity:.12;
          transition:opacity .4s, transform .4s;
        }
        .spec-card:hover .spec-icon-bg { opacity:.2; transform:translate(-50%,-55%) scale(1.1); }
        .spec-body {
          position:absolute; bottom:0; left:0; right:0; padding:24px 22px;
        }
        .spec-title { font-size:.92rem; font-weight:700; color:#fff; margin-bottom:8px; }
        .spec-link {
          font-size:.7rem; font-weight:600; letter-spacing:2px; text-transform:uppercase;
          color:var(--red); opacity:0; transform:translateY(6px); transition:all .35s;
        }
        .spec-card:hover .spec-link { opacity:1; transform:translateY(0); }

        /* ── BUTTONS ── */
        .btn-red {
          display:inline-flex; align-items:center; gap:10px;
          font-size:.78rem; font-weight:700; letter-spacing:1.5px; text-transform:uppercase;
          padding:14px 32px; background:var(--red); color:#fff; border-radius:4px;
          border:none; cursor:pointer; transition:all .35s; font-family:'Poppins',sans-serif;
          border:2px solid var(--red); text-decoration:none;
        }
        .btn-red:hover { background:var(--dark); border-color:var(--dark); box-shadow:0 8px 28px rgba(0,0,0,.2); }
        .btn-outline {
          display:inline-flex; align-items:center; gap:10px;
          font-size:.78rem; font-weight:700; letter-spacing:1.5px; text-transform:uppercase;
          padding:14px 32px; background:transparent; color:var(--red);
          border:2px solid var(--red); border-radius:4px; cursor:pointer;
          transition:all .35s; font-family:'Poppins',sans-serif; text-decoration:none;
        }
        .btn-outline:hover { background:var(--red); color:#fff; }

        /* ── CTA DARK ── */
        .cta-dark {
          background:linear-gradient(135deg,var(--dark),#2a0a0a);
          padding:90px 5%; position:relative; overflow:hidden;
          display:grid; grid-template-columns:1fr auto; gap:60px; align-items:center;
        }
        .cta-dark::before {
          content:''; position:absolute; right:-5%; top:-50%;
          width:500px; height:500px; border-radius:50%;
          background:radial-gradient(circle,rgba(200,0,30,.1),transparent 70%);
        }
        .cta-title { font-family:'Playfair Display',serif; font-size:2.6rem; font-weight:700; color:#fff; line-height:1.2; }
        .cta-title span { color:var(--red); font-style:italic; }
        .cta-sub { font-size:.95rem; font-weight:300; color:rgba(255,255,255,.45); margin-top:12px; line-height:1.8; max-width:480px; }
        .cta-btns { display:flex; gap:14px; flex-wrap:wrap; position:relative; z-index:1; }

        /* ── RESPONSIVE ── */
        @media(max-width:900px){
          .who-grid,.why-grid,.cta-dark { grid-template-columns:1fr; }
          .stats-row { grid-template-columns:1fr 1fr; }
          .spec-grid { grid-template-columns:1fr 1fr; }
          .stat-box { border-right:none; border-bottom:1px solid rgba(255,255,255,.06); }
          .why-floater { right:16px; bottom:-16px; }
          .cta-dark { grid-template-columns:1fr; }
        }
        @media(max-width:600px){
          .spec-grid { grid-template-columns:1fr; }
          .stats-row { grid-template-columns:1fr; }
          .ab-hero { padding:100px 6% 70px; }
          .ap-sec { padding:72px 6%; }
        }
      `}</style>

      <div className="about-page">

        {/* ── HERO ── */}
        <section className="ab-hero">
          <div style={{ maxWidth: 900, position: 'relative', zIndex: 1 }}>
            <div className="ab-eyebrow" data-sr="up">
              <div className="dot" />
              About JK Physiotherapy &amp; Rehab
            </div>
            <h1 data-sr="up" style={{ transitionDelay: '.1s' }}>
              Healing Centred<br /><span>on You</span>
            </h1>
            <p data-sr="up" style={{ transitionDelay: '.2s' }}>
              Learn about our mission, philosophy, and the team behind JK Physiotherapy &amp; Rehab — Rajasthan's most trusted rehabilitation centre.
            </p>
            <div className="ab-stats" data-sr="up" style={{ transitionDelay: '.35s' }}>
              {[['15+', 'Years of Excellence'], ['80+', 'Specialist Therapists'], ['10,000+', 'Lives Changed'], ['98%', 'Success Rate']].map(([n, l]) => (
                <div key={l}>
                  <div className="ab-stat-num">{n}</div>
                  <div className="ab-stat-lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="mq-band">
          <div className="mq-inner">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i}>{i % 1 === 0 && i > 0 ? '' : ''}{item}<span className="sep" style={{ padding: '0 8px', color: 'rgba(255,255,255,.3)' }}>✦</span></span>
            ))}
          </div>
        </div>

        {/* ── WHO WE ARE ── */}
        <section className="ap-sec" style={{ background: '#fff' }}>
          <div className="who-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Left – image */}
            <div data-sr="left">
              <div className="who-img-wrap">
                <div className="who-img-placeholder">
                  <i className="fas fa-user-md" />
                </div>
                <div className="vid-badge">▶ Watch Our Story</div>
                <div className="play-btn">
                  <i className="fas fa-play" style={{ marginLeft: 3 }} />
                </div>
              </div>
            </div>

            {/* Right – content */}
            <div data-sr="right">
              <div className="sec-label"><span className="ln" />Who Are We?</div>
              <h2 className="sec-h2">JK Physio &amp; Rehab —<br /><span>Transforming Lives</span> Since 2008</h2>
              <blockquote className="who-quote">
                "Every patient who walks through our doors carries a story. Our mission is to help them write a better chapter."
                <small style={{ fontSize: '.75rem', fontStyle: 'normal', color: 'var(--txt3)', marginTop: 8, display: 'block' }}>— Dr. Piyush Devpura, Founder</small>
              </blockquote>
              <p className="sec-p" style={{ marginTop: 0, marginBottom: 28 }}>
                JK Physio is Udaipur's premier physiotherapy and rehabilitation centre, now spanning 4 cities across Rajasthan and Gujarat. Led by Dr. Piyush Devpura with 16+ years of expertise, we combine advanced technology with compassionate, evidence-based care to help patients reclaim their lives.
              </p>
              <div className="who-list">
                {whoItems.map(item => (
                  <div className="who-item" key={item.title}>
                    <div className="wi-icon"><i className={item.icon} /></div>
                    <div>
                      <div className="wi-title">{item.title}</div>
                      <div className="wi-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-red" style={{ marginTop: 28 }} onClick={() => navigate('/#contact')}>
                <i className="fas fa-calendar-check" /> Book Consultation
              </button>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
<section className="ap-sec" style={{ background:'var(--off)' }}>
  <div className="why-grid" style={{ maxWidth:1200, margin:'0 auto' }}>

    {/* Left – doctor photo */}
    <div data-sr="left" style={{ position:'relative', paddingBottom:32, paddingRight:32 }}>
      {/* Red corner accent */}
      <div style={{
        position:'absolute', top:-16, left:-16,
        width:100, height:100, zIndex:0,
        border:'2px solid #C8001E', borderRadius:4, opacity:.2,
      }} />

      <img  src="dr-piyush.jpeg"
      alt="Dr. Piyush Devpura"
      style={{
    position:'relative', zIndex:1,
    width:'100%', display:'block',
    borderRadius:'8px',
    objectFit:'cover',
    objectPosition:'top center',
    aspectRatio:'3/4',
    boxShadow:'0 20px 60px rgba(0,0,0,0.15)',
  }}
/>

      {/* Floating badge */}
      <div style={{
        position:'absolute', bottom:-24, right:-24, zIndex:2,
        background:'#C8001E', color:'#fff',
        borderRadius:'8px', padding:'22px 26px',
        textAlign:'center',
        boxShadow:'0 12px 40px rgba(200,0,30,.35)',
      }}>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'2.2rem', fontWeight:700 }}>16+</div>
        <div style={{ fontSize:'.68rem', fontWeight:500, letterSpacing:'2px', textTransform:'uppercase', opacity:.8, marginTop:4 }}>
          Years of<br />Excellence
        </div>
      </div>
    </div>

    {/* Right – numbered list */}
    <div data-sr="right">
      <div className="sec-label"><span className="ln" />Why Choose Us?</div>
      <h2 className="sec-h2">Your Ultimate Partner<br />in <span>Recovery</span></h2>
      <p className="sec-p" style={{ marginBottom:32 }}>
        Your success in rehabilitation depends on choosing the right partner. Here's why thousands trust JK Physio.
      </p>
      {whyItems.map(item => (
        <div className="why-item" key={item.num}>
          <div className="wyi-num">{item.num}</div>
          <div>
            <div className="wyi-title">{item.title}</div>
            <div className="wyi-desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

        {/* ── STATS DARK ── */}
        <section className="stats-dark" ref={statsRef}>
          <div className="stats-row">
            {stats.map((s, i) => (
              <div className="stat-box" key={s.id} data-sr="up" style={{ transitionDelay: `${i * 0.07}s` }}>
                <i className={s.icon} style={{ fontSize: '2rem', color: 'rgba(255,255,255,.2)', marginBottom: 16, display: 'block' }} />
                <div className="stat-n">
                  <span>{counts[s.id].toLocaleString()}</span>
                  <span className={`plus ${s.gold ? 'gold' : ''}`}>{s.suffix}</span>
                </div>
                <div className="stat-l">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TECHNOLOGY / EQUIPMENT ── */}
        <section className="ap-sec" style={{ background: 'var(--off)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
              <div data-sr="left">
                <div className="sec-label"><span className="ln" />Advanced Technology</div>
                <h2 className="sec-h2">World-Class <span>Equipment</span></h2>
              </div>
              <p className="sec-p" data-sr="right">
                Our clinic is equipped with cutting-edge physiotherapy technology — making JK Physio the most technologically advanced rehabilitation centre in Rajasthan.
              </p>
            </div>

            <div className="spec-grid">
              {machines.map((m, i) => (
                <div className="spec-card" key={m.title} data-sr="zoom" style={{ transitionDelay: `${0.05 * (i + 1)}s` }}>
                  <div className="spec-bg" />
                  <div className="spec-overlay" />
                  <i className={`${m.icon} spec-icon-bg`} />
                  <div className="spec-body">
                    <div className="spec-title">{m.title}</div>
                    <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.5, marginBottom: 8 }}>{m.desc}</div>
                    <div className="spec-link"><i className="fas fa-arrow-right" /> Learn More</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-dark">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="sec-label" style={{ color: 'rgba(255,255,255,.4)' }}>
              <span className="ln" style={{ background: 'rgba(255,255,255,.2)' }} />
              Begin Your Journey
            </div>
            <h2 className="cta-title">
              Ready to Begin Your <span>Recovery?</span>
            </h2>
            <p className="cta-sub">
              Meet our team and start your personalised rehabilitation journey today. World-class care, closer than ever.
            </p>
          </div>
          <div className="cta-btns">
            <button className="btn-red" onClick={() => navigate('/doctors')}>
              <i className="fas fa-user-md" /> Meet Our Doctors
            </button>
            <button className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}
              onClick={() => navigate('/#contact')}>
              <i className="fas fa-calendar-check" /> Book Appointment
            </button>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutPage;
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/* ─── DATA ─────────────────────────────────────────── */
const technologies = [
  {
    id: 'ift-ultrasound',
    icon: '⚡',
    faIcon: 'fas fa-bolt',
    title: 'IFT & Ultrasound Therapy',
    shortDesc: 'Deep tissue electrical stimulation and therapeutic ultrasound for pain relief and tissue healing.',
    tag: 'Pain Relief',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `Interferential Therapy (IFT) and Ultrasound Therapy are two of the most powerful non-invasive physiotherapy modalities used at JK Physio. Together, they form a comprehensive approach to managing acute and chronic pain, reducing inflammation, and accelerating tissue repair.`,
      howItWorks: `IFT uses medium-frequency electrical currents that cross within the tissue, creating a low-frequency therapeutic effect deep within muscles and joints. This stimulates nerve fibres, improves blood circulation, and triggers the release of natural pain-relieving endorphins.\n\nTherapeutic Ultrasound delivers high-frequency sound waves into the tissue, creating a micro-massage effect at the cellular level. It increases tissue extensibility, promotes collagen production, and speeds up the healing of soft tissue injuries.`,
      conditions: [
        'Chronic back and neck pain',
        'Arthritis and joint inflammation',
        'Muscle spasms and cramps',
        'Ligament sprains and strains',
        'Post-surgical swelling',
        'Frozen shoulder',
        'Tennis/Golfer\'s elbow',
        'Soft tissue injuries',
      ],
      benefits: [
        { title: 'Non-Invasive', desc: 'No injections or surgery — completely safe and painless.' },
        { title: 'Fast Relief', desc: 'Most patients feel significant pain relief within 2–3 sessions.' },
        { title: 'Deep Penetration', desc: 'Reaches muscles and joints up to 5cm deep for targeted therapy.' },
        { title: 'Reduces Swelling', desc: 'Promotes lymphatic drainage and reduces inflammatory response.' },
      ],
      sessions: '6–12 sessions recommended',
      duration: '20–40 minutes per session',
    },
  },
  {
    id: 'fes-tens',
    icon: '🔬',
    faIcon: 'fas fa-microchip',
    title: 'FES & TENS Therapy',
    shortDesc: 'Functional Electrical Stimulation and Transcutaneous Electrical Nerve Stimulation for nerve and muscle recovery.',
    tag: 'Neuro Rehab',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `FES (Functional Electrical Stimulation) and TENS (Transcutaneous Electrical Nerve Stimulation) are advanced electrotherapy techniques that play a crucial role in neurological rehabilitation and pain management at JK Physio. These are particularly transformative for patients recovering from stroke, paralysis, and nerve damage.`,
      howItWorks: `FES uses carefully calibrated electrical pulses to stimulate paralyzed or weakened muscles, causing them to contract in a functional pattern. This re-trains the neuromuscular system, helping the brain re-learn movement patterns lost due to stroke or spinal injury.\n\nTENS works by sending gentle electrical impulses through the skin to the nerve fibres, which effectively "gates" the pain signal before it reaches the brain — providing immediate, drug-free pain relief.`,
      conditions: [
        'Stroke and hemiplegia',
        'Spinal cord injuries',
        'Foot drop correction',
        'Muscle weakness and atrophy',
        'Nerve damage (neuropathy)',
        'Chronic pain conditions',
        'Post-surgical pain management',
        'Parkinson\'s gait improvement',
      ],
      benefits: [
        { title: 'Muscle Re-education', desc: 'Reactivates dormant muscles after neurological injury.' },
        { title: 'Drug-Free Pain Relief', desc: 'Provides immediate pain control without medication.' },
        { title: 'Prevents Atrophy', desc: 'Keeps muscles active even when voluntary movement is limited.' },
        { title: 'Neuroplasticity', desc: 'Promotes brain rewiring for long-term recovery from stroke.' },
      ],
      sessions: '10–20 sessions recommended',
      duration: '30–45 minutes per session',
    },
  },
  {
    id: 'gait-trainer',
    icon: '🚶',
    faIcon: 'fas fa-walking',
    title: 'Gait Trainer System',
    shortDesc: 'Robotic-assisted walking rehabilitation system for neurological and orthopaedic patients.',
    tag: 'Mobility',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `The Gait Trainer System at JK Physio is one of the most advanced rehabilitation tools in Rajasthan. It provides body-weight-supported treadmill training combined with robotic assistance, enabling patients who cannot walk independently to practice the full gait cycle safely and effectively.`,
      howItWorks: `The patient is supported by a harness that partially offloads their body weight, while the system guides their legs through a natural walking pattern. Sensors monitor every step, providing real-time feedback. The system gradually reduces assistance as the patient regains strength and coordination, following a progressive rehabilitation protocol.\n\nThis approach triggers neuroplasticity — the brain's ability to rewire and form new neural pathways for movement — leading to functional walking recovery even in severe cases.`,
      conditions: [
        'Post-stroke gait rehabilitation',
        'Spinal cord injury recovery',
        'Multiple sclerosis',
        'Traumatic brain injury',
        'Hip and knee replacement recovery',
        'Parkinson\'s disease',
        'Cerebral palsy',
        'Lower limb weakness',
      ],
      benefits: [
        { title: 'Safe Early Mobilisation', desc: 'Allows walking practice even before independent standing.' },
        { title: 'Consistent Repetition', desc: 'Hundreds of correct steps per session to retrain the brain.' },
        { title: 'Real-Time Monitoring', desc: 'Sensors track symmetry, step length, and weight distribution.' },
        { title: 'Faster Recovery', desc: 'Studies show 3–5x faster walking recovery vs conventional therapy.' },
      ],
      sessions: '15–30 sessions recommended',
      duration: '45–60 minutes per session',
    },
  },
  {
    id: 'laser-traction',
    icon: '☀️',
    faIcon: 'fas fa-sun',
    title: 'Laser & Traction Therapy',
    shortDesc: 'High-intensity laser therapy and mechanical traction for spine decompression and tissue regeneration.',
    tag: 'Spine Care',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `High-Intensity Laser Therapy (HILT) and Mechanical Traction are two cornerstone treatments in our spine care programme. Together, they address both the cellular healing of damaged tissue and the mechanical decompression of compressed spinal structures — offering a comprehensive solution for disc problems, sciatica, and chronic spinal conditions.`,
      howItWorks: `HILT uses high-powered laser energy to penetrate deep into spinal tissues, stimulating cellular energy production (ATP synthesis), reducing inflammation at the disc level, and promoting regeneration of damaged nerve tissue. It is particularly effective for disc herniations and nerve root impingement.\n\nMechanical Traction applies a controlled pulling force along the spine using a computerised traction table. This creates negative pressure within the disc, drawing herniated material back, relieving nerve compression, and restoring normal disc height.`,
      conditions: [
        'Disc herniation (L4-L5, L5-S1)',
        'Cervical and lumbar spondylosis',
        'Sciatica and radiculopathy',
        'Degenerative disc disease',
        'Spinal stenosis',
        'Facet joint arthritis',
        'Chronic neck and back pain',
        'Nerve root compression',
      ],
      benefits: [
        { title: 'Non-Surgical Solution', desc: 'Achieves disc decompression without surgery or injections.' },
        { title: 'Cellular Regeneration', desc: 'Laser stimulates healing at the cellular level within damaged tissue.' },
        { title: 'Immediate Relief', desc: 'Most patients experience pain reduction after the first session.' },
        { title: 'Long-Lasting Results', desc: 'Addresses root cause rather than just masking symptoms.' },
      ],
      sessions: '8–15 sessions recommended',
      duration: '30–50 minutes per session',
    },
  },
  {
    id: 'spinal-decompression',
    icon: '🦴',
    faIcon: 'fas fa-arrows-alt-v',
    title: 'Spinal Decompression',
    shortDesc: 'Non-surgical computerised spinal decompression therapy for disc injuries and chronic back pain.',
    tag: 'Advanced',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `Non-Surgical Spinal Decompression at JK Physio uses a sophisticated, computer-controlled traction table to gently stretch the spine in a precise, targeted manner. This is distinct from simple mechanical traction — it uses a specific logarithmic decompression curve that prevents muscle guarding, allowing true disc decompression to occur.`,
      howItWorks: `The patient lies on the decompression table while a computerised system applies gentle, intermittent traction forces specific to their diagnosis. The system alternates between decompression and relaxation phases, creating a pumping effect that draws water, oxygen, and nutrients back into the disc — reversing the degeneration process.\n\nEach session is tailored to the patient's specific spinal level, disc condition, and pain tolerance, ensuring maximum therapeutic effect with minimal discomfort.`,
      conditions: [
        'Bulging and herniated discs',
        'Degenerative disc disease',
        'Posterior facet syndrome',
        'Spinal stenosis',
        'Sciatica',
        'Failed back surgery syndrome',
        'Chronic lower back pain',
        'Cervical disc problems',
      ],
      benefits: [
        { title: 'Targeted Precision', desc: 'Computer-controlled forces isolate specific spinal segments.' },
        { title: 'Disc Rehydration', desc: 'Restores disc height and improves nutrient exchange within discs.' },
        { title: 'No Muscle Guarding', desc: 'Logarithmic curve prevents spasm, allowing deeper decompression.' },
        { title: 'Surgery Alternative', desc: 'Many surgical candidates avoid operations after decompression therapy.' },
      ],
      sessions: '12–20 sessions recommended',
      duration: '30–45 minutes per session',
    },
  },
  {
    id: 'therapeutic-gym',
    icon: '🏋️',
    faIcon: 'fas fa-dumbbell',
    title: 'Therapeutic Gym',
    shortDesc: 'Fully equipped therapeutic gym with specialised rehab equipment for strength, conditioning and functional recovery.',
    tag: 'Rehabilitation',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `The JK Physio Therapeutic Gym at our Udaipur headquarters is unlike a conventional fitness gym. Every piece of equipment has been selected specifically for rehabilitation purposes, and every workout is supervised and prescribed by our physiotherapy team. This is where recovery transforms into strength.`,
      howItWorks: `Once a patient has completed their acute physiotherapy phase, the therapeutic gym bridges the gap between clinical recovery and returning to full activity. Our physiotherapists design individualised exercise programmes that progress in difficulty, targeting specific functional goals — whether it's returning to sport, resuming work duties, or regaining independence in daily activities.\n\nThe gym also runs dedicated programmes for weight management, geriatric fitness, post-surgical conditioning, and sports performance enhancement — all under medical supervision.`,
      conditions: [
        'Post-physiotherapy strengthening',
        'Sports performance and conditioning',
        'Post-surgical rehabilitation',
        'Weight management programmes',
        'Geriatric fitness and fall prevention',
        'Core strengthening for back pain',
        'Cardiovascular rehabilitation',
        'General fitness under supervision',
      ],
      benefits: [
        { title: 'Medical Supervision', desc: 'All exercise under direct physiotherapy guidance for safety.' },
        { title: 'Progressive Programmes', desc: 'Tailored plans that evolve with your recovery milestones.' },
        { title: 'Full Recovery', desc: 'Bridges the gap from clinic treatment to active, normal life.' },
        { title: 'Long-Term Wellness', desc: 'Builds habits and strength that prevent future injury recurrence.' },
      ],
      sessions: 'Ongoing programmes available',
      duration: '45–90 minutes per session',
    },
  },
  // ─── ADD THIS OBJECT to the technologies array in Technology.jsx ───
// Paste it after the last technology (Therapeutic Gym) and before the closing ];

  {
    id: 'robotic-exoskeleton',
    icon: '🦾',
    faIcon: 'fas fa-robot',
    title: 'Robotic Exoskeleton Gait Therapy',
    shortDesc: 'Wearable robotic exoskeleton for intensive, repetitive gait rehabilitation in paralysis, stroke, and spinal injury patients.',
    tag: 'Robotic Rehab',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `Robotic Exoskeleton Gait Therapy represents the pinnacle of modern neurological rehabilitation. At JK Physio, we use a wearable powered exoskeleton — a lightweight robotic framework that attaches to the patient's legs and torso — to guide, assist, and retrain walking in patients with severe paralysis, stroke, and spinal cord injuries. This technology was previously available only in elite international rehabilitation centres; JK Physio is proud to be among the first centres in Rajasthan to offer it.`,
      howItWorks: `The exoskeleton is worn over the patient's clothing and strapped securely to the hips, thighs, and lower legs. Onboard motors drive the hip and knee joints through a biomechanically accurate walking pattern. The system is controlled by a trained physiotherapist who sets the level of assistance — from fully driven (for complete paralysis) to minimally assisted (for patients with partial function).\n\nAs the exoskeleton moves the limbs through hundreds of correct walking cycles per session, it sends repeated sensory signals to the spinal cord and brain. Over time, this intensive repetition triggers neuroplasticity — the formation of new neural pathways that can restore voluntary movement. Even patients who have been immobile for years have achieved functional gains with this therapy.\n\nThe system also incorporates real-time biofeedback, monitoring muscle activation, joint angles, and weight distribution, allowing therapists to fine-tune the programme at every session for maximum progress.`,
      conditions: [
        'Complete and incomplete spinal cord injury',
        'Stroke and hemiplegia',
        'Traumatic brain injury with gait impairment',
        'Multiple sclerosis',
        'Guillain-Barré syndrome recovery',
        'Cerebral palsy (adult)',
        'Parkinson\'s disease gait freezing',
        'Post-surgical lower limb rehabilitation',
        'Muscular dystrophy',
        'Long-term paralysis re-rehabilitation',
      ],
      benefits: [
        {
          title: 'Restores Walking in Paralysis',
          desc: 'Enables patients with complete or partial paralysis to experience and re-learn functional walking.',
        },
        {
          title: 'Intensive Neuroplasticity',
          desc: 'Up to 1,000 correct steps per session — far exceeding what manual therapy can achieve — to rewire the brain and spinal cord.',
        },
        {
          title: 'Full Weight-Bearing',
          desc: 'Promotes bone density, cardiovascular health, and pressure sore prevention through upright, weight-bearing activity.',
        },
        {
          title: 'Psychological Recovery',
          desc: 'Standing and walking upright dramatically improves patient confidence, motivation, and mental well-being during rehabilitation.',
        },
        {
          title: 'Adjustable Assistance',
          desc: 'Seamlessly transitions from full robotic drive to patient-initiated movement as recovery progresses.',
        },
        {
          title: 'Real-Time Biofeedback',
          desc: 'Onboard sensors provide precise data on muscle activation and gait symmetry, enabling data-driven therapy adjustments.',
        },
      ],
      sessions: '20–40 sessions recommended',
      duration: '45–75 minutes per session',
    },
  },
];

/* ─── DETAIL PAGE ───────────────────────────────────── */
export const TechnologyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const tech = technologies.find((t) => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 100);
  }, []);

  if (!tech) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 mb-4">Technology not found.</p>
          <button onClick={() => navigate('/technology')} className="text-brand font-semibold">
            ← Back to Technology
          </button>
        </div>
      </div>
    );
  }

  const { detail } = tech;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div
        className="relative pt-28 pb-16 overflow-hidden"
        style={{ background: tech.heroGradient }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(219,38,29,0.08)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(219,38,29,0.05)' }} />
        </div>

        <div className="max-w-screen-xl mx-auto px-6 relative">
          {/* Back button */}
          <button
            onClick={() => navigate('/technology')}
            className="inline-flex items-center gap-2 text-sm font-semibold mb-8 bg-white/70 px-4 py-2 rounded-full border cursor-pointer"
            style={{ color: '#db261d', borderColor: '#fecaca' }}
          >
            ← Back to Technology
          </button>

          <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5"
            style={{ backgroundColor: '#fff1f1', color: '#db261d' }}>
            {tech.tag}
          </div>

          <div className="flex items-start gap-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
              style={{ background: 'rgba(219,38,29,0.08)' }}
            >
              {tech.icon}
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">{tech.title}</h1>
              <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">{tech.shortDesc}</p>
            </div>
          </div>

          {/* Session info pills */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-red-100 rounded-full px-5 py-2.5 text-sm font-medium text-slate-600">
              <span style={{ color: '#db261d' }}>⏱</span> {detail.sessions}
            </div>
            <div className="inline-flex items-center gap-2 bg-white/80 border border-red-100 rounded-full px-5 py-2.5 text-sm font-medium text-slate-600">
              <span style={{ color: '#db261d' }}>⏰</span> {detail.duration}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <div className={`fade-up ${visible ? 'visible' : ''}`}>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
              <div
                className="h-1 w-12 rounded-full mb-6"
                style={{ background: '#db261d' }}
              />
              <p className="text-slate-500 leading-relaxed text-base">{detail.overview}</p>
            </div>

            {/* How It Works */}
            <div className={`fade-up fade-up-delay-1 ${visible ? 'visible' : ''}`}>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">How It Works</h2>
              <div className="h-1 w-12 rounded-full mb-6" style={{ background: '#db261d' }} />
              {detail.howItWorks.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-500 leading-relaxed text-base mb-4">{para}</p>
              ))}
            </div>

            {/* Benefits */}
            <div className={`fade-up fade-up-delay-2 ${visible ? 'visible' : ''}`}>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Key Benefits</h2>
              <div className="h-1 w-12 rounded-full mb-6" style={{ background: '#db261d' }} />
              <div className="grid sm:grid-cols-2 gap-4">
                {detail.benefits.map((b) => (
                  <div
                    key={b.title}
                    className="p-5 rounded-2xl border border-slate-100"
                    style={{ background: '#fafafa' }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: 'rgba(219,38,29,0.1)' }}
                    >
                      <span style={{ color: '#db261d', fontSize: '1rem' }}>✓</span>
                    </div>
                    <div className="font-bold text-slate-800 mb-1">{b.title}</div>
                    <div className="text-sm text-slate-400 leading-relaxed">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Conditions + CTA */}
          <div className="space-y-6">

            {/* Conditions Treated */}
            <div
              className={`fade-up fade-up-delay-1 ${visible ? 'visible' : ''} rounded-2xl p-6 border border-slate-100`}
              style={{ background: '#fafafa' }}
            >
              <h3 className="font-bold text-slate-800 mb-4 text-lg">Conditions Treated</h3>
              <ul className="space-y-2.5">
                {detail.conditions.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-slate-500">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                      style={{ background: 'rgba(219,38,29,0.1)', color: '#db261d' }}
                    >
                      ✓
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Book CTA */}
            <div
              className={`fade-up fade-up-delay-2 ${visible ? 'visible' : ''} rounded-2xl p-6 text-white`}
              style={{ background: 'linear-gradient(135deg, #db261d, #b91c1c)' }}
            >
              <h3 className="font-bold text-xl mb-2">Ready to Start?</h3>
              <p className="text-red-100 text-sm mb-5 leading-relaxed">
                Book a free consultation and our specialists will determine if {tech.title} is right for you.
              </p>
              <button
                onClick={() => navigate('/#contact')}
                className="w-full bg-white font-bold px-6 py-3 rounded-xl text-sm cursor-pointer border-none"
                style={{ color: '#db261d' }}
              >
                Book Free Consultation →
              </button>
              <button
                onClick={() => window.open('https://wa.me/919928981863', '_blank')}
                className="w-full mt-3 font-semibold px-6 py-3 rounded-xl text-sm cursor-pointer border-none text-white"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                💬 WhatsApp Us
              </button>
            </div>

            {/* Other Technologies */}
            <div className={`fade-up fade-up-delay-3 ${visible ? 'visible' : ''}`}>
              <h3 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-widest">Other Technologies</h3>
              <div className="space-y-2">
                {technologies.filter((t) => t.id !== id).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => navigate(`/technology/${t.id}`)}
                    className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-red-200 hover:bg-red-50 transition-all text-sm font-medium text-slate-600 cursor-pointer bg-white"
                  >
                    {t.icon} {t.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── MAIN TECHNOLOGY PAGE ──────────────────────────── */
const TechnologyPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

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

        <div className="max-w-screen-xl mx-auto px-6 relative">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm font-semibold mb-8 bg-white/70 px-4 py-2 rounded-full border cursor-pointer"
            style={{ color: '#db261d', borderColor: '#fecaca' }}
          >
            ← Back to Home
          </button>

          <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5"
            style={{ backgroundColor: '#fff1f1', color: '#db261d' }}>
            Advanced Equipment
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h1 className="text-5xl font-bold text-slate-800 mb-4">
                World-Class <span style={{ color: '#db261d' }}>Technology</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                JK Physio is equipped with the most advanced physiotherapy technology in Rajasthan —
                making us the region's premier rehabilitation centre.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 lg:justify-end">
              {[['6+', 'Technologies'], ['5000+', 'Patients Treated'], ['16+', 'Years Experience']].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-bold text-slate-800">{num}</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Grid */}
      <section className="py-20" style={{ background: '#0f0f0f' }}>
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(219,38,29,0.15)', color: '#db261d' }}
            >
              Our Equipment
            </div>
            <h2 className="text-3xl font-bold text-white">
              Cutting-Edge Rehabilitation Technology
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Click on any technology to learn more about how it works, what conditions it treats, and its benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, i) => (
              <div
                key={tech.id}
                className={`fade-up fade-up-delay-${(i % 4) + 1} ${visible ? 'visible' : ''}`}
                onClick={() => navigate(`/technology/${tech.id}`)}
                onMouseEnter={() => setHoveredId(tech.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  height: '280px',
                  background: '#1a1a1a',
                  border: hoveredId === tech.id ? '1px solid rgba(219,38,29,0.4)' : '1px solid rgba(255,255,255,0.05)',
                  transition: 'border-color 0.3s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
                  transform: hoveredId === tech.id ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredId === tech.id ? '0 24px 48px rgba(219,38,29,0.2)' : '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                {/* Big icon background */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '8rem',
                  opacity: hoveredId === tech.id ? 0.06 : 0.04,
                  transition: 'opacity 0.3s',
                  userSelect: 'none',
                }}>
                  {tech.icon}
                </div>

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: hoveredId === tech.id
                    ? 'linear-gradient(0deg, rgba(219,38,29,0.85) 0%, rgba(219,38,29,0.3) 60%, transparent 100%)'
                    : 'linear-gradient(0deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)',
                  transition: 'background 0.4s',
                }} />

                {/* Tag */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(219,38,29,0.2)',
                  color: '#fca5a5',
                  border: '1px solid rgba(219,38,29,0.3)',
                  borderRadius: '20px',
                  padding: '4px 12px',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}>
                  {tech.tag}
                </div>

                {/* Content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '8px',
                  }}>
                    {tech.icon}
                  </div>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: '#fff',
                    marginBottom: '6px',
                  }}>
                    {tech.title}
                  </div>
                  <div style={{
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: '1.5',
                    marginBottom: '12px',
                    opacity: hoveredId === tech.id ? 1 : 0,
                    transform: hoveredId === tech.id ? 'translateY(0)' : 'translateY(6px)',
                    transition: 'opacity 0.3s, transform 0.3s',
                    maxWidth: '90%',
                  }}>
                    {tech.shortDesc}
                  </div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.7)',
                    opacity: hoveredId === tech.id ? 1 : 0,
                    transform: hoveredId === tech.id ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'opacity 0.35s 0.05s, transform 0.35s 0.05s',
                  }}>
                    <span>Learn More</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div
            className="rounded-3xl p-10 text-center"
            style={{ background: 'linear-gradient(135deg, #db261d, #b91c1c)' }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Want to Know Which Technology Suits You?
            </h3>
            <p className="text-red-100 mb-6 text-sm max-w-md mx-auto">
              Book a free consultation and our specialists will assess your condition and recommend the best treatment technology for you.
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

export default TechnologyPage;
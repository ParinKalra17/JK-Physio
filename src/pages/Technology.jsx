import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/* ─── DATA ─────────────────────────────────────────── */
const technologies = [
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
  {
    id: 'rymo-mobi-l',
    icon: '🤖',
    faIcon: 'fas fa-hand-paper',
    title: 'Rymo Mobi-L',
    shortDesc: 'Advanced robotic limb mobilisation system for upper and lower extremity rehabilitation and motor re-education.',
    tag: 'Robotic Therapy',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `The Rymo Mobi-L is a state-of-the-art robotic rehabilitation system designed to deliver precise, controlled passive and active-assisted mobilisation of the limbs. At JK Physio, it forms a critical part of our early-stage neurological and orthopaedic rehabilitation, enabling movement therapy from the very first days of recovery — even when the patient has no voluntary muscle activity.`,
      howItWorks: `The Rymo Mobi-L uses programmable robotic drives to move the patient's limb through smooth, physiologically correct ranges of motion. The therapist configures the specific joint, range of motion, speed, and resistance level through a digital control panel. The device can operate in fully passive mode (the robot does all the work), active-assisted mode (the patient initiates and the robot helps), or resistive mode (for progressive strengthening).\n\nThis cyclical, repetitive movement stimulates sensory receptors in the joints and muscles, sending proprioceptive signals to the brain that encourage neuroplastic reorganisation. It also prevents joint contractures, maintains cartilage health, and improves local circulation — critical for patients on bed rest or with limited mobility.`,
      conditions: [
        'Early stroke and hemiplegia rehabilitation',
        'Post-surgical joint mobilisation',
        'Spinal cord injury upper/lower limb therapy',
        'Joint contracture prevention and reversal',
        'Peripheral nerve injury recovery',
        'Orthopaedic post-fracture rehabilitation',
        'Prolonged bed rest deconditioning',
        'Shoulder, elbow, hip, and knee stiffness',
      ],
      benefits: [
        {
          title: 'Early Mobilisation',
          desc: 'Begins therapeutic movement from day one of recovery, even in the absence of voluntary control.',
        },
        {
          title: 'Prevents Contractures',
          desc: 'Maintains full joint range of motion in immobile or paralysed patients, preventing permanent stiffness.',
        },
        {
          title: 'Sensory Stimulation',
          desc: 'Repetitive joint movement sends powerful proprioceptive signals that support brain and nerve recovery.',
        },
        {
          title: 'Progressive Modes',
          desc: 'Advances seamlessly from passive through active-assisted to resistive training as function returns.',
        },
      ],
      sessions: '10–25 sessions recommended',
      duration: '30–45 minutes per session',
    },
  },
  {
    id: 'dts-decompression',
    icon: '🦴',
    faIcon: 'fas fa-arrows-alt-v',
    title: 'DTS: Decompression Traction System',
    shortDesc: 'Non-surgical computerised spinal decompression therapy for disc herniations, sciatica, and chronic back and neck pain.',
    tag: 'Spine Care',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `The DTS (Decompression Traction System) at JK Physio is a sophisticated, computer-controlled spinal decompression platform that offers a non-surgical solution to disc herniations, nerve compression, and chronic spinal pain. Unlike conventional traction, DTS applies precisely calculated, logarithmically varied forces that prevent the muscle-guarding reflex — allowing true, deep decompression of spinal discs to take place.`,
      howItWorks: `The patient is comfortably positioned on the DTS table, with a pelvic or cervical harness fitted depending on whether lumbar or cervical treatment is required. The computer-controlled system applies a gentle, cyclical distraction force — pulling the vertebrae apart to create negative intradiscal pressure. This negative pressure draws herniated or bulging disc material back towards the centre, reduces compression on trapped nerve roots, and stimulates an influx of water, oxygen, and nutrients into the disc.\n\nEach session is individually programmed with the exact spinal level, force magnitude, and treatment duration specific to that patient's diagnosis. The alternating cycles of decompression and relaxation create a rhythmic pumping action that accelerates disc rehydration and healing over the course of the treatment programme.`,
      conditions: [
        'Lumbar disc herniation (L4-L5, L5-S1)',
        'Cervical disc herniation',
        'Sciatica and leg pain radiculopathy',
        'Degenerative disc disease',
        'Spinal stenosis',
        'Facet joint syndrome',
        'Chronic lower back and neck pain',
        'Failed back surgery syndrome',
      ],
      benefits: [
        {
          title: 'True Disc Decompression',
          desc: 'Logarithmic force curve bypasses muscle guarding for genuine intradiscal pressure reduction.',
        },
        {
          title: 'Disc Rehydration',
          desc: 'Negative pressure draws nutrients and hydration back into degenerated discs, reversing damage.',
        },
        {
          title: 'Nerve Root Relief',
          desc: 'Directly reduces pressure on compressed nerve roots, relieving sciatica and radicular pain.',
        },
        {
          title: 'Surgery Alternative',
          desc: 'Many patients avoid spine surgery entirely after completing a DTS decompression programme.',
        },
      ],
      sessions: '12–20 sessions recommended',
      duration: '30–45 minutes per session',
    },
  },
  {
    id: 'class-4-laser',
    icon: '☀️',
    faIcon: 'fas fa-sun',
    title: 'Class 4 Laser Therapy',
    shortDesc: 'High-intensity Class 4 laser for deep tissue regeneration, inflammation reduction, and accelerated healing.',
    tag: 'Laser Therapy',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `Class 4 High-Intensity Laser Therapy (HILT) is one of the most powerful non-invasive treatment modalities available in physiotherapy today. At JK Physio, our Class 4 laser system delivers therapeutic laser energy deep into tissue — far beyond the reach of lower-class lasers — triggering profound cellular healing, reducing inflammation at its source, and providing rapid, lasting pain relief. It is particularly transformative for chronic pain conditions, disc pathologies, and sports injuries.`,
      howItWorks: `The Class 4 laser emits high-powered photonic energy that penetrates through skin, fat, and muscle to reach deep structures including spinal discs, joint cartilage, and nerve roots. At the cellular level, this laser energy is absorbed by the mitochondria — the cell's energy centre — stimulating the production of ATP (adenosine triphosphate). This energises cells to repair, regenerate, and function at an accelerated rate.\n\nThe therapy also triggers a powerful anti-inflammatory cascade, reduces oxidative stress within damaged tissue, and stimulates the release of endogenous opioids for natural pain control. Unlike surgical lasers that cut, Class 4 therapeutic lasers deliver energy in a carefully calibrated, safe manner — the patient feels a gentle warmth, not discomfort.`,
      conditions: [
        'Disc herniation and sciatica',
        'Chronic neck and back pain',
        'Knee osteoarthritis',
        'Plantar fasciitis and heel pain',
        'Sports injuries (muscle tears, sprains)',
        'Shoulder tendinopathy and rotator cuff injuries',
        'Nerve damage and neuropathic pain',
        'Post-surgical tissue healing',
        'Wound healing and ulcers',
        'Temporomandibular joint (TMJ) disorders',
      ],
      benefits: [
        {
          title: 'Deep Tissue Penetration',
          desc: 'Reaches structures up to 10cm deep — including spinal discs and major joints — for targeted cellular therapy.',
        },
        {
          title: 'Accelerated Healing',
          desc: 'Stimulates mitochondrial ATP production to energise cells and dramatically speed tissue repair.',
        },
        {
          title: 'Powerful Anti-Inflammatory',
          desc: 'Reduces pro-inflammatory mediators at the cellular level for lasting relief from chronic inflammation.',
        },
        {
          title: 'Drug-Free Pain Control',
          desc: 'Triggers natural endorphin and opioid release for significant, sustained pain reduction without medication.',
        },
      ],
      sessions: '6–15 sessions recommended',
      duration: '10–25 minutes per session',
    },
  },
  {
    id: 'pulstar-spine-adjustment',
    icon: '⚡',
    faIcon: 'fas fa-bolt',
    title: 'Pulstar Spine Adjustment',
    shortDesc: 'Computer-guided, instrument-assisted spinal analysis and adjustment for precise, gentle, and measurable spinal correction.',
    tag: 'Spine Correction',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `The Pulstar Spine Adjustment system is a breakthrough in computerised spinal analysis and treatment. Unlike traditional manual spinal manipulation, Pulstar uses an FDA-cleared, instrument-based approach that precisely identifies spinal segments with restricted mobility and delivers a controlled, repeatable impulse to restore normal movement. It is safe, gentle, highly accurate, and suitable for patients of all ages — including those who cannot tolerate conventional manipulation.`,
      howItWorks: `The Pulstar device first performs a dynamic spinal analysis — gently tapping each vertebral segment and measuring its stiffness response in real time. A proprietary algorithm analyses the data and maps which spinal levels are hypomobile (restricted) and which are normal, producing an objective, colour-coded readout on the screen. This removes subjectivity from the assessment process.\n\nOnce the dysfunctional segments are identified, the device delivers a precise series of rapid, low-force impulses — faster than a manual adjustment and completely controlled by the computer. These impulses stimulate the mechanoreceptors in the joint, restore segmental mobility, reduce local muscle hypertonicity, and normalise nerve signalling from that spinal level. Post-treatment analysis confirms the correction has been achieved before the session ends.`,
      conditions: [
        'Spinal joint dysfunction and hypomobility',
        'Cervical and lumbar spondylosis',
        'Chronic neck and back stiffness',
        'Headaches of cervicogenic origin',
        'Postural imbalances and scoliosis management',
        'Sacroiliac joint dysfunction',
        'Disc-related spinal pain',
        'Elderly patients requiring gentle adjustment',
        'Post-surgical spinal care',
        'Athletes requiring spinal performance optimisation',
      ],
      benefits: [
        {
          title: 'Objective Diagnosis',
          desc: 'Computer analysis removes guesswork — precisely identifies which spinal segments need correction.',
        },
        {
          title: 'Gentle and Safe',
          desc: 'Instrument-delivered impulses are faster and gentler than manual manipulation — suitable for all ages.',
        },
        {
          title: 'Measurable Results',
          desc: 'Pre- and post-treatment scans confirm the correction was achieved at every session.',
        },
        {
          title: 'Nerve Normalisation',
          desc: 'Restores normal mechanoreceptor signalling from spinal joints, reducing referred pain and muscle spasm.',
        },
      ],
      sessions: '8–16 sessions recommended',
      duration: '20–35 minutes per session',
    },
  },
  {
    id: 'matrix-rhythm-therapy',
    icon: '🌊',
    faIcon: 'fas fa-wave-square',
    title: 'Matrix Rhythm Therapy',
    shortDesc: 'Resonance-based micro-vibration therapy for deep tissue restoration, lymphatic drainage, and cellular regeneration.',
    tag: 'Cell Therapy',
    color: '#db261d',
    heroGradient: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 60%, #fff5f5 100%)',
    detail: {
      overview: `Matrix Rhythm Therapy (MaRhyThe) is a scientifically advanced treatment modality developed in Germany that works at the most fundamental level of the human body — the cell. Using a specialised resonance applicator, it delivers rhythmic micro-vibrations that mimic and synchronise with the natural oscillatory rhythm of healthy skeletal muscle cells (8–12 Hz). This normalises the extracellular matrix — the fluid-filled space surrounding every cell — restoring cellular nutrition, waste removal, and tissue function from the inside out.`,
      howItWorks: `The Matrix Rhythm Therapy device uses a motor-driven applicator head that vibrates at precisely calibrated frequencies matching the body's own cellular rhythms. When applied to the skin over muscles, fascia, or joints, these micro-vibrations penetrate deep into the tissue, mechanically stimulating the extracellular matrix.\n\nIn injured or chronically tense tissue, the extracellular matrix becomes viscous and stagnant — cells can no longer receive nutrients or expel metabolic waste efficiently. Matrix Rhythm Therapy restores the fluid dynamics of this matrix through rhythmic mechanical stimulation, effectively re-opening the cellular communication channels. The result is improved microcirculation, accelerated lymphatic drainage, reduced tissue tension, and a profound restoration of normal cellular metabolism — the foundation of true tissue healing.`,
      conditions: [
        'Chronic muscle tension and myofascial pain',
        'Lymphoedema and post-surgical swelling',
        'Scar tissue and post-operative fibrosis',
        'Complex Regional Pain Syndrome (CRPS)',
        'Nerve regeneration support (neuropathy)',
        'Sports injury recovery and muscle tears',
        'Chronic fatigue and fibromyalgia',
        'Frozen shoulder and joint stiffness',
        'Diabetic foot and peripheral circulation problems',
        'Post-fracture rehabilitation',
      ],
      benefits: [
        {
          title: 'Cellular-Level Healing',
          desc: 'Works directly on the extracellular matrix to restore cellular nutrition, waste removal, and tissue metabolism.',
        },
        {
          title: 'Deep Lymphatic Drainage',
          desc: 'Stimulates lymphatic flow to reduce stubborn oedema and swelling at depth — without manual pressure.',
        },
        {
          title: 'Scar and Fibrosis Reduction',
          desc: 'Breaks down pathological scar tissue and adhesions, restoring normal tissue extensibility and function.',
        },
        {
          title: 'Nerve Regeneration Support',
          desc: 'Rhythmic vibration stimulates the regrowth and remyelination of damaged peripheral nerve fibres.',
        },
      ],
      sessions: '8–20 sessions recommended',
      duration: '30–50 minutes per session',
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
      <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-40">
        <div className="text-center p-10 bg-white rounded-2xl shadow-sm border border-slate-100 max-w-sm w-full mx-4" style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
          <div className="w-16 h-16 bg-red-50 text-brand rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            <i className="fas fa-search"></i>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Technology Not Found</h2>
          <p className="text-slate-500 mb-8 text-sm leading-relaxed">We couldn't find the technology you're looking for. It may have been moved or removed.</p>
          <button 
            onClick={() => navigate('/technology')} 
            className="w-full btn-primary bg-brand text-white font-semibold px-5 py-3 rounded-xl border-none cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          >
            View All Technologies
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
        className="relative pt-40 pb-16 overflow-hidden"
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
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate('/technology')}
              className="inline-flex items-center gap-2 text-sm font-semibold bg-white/70 px-4 py-2 rounded-full border cursor-pointer"
              style={{ color: '#db261d', borderColor: '#fecaca' }}
            >
              ← Back to Technology
            </button>

            <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
              style={{ backgroundColor: '#fff1f1', color: '#db261d' }}>
              {tech.tag}
            </div>
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
        className="relative pt-40 pb-16 overflow-hidden"
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
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-brand text-sm font-semibold bg-white/70 px-4 py-2 rounded-full border border-red-100 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </button>

            <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
              style={{ backgroundColor: '#fff1f1', color: '#db261d' }}>
              Advanced Equipment
            </div>
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
              {[['6+', 'Technologies'], ['50000+', 'Patients Treated'], ['16+', 'Years Experience']].map(([num, label]) => (
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
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(219,38,29,0.15)', color: '#db261d' }}
            >
              Our Equipment
            </div>
            <h2 className="text-3xl font-bold text-slate-800">
              Cutting-Edge Rehabilitation Technology
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
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
                  background: tech.id === 'pulstar-spine-adjustment' ? 'linear-gradient(rgba(15,15,15,0.75), rgba(15,15,15,0.85)), url("/pulstar.jpg") center/contain no-repeat #fff' :
                    tech.id === 'robotic-exoskeleton' ? 'linear-gradient(rgba(15,15,15,0.75), rgba(15,15,15,0.85)), url("/robotic-new.jpg") center/cover no-repeat' :
                      tech.id === 'rymo-mobi-l' ? 'linear-gradient(rgba(15,15,15,0.75), rgba(15,15,15,0.85)), url("/rymo.png") center/cover no-repeat' :
                        tech.id === 'dts-decompression' ? 'linear-gradient(rgba(15,15,15,0.75), rgba(15,15,15,0.85)), url("/dts.jpg") center/cover no-repeat' :
                          tech.id === 'class-4-laser' ? 'linear-gradient(rgba(15,15,15,0.75), rgba(15,15,15,0.85)), url("/laser.jpg") center/cover no-repeat' : 
                            tech.id === 'matrix-rhythm-therapy' ? 'linear-gradient(rgba(15,15,15,0.75), rgba(15,15,15,0.85)), url("/matrix.jpg") center/contain no-repeat #fff' : '#1a1a1a',
                  border: hoveredId === tech.id ? '1px solid rgba(219,38,29,0.4)' : '1px solid rgba(255,255,255,0.05)',
                  transition: 'border-color 0.3s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
                  transform: hoveredId === tech.id ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredId === tech.id ? '0 24px 48px rgba(219,38,29,0.2)' : '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >


                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: hoveredId === tech.id
                    ? 'linear-gradient(0deg, rgba(219,38,29,0.85) 0%, rgba(219,38,29,0.3) 60%, transparent 100%)'
                    : 'linear-gradient(0deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)',
                  transition: 'background 0.4s',
                }} />


                {/* Content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>

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
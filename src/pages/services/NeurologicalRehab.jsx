import ServiceDetail from './ServiceDetail';

const service = {
  tag: 'Specialized',
  title: 'Neurological Rehabilitation',
  tagline: 'Compassionate, evidence-based therapy helping patients with neurological conditions regain independence, mobility, and quality of life.',
  icon: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 8l8 0M40 8l0 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 24c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  overview:
    'Neurological rehabilitation addresses movement, balance, and functional difficulties caused by conditions affecting the brain, spinal cord, and peripheral nervous system. Our therapists use neuroplasticity-based techniques — harnessing the brain\'s ability to rewire itself — combined with task-specific training to help patients maximise their recovery potential at any stage.',
  conditions: [
    'Stroke (CVA) Recovery', 'Parkinson\'s Disease', 'Multiple Sclerosis (MS)',
    'Traumatic Brain Injury', 'Spinal Cord Injury', 'Guillain-Barré Syndrome',
    'Cerebral Palsy', 'Peripheral Neuropathy', 'Bell\'s Palsy', 'Vestibular Disorders',
  ],
  approach: [
    { title: 'Neurological Assessment', desc: 'In-depth evaluation of tone, reflexes, sensation, balance, coordination, and functional ability using standardised tools.' },
    { title: 'Neuroplasticity-Based Training', desc: 'Repetitive, task-specific exercises designed to stimulate new neural pathways and restore lost motor function.' },
    { title: 'Balance & Gait Retraining', desc: 'Progressive balance exercises and walking retraining to reduce fall risk and improve independence in mobility.' },
    { title: 'Functional Independence Training', desc: 'Practical training for daily activities — dressing, transfers, climbing stairs — to maximise independence at home.' },
  ],
  benefits: [
    'Improved mobility and walking ability', 'Reduced muscle spasticity and stiffness',
    'Better balance and fall prevention', 'Enhanced fine motor coordination',
    'Greater independence in daily life', 'Improved speech and swallowing (coordinated care)',
    'Reduced carer burden', 'Improved confidence and mental wellbeing',
  ],
  quickInfo: [
    { icon: '⏱️', label: 'Session Duration', value: '45 – 60 minutes' },
    { icon: '📅', label: 'Typical Program', value: 'Ongoing (condition dependent)' },
    { icon: '👨‍⚕️', label: 'Therapist', value: 'Neurological Physiotherapist' },
    { icon: '📍', label: 'Location', value: 'In-clinic & Home Visits' },
  ],
  whoFor: [
    'Stroke survivors at any stage of recovery',
    'Patients with Parkinson\'s or MS',
    'Children and adults with cerebral palsy',
    'Post-brain or spinal cord injury patients',
    'Anyone with balance or coordination issues',
  ],
};

const NeurologicalRehab = () => <ServiceDetail service={service} />;
export default NeurologicalRehab;

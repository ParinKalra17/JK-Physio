import ServiceDetail from './ServiceDetail';

const service = {
  tag: 'Advanced',
  title: 'Robotic Exoskeleton Gait Therapy',
  tagline: 'A wearable motorized frame guides patients through precise, repetitive walking movements to retrain the brain and restore natural gait.',
  icon: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect x="10" y="18" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 18v-4a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 28v4M20 30h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  overview:
    'Robotic Exoskeleton Gait Therapy is an advanced rehabilitation technique that uses wearable robotic devices to assist and retrain walking in patients with neurological or mobility impairments. By providing consistent, precisely controlled movement repetition, the exoskeleton stimulates neuroplasticity — helping the brain form new pathways to restore functional gait patterns that may have been lost due to injury or disease.',
  conditions: [
    'Stroke-Related Gait Impairment', 'Spinal Cord Injury', 'Parkinson\'s Disease',
    'Multiple Sclerosis', 'Traumatic Brain Injury', 'Incomplete Paralysis',
    'Cerebral Palsy (Adults)', 'Guillain-Barré Syndrome', 'Post-ICU Weakness', 'Muscular Dystrophy',
  ],
  approach: [
    { title: 'Candidacy Assessment', desc: 'Thorough evaluation of the patient\'s neurological status, joint integrity, weight-bearing capacity, and goals to determine suitability for exoskeleton therapy.' },
    { title: 'Exoskeleton Fitting & Calibration', desc: 'Precise fitting and programming of the robotic device to match the patient\'s body dimensions and therapeutic needs.' },
    { title: 'Assisted Gait Training Sessions', desc: 'Repetitive, high-intensity walking practice with the exoskeleton providing support and guidance, promoting neuroplastic changes in the brain and spinal cord.' },
    { title: 'Progressive Independence Training', desc: 'Gradual reduction of robotic assistance as the patient\'s own neuromuscular control improves, with goal of maximum independent mobility.' },
  ],
  benefits: [
    'Retrains brain-muscle walking pathways', 'High repetition gait practice not possible manually',
    'Improves upright posture and weight bearing', 'Reduces spasticity and muscle contractures',
    'Boosts cardiovascular health', 'Enhances patient motivation and confidence',
    'Measurable, data-driven progress tracking', 'Applicable at any stage post-injury',
  ],
  quickInfo: [
    { icon: '⏱️', label: 'Session Duration', value: '60 – 90 minutes' },
    { icon: '📅', label: 'Typical Program', value: '12 – 20 weeks' },
    { icon: '👨‍⚕️', label: 'Therapist', value: 'Neurological Physiotherapist' },
    { icon: '📍', label: 'Location', value: 'In-clinic Only' },
  ],
  whoFor: [
    'Stroke survivors with walking difficulties',
    'Patients with incomplete spinal cord injuries',
    'Parkinson\'s patients with gait freezing',
    'Those who have plateaued with conventional therapy',
    'Patients seeking intensive neurological rehab',
  ],
};

const RoboticGaitTherapy = () => <ServiceDetail service={service} />;
export default RoboticGaitTherapy;

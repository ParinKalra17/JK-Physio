import ServiceDetail from './ServiceDetail';

const service = {
  tag: 'Most Popular',
  title: 'Orthopedic Rehabilitation',
  tagline: 'Precision-guided therapy to restore joint, bone, and muscle function and get you moving pain-free again.',
  icon: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
      <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 28c2 4 5 6 8 6s6-2 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  overview:
    'Orthopedic rehabilitation focuses on restoring strength, mobility, and function to the musculoskeletal system — bones, joints, ligaments, tendons, and muscles. Whether you are recovering from an acute injury, managing chronic pain, or rehabilitating after surgery, our team creates a personalised program to meet your specific goals and get you back to daily life.',
  conditions: [
    'Lower Back Pain', 'Neck Pain & Stiffness', 'Knee Pain & Arthritis',
    'Shoulder Impingement', 'Hip Replacement Recovery', 'Frozen Shoulder',
    'Sciatica', 'Plantar Fasciitis', 'Tennis & Golfer\'s Elbow', 'Ligament Sprains',
  ],
  approach: [
    { title: 'Initial Assessment', desc: 'Comprehensive evaluation of posture, movement patterns, strength, and range of motion to identify root causes.' },
    { title: 'Manual Therapy', desc: 'Hands-on techniques including joint mobilisation, soft tissue massage, and myofascial release to reduce pain and restore mobility.' },
    { title: 'Therapeutic Exercise', desc: 'Customised progressive exercise programs to rebuild strength, flexibility, and neuromuscular control.' },
    { title: 'Functional Training', desc: 'Task-specific training to ensure a safe and confident return to work, sports, and daily activities.' },
  ],
  benefits: [
    'Significant reduction in pain', 'Improved joint mobility and flexibility',
    'Stronger muscles and better stability', 'Faster return to daily activities',
    'Reduced risk of re-injury', 'Improved posture and body mechanics',
    'Avoid or delay surgery', 'Long-term self-management strategies',
  ],
  quickInfo: [
    { icon: '⏱️', label: 'Session Duration', value: '45 – 60 minutes' },
    { icon: '📅', label: 'Typical Program', value: '6 – 12 weeks' },
    { icon: '👨‍⚕️', label: 'Therapist', value: 'Certified Ortho Physiotherapist' },
    { icon: '📍', label: 'Location', value: 'In-clinic & Home Visits' },
  ],
  whoFor: [
    'Patients with chronic joint or muscle pain',
    'Post-fracture or post-dislocation recovery',
    'Office workers with postural issues',
    'Elderly patients with mobility limitations',
    'Anyone avoiding or recovering from surgery',
  ],
};

const OrthopedicRehab = () => <ServiceDetail service={service} />;
export default OrthopedicRehab;

import ServiceDetail from './ServiceDetail';

const service = {
  tag: 'Surgical Care',
  title: 'Post-Surgical Recovery',
  tagline: 'Structured, phased rehabilitation following orthopaedic and other surgeries to minimise complications and accelerate your return to full activity.',
  icon: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect x="10" y="18" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 18v-4a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 28v4M20 30h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  overview:
    'Post-surgical rehabilitation is a critical phase of your overall treatment. Surgery corrects the structural problem — but physiotherapy is what restores your strength, movement, and confidence. Our phased approach ensures you progress safely through each stage of healing, from the early days post-operation through to full functional recovery and return to activity.',
  conditions: [
    'Total Knee Replacement', 'Total Hip Replacement', 'ACL Reconstruction',
    'Rotator Cuff Repair', 'Spinal Surgery Recovery', 'Shoulder Replacement',
    'Ankle Reconstruction', 'Meniscus Repair', 'Lumbar Discectomy', 'Fracture Fixation',
  ],
  approach: [
    { title: 'Pre-Surgical Preparation (Prehab)', desc: 'Strengthening and education before surgery to optimise your condition and set the stage for faster recovery.' },
    { title: 'Early Post-Op Phase', desc: 'Pain and swelling management, gentle mobility exercises, and protection of the surgical site in the first 1–6 weeks.' },
    { title: 'Strengthening & Mobility Phase', desc: 'Progressive exercises to rebuild muscle strength, joint range of motion, and functional movement patterns.' },
    { title: 'Return to Activity Phase', desc: 'Advanced functional training, sport or work-specific conditioning, and discharge planning for long-term independence.' },
  ],
  benefits: [
    'Faster post-operative recovery', 'Reduced swelling and scar tissue formation',
    'Restored joint range of motion', 'Rebuilt muscle strength and stability',
    'Reduced risk of post-surgical complications', 'Safe, guided return to work and sport',
    'Improved surgical outcomes', 'Boosted confidence during recovery',
  ],
  quickInfo: [
    { icon: '⏱️', label: 'Session Duration', value: '45 – 60 minutes' },
    { icon: '📅', label: 'Typical Program', value: '8 – 24 weeks (surgery dependent)' },
    { icon: '👨‍⚕️', label: 'Therapist', value: 'Orthopaedic Physiotherapist' },
    { icon: '📍', label: 'Location', value: 'In-clinic & Home Visits' },
  ],
  whoFor: [
    'Patients who have had joint replacement surgery',
    'Post-ligament reconstruction patients',
    'Anyone recovering from spinal surgery',
    'Patients wishing to start prehab before surgery',
    'Those with slow or complicated surgical recovery',
  ],
};

const PostSurgical = () => <ServiceDetail service={service} />;
export default PostSurgical;

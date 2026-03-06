import ServiceDetail from './ServiceDetail';

const service = {
  tag: 'Athletes',
  title: 'Sports Injury Management',
  tagline: 'Elite-level recovery protocols combining manual therapy, conditioning, and sport-specific rehabilitation for athletes at every level.',
  icon: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M12 36L24 12l12 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 28h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="10" r="3" fill="currentColor" />
    </svg>
  ),
  overview:
    'Sports injury management at JK Physiotherapy combines cutting-edge rehabilitation science with sport-specific training principles. Our approach goes beyond simply treating the injury — we analyse your movement, identify biomechanical risk factors, and build a complete return-to-sport program so you come back stronger, faster, and more resilient than before.',
  conditions: [
    'ACL & Ligament Tears', 'Muscle Strains & Pulls', 'Rotator Cuff Injuries',
    'Ankle Sprains', 'Shin Splints', 'Runner\'s Knee (PFPS)',
    'Stress Fractures', 'Hamstring Injuries', 'Groin Strains', 'Tennis Elbow',
  ],
  approach: [
    { title: 'Injury Diagnosis & Baseline Testing', desc: 'Detailed assessment of the injury, sport demands, and fitness baseline using functional movement screens.' },
    { title: 'Acute Phase Management', desc: 'Pain control, swelling reduction, and protection of injured structures using manual therapy and electrotherapy.' },
    { title: 'Strength & Conditioning Rehab', desc: 'Progressive loading and sport-specific strengthening to rebuild power, endurance, and agility safely.' },
    { title: 'Return-to-Sport Clearance', desc: 'Objective performance testing to confirm full readiness before returning to training and competition.' },
  ],
  benefits: [
    'Faster return to sport', 'Reduced risk of re-injury',
    'Improved athletic performance', 'Sport-specific movement retraining',
    'Biomechanical analysis & correction', 'Mental confidence in return to play',
    'Injury prevention strategies', 'Tailored to your sport and position',
  ],
  quickInfo: [
    { icon: '⏱️', label: 'Session Duration', value: '45 – 60 minutes' },
    { icon: '📅', label: 'Typical Program', value: '4 – 16 weeks (injury dependent)' },
    { icon: '👨‍⚕️', label: 'Therapist', value: 'Sports Physiotherapist' },
    { icon: '📍', label: 'Location', value: 'In-clinic & On-field' },
  ],
  whoFor: [
    'Amateur and professional athletes',
    'Gym-goers and fitness enthusiasts',
    'Weekend warriors and runners',
    'School and college-level sports players',
    'Anyone with a sports-related injury',
  ],
};

const SportsInjury = () => <ServiceDetail service={service} />;
export default SportsInjury;

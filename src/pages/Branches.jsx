import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const branches = [
  {
    id: 1,
    name: 'JK Physio — Udaipur',
    city: 'Udaipur',
    state: 'Rajasthan',
    address: 'Krishna Vatika, Opposite Brij Vihar, Near RK Circle, Pulla Bhuwana, Rupsagar, Udaipur, Rajasthan 313001',
    phone: '+91 99289 81863',
    hours: [
      { days: 'Mon – Sat', time: '8:00 AM – 8:00 PM' },
      { days: 'Sunday', time: '09:30 AM – 2:00 PM' },
    ],
    mapQuery: 'Krishna+Vatika+Opposite+Brij+Vihar+Near+RK+Circle+Pulla+Bhuwana+Rupsagar+Udaipur+Rajasthan',
    color: '#000000',
    badge: 'Main Branch',
    badgeColor: '#000000',
    landmark: 'Near RK Circle',
    isMain: true,
    udaipurExtra: false,
    bhilwaraExtra: false,
    ahmedabadExtra: false,
  },
  {
    id: 11,
    name: 'JK Physio — Udaipur (Branch 2)',
    city: 'Udaipur',
    state: 'Rajasthan',
    address: '402, 60 Feet Rd, Roop Nagar, Sector 3, Hiran Magri, Udaipur, Rajasthan 313002',
    phone: '+91 99289 81863',
    hours: [
      { days: 'Mon – Sat', time: '9:00 AM – 8:00 PM' },
      { days: 'Sunday', time: '9:00 AM – 1:00 PM' },
    ],
    mapQuery: '402+60+Feet+Road+Roop+Nagar+Sector+3+Hiran+Magri+Udaipur+Rajasthan',
    color: '#dc2626',
    badge: 'Branch',
    badgeColor: '#dc2626',
    landmark: '60 Feet Road, Hiran Magri Sector 3',
    isMain: false,
    udaipurExtra: true,
    bhilwaraExtra: false,
    ahmedabadExtra: false,
  },
  {
    id: 12,
    name: 'JK Physio — Udaipur (Branch 3)',
    city: 'Udaipur',
    state: 'Rajasthan',
    address: 'H46, Sector 14, Hiran Magri, Gordhan Vilas Rural, Udaipur, Rajasthan 313001',
    phone: '+91 99289 81863',
    hours: [
      { days: 'Mon – Sat', time: '8:00 AM – 8:30 PM' },
      { days: 'Sunday', time: '8:00 AM – 1:00 PM' },
    ],
    mapQuery: 'H46+Sector+14+Hiran+Magri+Gordhan+Vilas+Udaipur+Rajasthan',
    color: '#000000',
    badge: 'Branch',
    badgeColor: '#000000',
    landmark: 'Sector 14, Hiran Magri, Gordhan Vilas',
    isMain: false,
    udaipurExtra: true,
    bhilwaraExtra: false,
    ahmedabadExtra: false,
  },
  {
    id: 2,
    name: 'JK Physio — Bhilwara',
    city: 'Bhilwara',
    state: 'Rajasthan',
    address: 'K.P Tower, 2nd Floor, Near Mewar Hospital, R.C. Vyas Colony, Bhilwara, Rajasthan',
    phone: '+91 79765 00688',
    hours: [
      { days: 'Mon – Sat', time: '8:00 AM – 7:00 PM' },
      { days: 'Sunday', time: 'Closed' },
    ],
    mapQuery: 'K.P+Tower+R.C.+Vyas+Colony+Bhilwara+Rajasthan',
    color: '#dc2626',
    badge: 'Branch',
    badgeColor: '#dc2626',
    landmark: 'Near Mewar Hospital',
    isMain: false,
    udaipurExtra: false,
    bhilwaraExtra: false,
    ahmedabadExtra: false,
  },
  {
    id: 21,
    name: 'JK Physio — Bhilwara (Branch 2)',
    city: 'Bhilwara',
    state: 'Rajasthan',
    address: 'Keshav Porwal Hospital, R C Vyas Colony, Bhilwara, Rajasthan',
    phone: '+91 79765 00688',
    hours: [
      { days: 'Mon – Sat', time: '8:00 AM – 7:00 PM' },
      { days: 'Sunday', time: 'Closed' },
    ],
    mapQuery: 'Keshav+Porwal+Hospital+R+C+Vyas+Colony+Bhilwara+Rajasthan',
    color: '#000000',
    badge: 'Branch',
    badgeColor: '#000000',
    landmark: 'Keshav Porwal Hospital, R C Vyas Colony',
    isMain: false,
    udaipurExtra: false,
    bhilwaraExtra: true,
    ahmedabadExtra: false,
  },
  {
    id: 4,
    name: 'JK Physio — Ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    address: '601-603, Golden Square, Kalyan Chowk, Nikol, Ahmedabad, Gujarat',
    phone: '+91 91193 22486',
    hours: [
      { days: 'Mon – Sat', time: '8:00 AM – 8:00 PM' },
      { days: 'Sunday', time: '10:00 AM – 4:00 PM' },
    ],
    mapQuery: 'Golden+Square+Kalyan+Chowk+Nikol+Ahmedabad+Gujarat',
    color: '#000000',
    badge: 'Branch',
    badgeColor: '#000000',
    landmark: 'Golden Square Building, Kalyan Chowk, Nikol',
    isMain: false,
    udaipurExtra: false,
    bhilwaraExtra: false,
    ahmedabadExtra: false,
  },
  {
    id: 5,
    name: 'JK Physio — Shahibagh Ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    address: 'F 425 Sumel 11, Nr. Namaste circle, Shahibag. 380004',
    phone: '+91 91193 22486',
    hours: [
      { days: 'Mon – Sat', time: '8:00 AM – 8:00 PM' },
      { days: 'Sunday', time: '10:00 AM – 4:00 PM' },
    ],
    mapQuery: 'Sumel+11+Shahibag+Ahmedabad+Gujarat',
    color: '#dc2626',
    badge: 'Branch',
    badgeColor: '#dc2626',
    landmark: 'Nr. Namaste Circle, Shahibag',
    isMain: false,
    udaipurExtra: false,
    bhilwaraExtra: false,
    ahmedabadExtra: true,
  },
  {
    id: 3,
    name: 'JK Physio — Chittorgarh',
    city: 'Chittorgarh',
    state: 'Rajasthan',
    address: 'MES Hospital, 3rd Floor, Sector 5, Gandhi Nagar, Chittorgarh, Rajasthan',
    phone: '+91 79765 00688',
    hours: [
      { days: 'Mon – Sat', time: '9:00 AM – 7:00 PM' },
      { days: 'Sunday', time: 'Closed' },
    ],
    mapQuery: 'MES+Hospital+Gandhi+Nagar+Chittorgarh+Rajasthan',
    color: '#dc2626',
    badge: 'Branch',
    badgeColor: '#dc2626',
    landmark: 'Inside MES Hospital, 3rd Floor',
    isMain: false,
    udaipurExtra: false,
    bhilwaraExtra: false,
    ahmedabadExtra: false,
  },
  {
    id: 6,
    name: 'JK Physio — Gurugram',
    city: 'Gurugram',
    state: 'Haryana',
    address: '65J-01, Sector 83, Vatika Sector Service Road, Gurugram, HR-122004',
    phone: '+91 91193 12486',
    hours: [
      { days: 'Mon – Sat', time: '8:00 AM – 8:00 PM' },
      { days: 'Sunday', time: '10:00 AM – 4:00 PM' },
    ],
    mapQuery: 'Sector+83+Vatika+Gurugram+Haryana',
    color: '#000000',
    badge: 'Branch',
    badgeColor: '#000000',
    landmark: 'Vatika Sector Service Road, Sector 83',
    isMain: false,
    udaipurExtra: false,
    bhilwaraExtra: false,
    ahmedabadExtra: false,
  },
];

// ─── Branch Card ──────────────────────────────────────────────────────────────
const BranchCard = ({ branch, index, visible, showMoreUdaipur, onToggleMore, showMoreBhilwara, onToggleBhilwara, showMoreAhmedabad, onToggleAhmedabad }) => {
  const isUdaipurMain = branch.id === 1;
  const isBhilwaraMain = branch.id === 2;
  const isAhmedabadMain = branch.id === 4;

  return (
    <div
      id={`branch-${branch.id}`}
      className={`fade-up fade-up-delay-${index + 1} ${visible ? 'visible' : ''}`}
      style={{ background: 'white', borderRadius: '24px', border: '1px solid #f1f5f9', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
    >
      <div style={{ height: '6px', background: branch.color }} />

      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h3 className="text-xl font-bold text-slate-800">{branch.name}</h3>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${branch.badgeColor}15`, color: branch.badgeColor }}>
                {branch.badge}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.24 0 3 2.24 3 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 8 3.5a1.5 1.5 0 0 1 0 3z" />
              </svg>
              <span className="text-xs text-slate-400 font-medium">{branch.city}, {branch.state}</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0" style={{ backgroundColor: branch.color }}>
            {branch.city[0]}
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: '#f8faff', border: '1px solid #fff5f5' }}>
            <span className="text-lg flex-shrink-0">📍</span>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Address</div>
              <div className="text-sm text-slate-700 leading-relaxed">{branch.address}</div>
              <div className="text-xs mt-1.5 font-semibold" style={{ color: branch.color }}>🏷️ {branch.landmark}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: '#f8faff', border: '1px solid #fff5f5' }}>
            <span className="text-lg">📞</span>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</div>
              <a href={`tel:${branch.phone}`} className="text-sm font-semibold" style={{ color: branch.color, textDecoration: 'none' }}>{branch.phone}</a>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: '#f8faff', border: '1px solid #fff5f5' }}>
            <span className="text-lg flex-shrink-0">🕐</span>
            <div className="w-full">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Working Hours</div>
              {branch.hours.map((h, i) => (
                <div key={i} className="flex justify-between items-center text-sm mb-1">
                  <span className="text-slate-500">{h.days}</span>
                  <span className="font-semibold" style={{ color: h.time === 'Closed' ? '#dc2626' : '#1e293b' }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=JK+Physio+${branch.mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="map-btn w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white border-none cursor-pointer mb-3"
          style={{ background: `linear-gradient(135deg, ${branch.color}, ${branch.color}cc)`, textDecoration: 'none', boxShadow: `0 4px 14px ${branch.color}40`, display: 'flex' }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C5.24 0 3 2.24 3 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 8 3.5a1.5 1.5 0 0 1 0 3z" />
          </svg>
          Open in Google Maps →
        </a>

        {isUdaipurMain && (
          <button
            onClick={onToggleMore}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all"
            style={{ border: '2px dashed #dc2626', color: '#dc2626', background: '#fff5f5' }}
          >
            {showMoreUdaipur ? (
              <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>Hide Other Udaipur Branches</>
            ) : (
              <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>+2 More Branches in Udaipur</>
            )}
          </button>
        )}

        {isBhilwaraMain && (
          <button
            onClick={onToggleBhilwara}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all"
            style={{ border: '2px dashed #dc2626', color: '#dc2626', background: '#fff5f5' }}
          >
            {showMoreBhilwara ? (
              <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>Hide Other Bhilwara Branches</>
            ) : (
              <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>+1 More Branch in Bhilwara</>
            )}
          </button>
        )}

        {isAhmedabadMain && (
          <button
            onClick={onToggleAhmedabad}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all"
            style={{ border: '2px dashed #dc2626', color: '#dc2626', background: '#fff5f5' }}
          >
            {showMoreAhmedabad ? (
              <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>Hide Other Ahmedabad Branches</>
            ) : (
              <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>+1 More Branch in Ahmedabad</>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

// ─── Branches Page ─────────────────────────────────────────────────────────────
const Branches = ({ onHomePage = false }) => {
  const [visible, setVisible] = useState(false);
  const [showMoreUdaipur, setShowMoreUdaipur] = useState(false);
  const [showMoreBhilwara, setShowMoreBhilwara] = useState(false);
  const [showMoreAhmedabad, setShowMoreAhmedabad] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const visibleBranches = branches.filter((b) => (!b.udaipurExtra || showMoreUdaipur) && (!b.bhilwaraExtra || showMoreBhilwara) && (!b.ahmedabadExtra || showMoreAhmedabad));

  const handleToggleMore = () => {
    setShowMoreUdaipur((prev) => {
      if (prev) return false;
      setTimeout(() => {
        document.getElementById('branch-11')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      return true;
    });
  };

  const handleToggleBhilwara = () => {
    setShowMoreBhilwara((prev) => {
      if (prev) return false;
      setTimeout(() => {
        document.getElementById('branch-21')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      return true;
    });
  };

  const handleToggleAhmedabad = () => {
    setShowMoreAhmedabad((prev) => {
      if (prev) return false;
      setTimeout(() => {
        document.getElementById('branch-5')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      return true;
    });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Banner */}
      <div className="relative pt-40 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 50%, #fff5f5 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"></div>
        </div>

        {/* ✅ CHANGED: max-w-6xl px-6 → max-w-screen-xl px-12 */}
        <div className="max-w-screen-xl mx-auto px-12 relative">
          <div className="flex items-center gap-4 mb-8">
            {window.location.pathname !== '/' && (
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 text-brand text-sm font-semibold bg-white/70 px-4 py-2 rounded-full border border-red-100 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}

            <div className="inline-block bg-red-50 text-brand text-xs font-bold tracking-widest uppercase px-3 py-2 rounded-full">
              Our Locations
            </div>
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Find a Branch <span className="text-brand">Near You</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            JK Physiotherapy & Rehab has branches across Rajasthan and Gujarat, bringing world-class rehabilitation care closer to you.
          </p>

          <div className="flex flex-wrap gap-10 mt-10 pt-8 border-t border-red-100">
            {[['14', 'Branches'], ['5', 'States'], ['50000+', 'Patients Served'], ['16+', 'Years of Care']].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-slate-800">{num}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Branch Cards */}
      <section className="py-20" ref={sectionRef}>
        {/* ✅ CHANGED: max-w-6xl px-6 → max-w-screen-xl px-12 */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-12">

          <div className={`flex flex-wrap gap-3 justify-center mb-14 fade-up ${visible ? 'visible' : ''}`}>
            {branches.filter((b) => !b.udaipurExtra && !b.bhilwaraExtra && !b.ahmedabadExtra).map((b) => (
              <button
                key={b.id}
                onClick={() => document.getElementById(`branch-${b.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="city-btn px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all border-2"
                style={{ borderColor: b.color, color: b.color, backgroundColor: `${b.color}10` }}
              >
                📍 {b.city}
              </button>
            ))}
          </div>

          <div 
            className={onHomePage ? "flex overflow-x-auto pb-8 gap-8 horizontal-scroll-container" : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"}
            style={onHomePage ? {
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              paddingLeft: '4px',
              paddingRight: '4px',
            } : {}}
          >
            {visibleBranches.map((branch, i) => (
              <div 
                key={branch.id} 
                className={onHomePage ? "flex-shrink-0 snap-center mx-auto" : ""} 
                style={onHomePage ? { width: '380px', maxWidth: '85vw' } : {}}
              >
                <BranchCard
                  branch={branch}
                  index={i}
                  visible={visible}
                  showMoreUdaipur={showMoreUdaipur}
                  onToggleMore={handleToggleMore}
                  showMoreBhilwara={showMoreBhilwara}
                  onToggleBhilwara={handleToggleBhilwara}
                  showMoreAhmedabad={showMoreAhmedabad}
                  onToggleAhmedabad={handleToggleAhmedabad}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;
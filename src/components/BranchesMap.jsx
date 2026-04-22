const BranchesMap = () => (
  <div className="hidden lg:flex justify-center items-center">
    <div style={{ background: 'white', borderRadius: '28px', border: '0.5px solid #f0e8e8', boxShadow: '0 6px 40px rgba(192,57,43,0.08)', padding: '24px', width: '440px', minWidth: '420px', fontFamily: 'sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
        <div>
          <p style={{ fontSize: '10px', color: '#c0392b', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', margin: '0 0 2px' }}>Our Branches</p>
          <p style={{ fontSize: '20px', fontWeight: 700, color: '#1e293b', margin: 0 }}>
          14 Centres <span style={{ fontSize: '12px', fontWeight: 400, color: '#94a3b8' }}>· 5 Cities</span>
          </p>
        </div>
        <span style={{ background: '#fff0f0', color: '#c0392b', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '20px' }}>PAN India</span>
      </div>

      {/* Map Area */}
      <div style={{ background: 'linear-gradient(160deg,#fff8f8,#fdf4f4)', borderRadius: '18px', padding: '12px', marginBottom: '18px', border: '0.5px solid #fde8e8' }}>
        <svg width="100%" viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', minHeight: '250px' }}>

          <defs>
            <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#f5c6c6" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="300" height="230" fill="url(#grid)" rx="12" />

          {/* Connector lines */}
          <line x1="68" y1="48" x2="228" y2="55" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="5,5" opacity="0.3" />
          <line x1="68" y1="48" x2="45" y2="160" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="5,5" opacity="0.3" />
          <line x1="45" y1="160" x2="148" y2="130" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="5,5" opacity="0.3" />
          <line x1="148" y1="130" x2="190" y2="185" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="5,5" opacity="0.3" />
          <line x1="228" y1="55" x2="190" y2="185" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="5,5" opacity="0.3" />

          {/* Gurugram */}
          <circle cx="68" cy="48" r="5" fill="#c0392b" />
          <circle cx="68" cy="48" r="9" fill="#c0392b" opacity="0.12" />
          <rect x="80" y="33" width="84" height="30" rx="8" fill="white" stroke="#fde8e8" strokeWidth="1" />
          <text x="122" y="48" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e293b">Gurugram</text>
          <text x="122" y="59" textAnchor="middle" fontSize="9" fill="#94a3b8">Haryana · 1 centre</text>

          {/* Chittorgarh */}
          <circle cx="228" cy="55" r="5" fill="#c0392b" />
          <circle cx="228" cy="55" r="9" fill="#c0392b" opacity="0.12" />
          <rect x="140" y="40" width="84" height="30" rx="8" fill="white" stroke="#fde8e8" strokeWidth="1" />
          <text x="182" y="55" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e293b">Chittorgarh</text>
          <text x="182" y="66" textAnchor="middle" fontSize="9" fill="#94a3b8">Rajasthan · 1 centre</text>

          {/* Ahmedabad */}
          <circle cx="45" cy="160" r="5" fill="#c0392b" />
          <circle cx="45" cy="160" r="9" fill="#c0392b" opacity="0.12" />
          <rect x="58" y="145" width="84" height="30" rx="8" fill="white" stroke="#fde8e8" strokeWidth="1" />
          <text x="100" y="160" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e293b">Ahmedabad</text>
          <text x="100" y="171" textAnchor="middle" fontSize="9" fill="#94a3b8">Gujarat · 2 centres</text>

          {/* Bhilwara */}
          <circle cx="148" cy="120" r="5" fill="#c0392b" />
          <circle cx="148" cy="120" r="9" fill="#c0392b" opacity="0.12" />
          <rect x="160" y="105" width="78" height="30" rx="8" fill="white" stroke="#fde8e8" strokeWidth="1" />
          <text x="199" y="120" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e293b">Bhilwara</text>
          <text x="199" y="131" textAnchor="middle" fontSize="9" fill="#94a3b8">Rajasthan · 2</text>

          {/* Udaipur - subtle highlight */}
          <circle cx="190" cy="185" r="6" fill="#c0392b" />
          <circle cx="190" cy="185" r="11" fill="#c0392b" opacity="0.15" />
          <rect x="200" y="169" width="90" height="32" rx="8" fill="#fff0f0" stroke="#c0392b" strokeWidth="1.2" />
          <text x="245" y="184" textAnchor="middle" fontSize="11" fontWeight="700" fill="#c0392b">Udaipur ★</text>
          <text x="245" y="195" textAnchor="middle" fontSize="9" fill="#c0392b" opacity="0.7">Rajasthan · 5 centres</text>

        </svg>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
        {[['5', 'States'], ['14', 'Centres'], ['PAN', 'India']].map(([n, l]) => (
          <div key={l} style={{ background: '#fff0f0', borderRadius: '14px', padding: '10px 6px', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', fontWeight: 700, color: '#c0392b', margin: 0 }}>{n}</p>
            <p style={{ fontSize: '9px', color: '#c0392b', opacity: .65, margin: '2px 0 0', fontWeight: 500 }}>{l}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
);

export default BranchesMap;
const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => scrollTo('home')}>
              <div>
                  <img src="/Footerlogo.png" alt="JK Physio" style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Most Advanced Physiotherapy centre.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'services', 'about', 'testimonials', 'contact', 'doctors', 'our branches'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="footer-link text-slate-400 text-sm capitalize bg-transparent border-none cursor-pointer transition-colors"
                    style={{ transition: 'color 0.2s' }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Krishna Vatika, Opposite Brij Vihar, Near RK Circle, Pulla Bhuwana, Rupsagar, Udaipur, Rajasthan 313001</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+91 99289 81863" className="hover:text-red-400 transition-colors">+91 99289 81863</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="piyushdevpura@rediff.com" className="hover:text-red-400 transition-colors">piyushdevpura@rediff.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} JK Physiotherapy & Rehab. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
              <button
                key={item}
                className="text-slate-500 text-xs hover:text-slate-300 bg-transparent border-none cursor-pointer"
                style={{ transition: 'color 0.2s' }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

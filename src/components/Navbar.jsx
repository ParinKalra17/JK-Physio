import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = ['Home'];
  const goToDoctors = () => { navigate('/doctors'); setMenuOpen(false); };
  const goToBranches = () => { navigate('/branches'); setMenuOpen(false); };
  const goToTestimonials = () => { navigate('/testimonials'); setMenuOpen(false); };
  const goToServices = () => { navigate('/services'); setMenuOpen(false); };
  const goToAbout = () => { navigate('/about'); setMenuOpen(false); };


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src="/logo.png" alt="JK Physio" style={{ height: '100px', width: 'auto', objectFit: 'contain' }} />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}
              className="nav-link text-slate-600 hover:text-brand text-sm font-medium transition-colors pb-0.5 bg-transparent border-none cursor-pointer">
              {link}
            </button>
          ))}
          <button onClick={goToDoctors}
            className="nav-link text-slate-600 hover:text-brand text-sm font-medium transition-colors pb-0.5 bg-transparent border-none cursor-pointer">
            Our Doctors
          </button>
          <button onClick={goToBranches}
            className="nav-link text-slate-600 hover:text-brand text-sm font-medium transition-colors pb-0.5 bg-transparent border-none cursor-pointer">
            Branches
          </button>
          <button onClick={goToTestimonials}
            className="nav-link text-slate-600 hover:text-brand text-sm font-medium transition-colors pb-0.5 bg-transparent border-none cursor-pointer">
            Testimonials
          </button>
          <button onClick={goToServices}
            className="nav-link text-slate-600 hover:text-brand text-sm font-medium transition-colors pb-0.5 bg-transparent border-none cursor-pointer">
            Services
          </button>
          <button onClick={goToAbout}
            className="nav-link text-slate-600 hover:text-brand text-sm font-medium transition-colors pb-0.5 bg-transparent border-none cursor-pointer">
            About
          </button>
          <button onClick={() => scrollTo('contact')}
            className="btn-primary bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl border-none cursor-pointer">
            Book Appointment
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-2 bg-transparent border-none cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#334155', marginBottom: '4px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}></div>
          <div style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#334155', marginBottom: '4px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }}></div>
          <div style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#334155', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-3 max-h-screen overflow-y-auto">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}
              className="text-left text-slate-700 font-medium py-1 bg-transparent border-none cursor-pointer text-base">
              {link}
            </button>
          ))}
          <button onClick={goToDoctors}
            className="text-left text-slate-700 font-medium py-1 bg-transparent border-none cursor-pointer text-base">
            Our Doctors
          </button>
          <button onClick={goToBranches}
            className="text-left text-slate-700 font-medium py-1 bg-transparent border-none cursor-pointer text-base">
            Branches
          </button>
          <button onClick={goToTestimonials}
            className="text-left text-slate-700 font-medium py-1 bg-transparent border-none cursor-pointer text-base">
            Testimonials
          </button>
          <button onClick={goToServices}
            className="text-left text-slate-700 font-medium py-1 bg-transparent border-none cursor-pointer text-base">
            Services
          </button>
          <button onClick={goToAbout}
            className="text-left text-slate-700 font-medium py-1 bg-transparent border-none cursor-pointer text-base">
            About
          </button>
          <button onClick={() => scrollTo('contact')}
            className="btn-primary bg-brand text-white font-semibold px-5 py-3 rounded-xl mt-2 border-none cursor-pointer">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
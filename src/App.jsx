import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Doctors from './pages/Doctors';
import Branches from './pages/Branches';
import OrthopedicRehab from './pages/services/OrthopedicRehab';
import SportsInjury from './pages/services/SportsInjury';
import PostSurgical from './pages/services/PostSurgical';
import RoboticGaitTherapy from './pages/services/RoboticGaitTherapy';

const WithLayout = ({ children }) => (
  <div className="min-h-screen bg-white">
    <Navbar />
    {children}
    <Footer />
  </div>
);

const HomePage = () => (
  <WithLayout>
    <Hero />
    <About />
    <Contact />
  </WithLayout>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<WithLayout><Doctors /></WithLayout>} />
        <Route path="/branches" element={<WithLayout><Branches /></WithLayout>} />
        <Route path="/services/orthopedic-rehab" element={<WithLayout><OrthopedicRehab /></WithLayout>} />
        <Route path="/services/sports-injury" element={<WithLayout><SportsInjury /></WithLayout>} />
        <Route path="/services/post-surgical" element={<WithLayout><PostSurgical /></WithLayout>} />
        <Route path="/services/robotic-gait-therapy" element={<WithLayout><RoboticGaitTherapy /></WithLayout>} />
        <Route path="/services/orthopedic-rehab" element={<WithLayout><OrthopedicRehab /></WithLayout>} />
        <Route path="/testimonials" element={<WithLayout><Testimonials /></WithLayout>} />
        <Route path="/services" element={<WithLayout><Services /></WithLayout>} />
        <Route path="/about" element={<WithLayout><About /></WithLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

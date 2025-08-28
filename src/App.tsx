import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeatureSection from './components/FeatureSection';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF5' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
    </div>
  );
}

import homeBackground from '../assets/hero-img.png';
import travelokaLogo from '../assets/traveloka-logo.png';

export default function HeroSection() {
  return (
    <section className="mt-[22px] mx-[20px]">
      <div 
        className="relative h-[733px] bg-cover bg-center bg-no-repeat flex items-center rounded-[20px] overflow-hidden"
        style={{ backgroundImage: `url(${homeBackground})` }}
      >
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-[#FFFFFF] px-[70px] max-w-3xl">
          <h1 className="font-['Abhaya_Libre'] italic text-[96px] leading-[1.1] mt-[30px] mb-[65px] font-medium">
            Experience Nature<br />in Luxury
          </h1>
          
          <p className="font-['Poppins'] text-[20px] mb-[65px] leading-[1.6] max-w-[500px]">
            Wake up to the breeze of pine trees and the sound of a flowing river. LuxCamp brings you into touch with nature without sacrificing comfort.
          </p>
          
          <button className="bg-[#FFFFFF] text-[#111827] font-['Poppins'] font-semibold text-[16px] w-[200px] h-[50px] rounded-[10px] hover:bg-[#f0f0f0] hover:scale-105 transition-all duration-300 mb-[40px] shadow-lg">
            Book Now
          </button>
          
          {/* Traveloka Logo */}
          <div className="flex flex-col items-start">
            <span className="font-['Poppins'] text-[20px] mb-[8px] text-[#FFFFFF]">Available for</span>
            <img 
              src={travelokaLogo} 
              alt="Traveloka" 
              className="h-[32px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
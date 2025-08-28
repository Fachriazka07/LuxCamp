import React, { useState, useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate first counter (20+)
            let start1 = 0;
            const end1 = 20;
            const duration1 = 2000;
            const increment1 = end1 / (duration1 / 16);
            
            const timer1 = setInterval(() => {
              start1 += increment1;
              if (start1 >= end1) {
                setCount1(end1);
                clearInterval(timer1);
              } else {
                setCount1(Math.floor(start1));
              }
            }, 16);
            
            // Animate second counter (10K+)
            let start2 = 0;
            const end2 = 10000;
            const duration2 = 2000;
            const increment2 = end2 / (duration2 / 16);
            
            const timer2 = setInterval(() => {
              start2 += increment2;
              if (start2 >= end2) {
                setCount2(end2);
                clearInterval(timer2);
              } else {
                setCount2(Math.floor(start2));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const formatCount = (count: number, suffix: string) => {
    if (suffix === 'K+') {
      return count >= 10000 ? '10K+' : `${Math.floor(count / 1000)}K+`;
    }
    return `${count}+`;
  };

  return (
    <section ref={sectionRef} className="mt-[128px] mx-[20px]">
      {/* About us heading */}
      <div className="text-center mb-[40px]">
        <h2 className="font-['Playfair_Display'] text-[24px] text-[#155B59] font-bold">
          About us
        </h2>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-2 gap-[60px] items-center">
        {/* Left column - Text and buttons */}
        <div className="flex flex-col">
          {/* Main title */}
          <h1 className="font-['DM_Serif_Display'] text-[72px] text-[#04403E] font-normal leading-[1.1] mb-[20px]">
            Glamping in the Heart of Nature
          </h1>
          
          {/* Paragraph */}
          <p className="text-[20px] text-[#000000] leading-[1.6] mb-[51px] font-['Poppins']">
            Enjoy a good night's sleep amidst the gurgling river and lush pine forest. LuxCamp combines the natural nuances of Pangalengan with complete facilities and warm service, making every night feel like coming home.
          </p>
          
          {/* Buttons */}
          <div className="flex gap-[51px] mb-[51px]">
            <button className="w-[189px] h-[59px] bg-[#155B59] text-[#FFFFFF] rounded-[20px] font-['Poppins'] font-medium text-[16px] transition-all duration-300 hover:bg-[#0d4a47] hover:scale-105 hover:shadow-lg">
              Learn More
            </button>
            <button className="w-[189px] h-[59px] bg-[#FFFFFF] text-[#155B59] rounded-[20px] font-['Poppins'] font-medium text-[16px] border-2 border-[#155B59] shadow-md transition-all duration-300 hover:bg-[#155B59] hover:text-[#FFFFFF] hover:scale-105 hover:shadow-xl">
              Book Now
            </button>
          </div>
          
          {/* Statistics */}
          <div className="flex gap-[80px]">
            <div className="flex flex-col">
              <span className="text-[48px] font-bold bg-gradient-to-r from-[#04403E] to-[#4B8C4A] bg-clip-text text-transparent font-['Poppins']">
                {formatCount(count1, '+')}
              </span>
              <span className="text-[20px] text-[#000000] font-['Poppins'] mt-[8px]">
                Service & Activities
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[48px] font-bold bg-gradient-to-r from-[#04403E] to-[#4B8C4A] bg-clip-text text-transparent font-['Poppins']">
                {formatCount(count2, 'K+')}
              </span>
              <span className="text-[20px] text-[#000000] font-['Poppins'] mt-[8px]">
                Happy Campers
              </span>
            </div>
          </div>
        </div>
        
        {/* Right column - Image */}
        <div className="flex justify-center">
          <div className="w-[610px] h-[577px] bg-gray-300 rounded-[50px] overflow-hidden">
            <img 
              src="/src/assets/about-image.png" 
              alt="Glamping experience" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
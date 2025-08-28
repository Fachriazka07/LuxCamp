import React from 'react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: '/src/assets/icon/feature1.png',
      title: 'Luxury in the Wilderness',
      description: 'Our tents are equipped with plush beds, private bathrooms, and elegant interiors — all set within a tranquil forest.'
    },
    {
      icon: '/src/assets/icon/feature2.png',
      title: 'Full-Board Dining',
      description: 'Enjoy delicious local and international meals, served fresh from breakfast to dinner, without leaving the camp.'
    },
    {
      icon: '/src/assets/icon/feature3.png',
      title: 'Surrounded by Nature',
      description: 'Wake up to the sounds of birds and the gentle river stream. Every stay is immersed in pine forests and fresh mountain air.'
    },
    {
      icon: '/src/assets/icon/feature4.png',
      title: 'Unique Outdoor Experiences',
      description: 'From guided forest walks and tea garden tours to campfire nights, each experience is curated to create lasting memories.'
    },
    {
      icon: '/src/assets/icon/feature5.png',
      title: 'Privacy & Serenity',
      description: 'Escape the noise. Each cabin is spaced for total privacy, allowing you to fully relax and recharge in peace.'
    },
    {
      icon: '/src/assets/icon/feature6.png',
      title: 'Easy Access from the City',
      description: 'Just 1.5 hours from Bandung. A scenic ride brings you straight into nature — no difficult trekking required.'
    }
  ];

  return (
    <section className="bg-[#FAFAF6] py-20 px-8 mt-[128px] mx-[20px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="font-['Playfair_Display'] text-[22px] text-[#155B59] text-left mb-0">
              Why us?
            </h3>
            <h2 className="font-['DM_Serif_Display'] text-[64px] text-[#04403E] leading-[1.1] max-w-[500px]">
              Why staying in our cabins?
            </h2>
          </div>
          
          <div className="flex gap-[20px]">
            <button className="w-[124px] h-[48px] bg-[#155B59] text-[#FFFFFF] rounded-[20px] font-['Poppins'] font-medium text-[16px] transition-all duration-300 hover:bg-[#0d4a47] hover:scale-105">
              Book Now
            </button>
            <button className="w-[155px] h-[48px] bg-[#FFFFFF] border-2 border-[#155B59] text-[#155B59] rounded-[20px] font-['Poppins'] font-medium text-[16px] transition-all duration-300 hover:bg-[#155B59] hover:text-[#FFFFFF] hover:scale-105">
              See all Cabins
            </button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img 
                src={feature.icon} 
                alt={feature.title}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="font-['Poppins'] font-bold text-[24px] text-[#0F2C2C] mb-2">
                {feature.title}
              </h3>
              <p className="font-['Poppins'] text-[16px] text-gray-600 leading-[1.6] max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
export default function Navbar() {
  return (
    <nav className="pt-[22px] px-[20px]">
      <div className="flex items-center justify-between gap-5">
        {/* Logo */}
        <div className="font-abhaya font-bold text-[32px] tracking-wide-10">
          <span style={{ color: '#B98C6B' }}>LUX</span>
          <span style={{ color: '#04403E' }}>CAMP</span>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center gap-[30px]">
          {["Home", "Tent", "Activities", "Gallery", "Book"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-['Poppins'] text-[20px] text-[#111827] no-underline hover:text-[#04403E] hover:scale-105 transition-all duration-300 font-medium relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#04403E] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="bg-[#04403E] text-[#FFFFFF] font-['Poppins'] font-semibold text-[16px] 
                     w-[150px] h-[38px] rounded-[10px] shadow-lg 
                     hover:scale-105 hover:bg-[#3D6C4F] hover:shadow-xl 
                     transition-all duration-300"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}

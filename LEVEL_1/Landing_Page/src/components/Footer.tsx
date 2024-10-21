const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-8 py-10 md:py-20 bg-[#F1F1F1] w-full">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Our Growing Online Community
      </h1>
      <p className="w-[90%] sm:w-[80%] md:w-[60%] text-center text-sm md:text-base text-slate-500">
        Connect with a community of individuals who share your vision, unlocking boundless opportunities and fostering personal growth as you pursue success.
      </p>

      <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-[#2E89AD]">
        <a onClick={()=> window.location.href = "https://www.google.com"} className="flex flex-col items-center">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">360K+</h1>
          <p className="text-sm md:text-base">LinkedIn community</p>
        </a>
        <a onClick={()=> window.location.href = "https://www.google.com"} className="flex flex-col items-center">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">110K+</h1>
          <p className="text-sm md:text-base">Telegram community</p>
        </a>
        <a onClick={()=> window.location.href = "https://www.google.com"} className="flex flex-col items-center">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">30K+</h1>
          <p className="text-sm md:text-base">Instagram community</p>
        </a>
        <a onClick={()=> window.location.href = "https://www.google.com"} className="flex flex-col items-center">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">80K+</h1>
          <p className="text-sm md:text-base">Facebook community</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;

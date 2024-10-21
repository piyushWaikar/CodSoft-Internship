const HeroSection_1 = () => {
  return (
    <div className="h-screen w-full flex items-center  ">
      <div className="h-[80%] w-full overflow-hidden relative">
        <img
          className="object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1636955816868-fcb881e57954?auto=format&fit=crop&w=1920"
          alt=""
        />
        <div className="absolute z-50 flex flex-col w-full h-full top-0 justify-center gap-20 items-center">
          <h1 className="tracking-tighter text-6xl text-amber-950">Take Your Career to the Next Level with <b>CodSoft</b> </h1>
          <h2 className="text-3xl font-medium">Join Our Exciting Internship Journey</h2>
          <button className="py-2 px-12 rounded-3xl text-xl bg-blue-500">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection_1;

const Card3 = () => {
  return (
    <div className="w-full flex justify-center my-28 lg:my-20">
      <div className="w-[95%] lg:w-[90%] flex flex-col items-center justify-center gap-6 lg:gap-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full lg:w-[40rem] text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
              Unlock Your Creativity
            </h1>
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-slate-600">
              At CodSoft, we believe that creativity is the heart of innovation. Our internship program is designed to help you tap into your creative potential and bring your ideas to life. Through our hands-on approach, you'll learn how to develop new products, design user interfaces, and build software that solves real-world problems. Join us today and discover your inner artist.
            </h3>
            <button className="py-2 px-4 h-12 w-32 sm:w-36 rounded-3xl text-base sm:text-lg bg-blue-500 mx-auto lg:mx-0 text-white">
              Enroll
            </button>
          </div>
          <img
            className="object-cover h-[15rem] sm:h-[18rem] md:h-[20rem] w-full lg:w-[30rem]"
            src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/colorlessbitesizedkob-size_restricted-dWxMw6VeVnhwvlpy.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card3;

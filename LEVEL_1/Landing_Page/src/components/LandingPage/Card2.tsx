import { motion } from 'framer-motion';

const Card2 = () => {
  const scrollVariantsLeft = {
    initial: {
      opacity: 0,
      x: -300,
    },
    view: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const scrollVariantsRight = {
    initial: {
      opacity: 0,
      x: 300,
    },
    view: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div className="flex flex-col w-full justify-center gap-24 p-8 md:p-16">
      <motion.div className="lg:w-[80%] w-full flex flex-col items-center justify-center gap-8 self-start">
        <motion.div
          variants={scrollVariantsLeft}
          initial="initial"
          whileInView="view"
          viewport={{ margin: "100px" }}
          className="flex flex-col lg:flex-row gap-6 md:gap-12"
        >
          <motion.img
            className="object-cover h-[15rem] w-full md:h-[20rem] lg:w-[25rem]"
            src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/web-development-2-YX4ZEeEEnwI13r0K.gif"
            alt=""
          />
          <motion.div className="flex flex-col gap-4 md:gap-8 w-full lg:w-[40rem]">
            <motion.h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-8">
              E-Commerce Development.
            </motion.h1>
            <motion.h3 className="text-sm md:text-base lg:text-xl text-slate-700">
              Our talented web development team has years of experience building websites from small to large.
            </motion.h3>
            <motion.h3 className="text-sm md:text-base lg:text-xl text-slate-700">
              We deliver projects with 100% user satisfaction.
            </motion.h3>
            <motion.h3 className="text-sm md:text-base lg:text-xl text-slate-700">
              Whatever functionality you need for the web, we will implement it.
            </motion.h3>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="lg:w-[80%] w-full flex flex-col items-center justify-center gap-8 self-end">
        <motion.div
          variants={scrollVariantsRight}
          initial="initial"
          whileInView="view"
          viewport={{ margin: "100px" }}
          className="flex flex-col lg:flex-row gap-6 md:gap-12"
        >
          <motion.div className="flex flex-col gap-4 md:gap-8 w-full lg:w-[40rem]">
            <motion.h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-8">
              Need a website for your business?
            </motion.h1>
            <motion.h3 className="text-sm md:text-base lg:text-xl text-slate-700">
              Want to sell your products online?
            </motion.h3>
            <motion.h3 className="text-sm md:text-base lg:text-xl text-slate-700">
              We often develop E-commerce solutions for businesses who want to sell their products or services online.
            </motion.h3>
            <motion.h3 className="text-sm md:text-base lg:text-xl text-slate-700">
              Let's move your products online...
            </motion.h3>
            <motion.button className="py-2 px-4 h-12 w-full md:w-36 rounded-3xl text-xl bg-blue-500 mx-auto">
              Contact Us
            </motion.button>
          </motion.div>
          <motion.img
            className="object-cover h-[15rem] w-full sm:h-[20rem] md:h-[20rem] lg:w-[25rem]"
            src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/ecom1.5-AGBrlQWV28Tk33nJ.gif"
            alt=""
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card2;

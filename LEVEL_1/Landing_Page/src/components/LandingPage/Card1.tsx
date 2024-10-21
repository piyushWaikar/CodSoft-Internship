import { motion } from 'framer-motion';

const TextVariant = {
  open: {
    opacity: 0,
  },
  view: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const listVariantsX = {
  open: {
    x: -100,
    opacity: 0,
  },
  view: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const listVariantsY = {
  open: {
    y: -100,
    opacity: 0,
  },
  view: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Card1 = () => {
  return (
    <div className="flex w-full justify-center bg-[#E7EDF0] h-auto lg:h-[80vh] py-10 lg:py-0">
      <motion.div
        variants={TextVariant}
        initial="open"
        whileInView="view"
        viewport={{ margin: '-100px' }}
        className="w-[90%] lg:w-[80%] flex flex-col items-center justify-center gap-6 lg:gap-8"
      >
        <motion.h1
          variants={listVariantsX}
          className="text-2xl sm:text-3xl md:text-4xl underline tracking-tight text-[#4B8196] font-bold text-center"
        >
          We Provide All Exclusive Services For Clients
        </motion.h1>
        <motion.div
          variants={TextVariant}
          className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12"
        >
          <motion.img
            variants={listVariantsX}
            className="object-cover h-[200px] sm:h-[250px] md:h-[280px] lg:h-[310px] w-full lg:w-[379px]"
            src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/bb375cdd655184ca2715ac5059e73651-YX4ZEeZEvbhrMMZa.gif"
            alt=""
          />
          <motion.div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full lg:w-[40rem]">
            <motion.h1
              variants={listVariantsY}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-8 text-center lg:text-left"
            >
              We build websites and web applications.
            </motion.h1>
            <motion.h3
              variants={listVariantsY}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 text-center lg:text-left"
            >
              Today, every business should have a website.
            </motion.h3>
            <motion.h3
              variants={listVariantsY}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 text-center lg:text-left"
            >
              No matter how small or large your business, having a website is a must-have at this time.
            </motion.h3>
            <motion.h3
              variants={listVariantsY}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 text-center lg:text-left"
            >
              Having a website helps you maintain your online presence.
            </motion.h3>
            <motion.button
              variants={listVariantsY}
              className="py-2 px-4 h-12 w-32 sm:w-36 rounded-3xl text-base sm:text-xl bg-blue-500 mx-auto lg:mx-0"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card1;

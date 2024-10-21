import { motion } from 'framer-motion';

const TextVariant = {
  hidden: {
    opacity: 0,
  },
  view: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listVariants = {
  hidden: {
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

const InfoCard = () => {
  return (
    <motion.div
      variants={TextVariant}
      initial="hidden"
      whileInView="view"
      viewport={{ margin: '-100px', once: true }}
      className="flex flex-col w-full h-auto py-8  lg:h-[50vh] px-6 sm:px-12 md:px-24 lg:px-40 gap-6 sm:gap-8 bg-[#003329] text-white"
    >
      <motion.h1
        variants={listVariants}
        className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg decoration-1"
      >
        Who We Are
      </motion.h1>
      <motion.h3
        variants={listVariants}
        className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7"
      >
        <motion.b variants={listVariants} className="text-white">CodSoft</motion.b> are IT services and IT consultancy that specializes in
        creating innovative solutions for businesses. We are passionate about
        technology and believe in the power of software to transform the world.
        Our internship program is just one of the ways in which we are investing
        in the future of the industry.
      </motion.h3>
      <motion.h3
        variants={listVariants}
        className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7"
      >
        At <b className="text-white">CodSoft</b>, we believe practical knowledge is the key to success
        in the tech industry. Our aim is to help students lacking basic skills
        by offering hands-on learning through live projects and real-world
        examples.
      </motion.h3>
    </motion.div>
  );
};

export default InfoCard;

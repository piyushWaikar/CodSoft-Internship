import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Parallex = () => {
const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const nYText = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const nYBg = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const XBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
  <div ref={ref} className="relative h-[26vh] sm:h-[50vh] md:h-[60vh] lg:h-[115vh] w-full overflow-hidden flex justify-center items-center bg-[#f9f9f9]">
    <motion.div style={{ y: yText, opacity: nYText }}
      className="z-10 flex absolute flex-col w-full h-full justify-center gap-4 md:gap-20 items-center px-4 text-center">
      <motion.h1
        className="tracking-tighter text-[#C63C51] drop-shadow-2xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
        Take Your Career to the Next Level with <b>CodSoft</b>
      </motion.h1>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white drop-shadow-lg">
        Join Our Exciting Internship Journey
      </h2>
      <button
        className="py-2 px-6 sm:px-8 md:px-12 rounded-3xl text-lg hidden sm:block text-white font-semibold bg-blue-500">
        Apply
      </button>
    </motion.div>
    <motion.img style={{ y: XBg }} className="absolute top-0 left-0 w-full h-auto" src="hill1.png" id="hill1" alt="" />
    <motion.img className="absolute top-0 left-0 w-full h-auto" src="hill2.png" id="hill2" alt="" />
    <motion.img className="absolute top-0 left-0 w-full h-auto" src="hill3.png" id="hill3" alt="" />
    <motion.img style={{ x: nYBg }} className="absolute top-0 left-0 w-full h-auto" src="hill4.png" id="hill4" alt="" />
    <motion.img style={{ x: yBg }} className="absolute top-0 left-0 w-full h-auto" src="hill5.png" id="hill5" alt="" />
    <motion.img style={{ x: yBg }} className="absolute top-0 left-0 w-full h-auto" src="tree.png" id="tree" alt="" />
    <motion.img style={{ x: yBg }} className="absolute top-0 left-0 w-full h-auto" src="leaf.png" id="leaf" alt="" />
    <motion.img style={{ zIndex: 18 }} className="absolute top-0 left-0 w-full h-auto" src="plant.png" id="plant"
      alt="" />
  </div>
  );
  };

  export default Parallex;
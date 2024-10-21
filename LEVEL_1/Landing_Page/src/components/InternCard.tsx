import {motion} from "framer-motion"

const LoadingVariants = {
  initial:{
    y:-50,
    opacity:0,
    scale:0.9
  },
  view:{
    y:0,
    opacity:1,
    scale:1,
    transition:{
      delay:0.2,
      when:"beforeChildren",
    }
  },
}

const whileRender = {
  initial:{
    y:-50,
    opacity:0,
    scale:0.8
  },
  view:{
    y:0,
    opacity:1,
    scale:1,
    transition:{
      type:"spring",
      stifness:1000
    }
  }
}

const whileRenderX = {
  initial:{
    x:-100,
    opacity:0,
    scale:0.8
  },
  view:{
    x:0,
    opacity:1,
    scale:1,
    transition:{
      type:"spring",
      stifness:1000,
      delay:0.2
    }
  }
}

const InternCard = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <motion.div variants={LoadingVariants} initial="initial" whileInView="view" viewport={{margin:"-100px", once:true}} className="flex flex-col justify-center items-center shadow-md shadow-purple-700 rounded-xl gap-4 p-4 relative pb-20">
        <motion.img
          className="object-contain h-[15rem] w-[20rem] rounded-[6rem] "
          src={img}
          alt={title}
        />
      <motion.h2 variants={whileRender} viewport={{margin:"-100px", once:true }} className="text-3xl font-semibold">{title}</motion.h2>
      <motion.p variants={whileRender} viewport={{margin:"-100px", once:true}}>{desc}</motion.p>
      <motion.button variants={whileRenderX} initial="initial" whileInView="view" viewport={{margin:"-10px"}} className="py-2 px-6 rounded-3xl bg-[#00AEF2] absolute bottom-5 text-white text-lg">Apply</motion.button>
    </motion.div>
  );
};

export default InternCard;



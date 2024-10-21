import { motion } from "framer-motion";

const formVariant = {
  open: {
    opacity: 0,
  },
  close: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const listVariants = {
  open: {
    x: -100,
    opacity: 0,
  },
  close: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ContactForm = () => {
  return (
    <motion.div
      variants={formVariant}
      initial="open"
      whileInView="close"
      viewport={{ margin: "-100px",once:true }}
      className="flex flex-col mb-10"
    >
      <motion.h1
        variants={listVariants}
        className="text-center font-semibold text-5xl mb-9"
      >
        Get in Touch
      </motion.h1>
      <motion.label variants={listVariants} htmlFor="firstName">
        First Name
      </motion.label>
      <motion.input
        variants={listVariants}
        className="mb-7 border-[1px] border-slate-400 px-3 py-2 rounded-md text-lg h-[3.2rem] w-[24rem] focus:outline-purple-700"
        type="text"
        name="firstName"
        placeholder="Your First Name"
      />
      <motion.label variants={listVariants} htmlFor="lastName">
        Last Name
      </motion.label>
      <motion.input
        variants={listVariants}
        className="mb-7 border-[1px] border-slate-400 px-3 py-2 rounded-md text-lg h-[3.2rem] w-[24rem] focus:outline-purple-700"
        type="text"
        name="lastName"
        placeholder="Your Last Name"
      />
      <motion.label variants={listVariants} htmlFor="email">
        Email
      </motion.label>
      <motion.input
        variants={listVariants}
        className="mb-7 border-[1px] border-slate-400 px-3 py-2 rounded-md text-lg h-[3.2rem] w-[24rem] focus:outline-purple-700"
        type="email"
        name="email"
        placeholder="Your Email Address"
      />
      <motion.label variants={listVariants} htmlFor="message">
        Message
      </motion.label>
      <motion.textarea
        variants={listVariants}
        className="mb-7 border-[1px] border-slate-400 px-3 py-2 rounded-md text-lg h-[8.2rem] w-[24rem] focus:outline-purple-700"
        name="message"
        placeholder="Enter your message"
      ></motion.textarea>
      <motion.button
        variants={listVariants}
        className="px-4 py-2 w-[8rem] self-center text-white rounded-md text-2xl bg-green-600 font-semibold"
      >
        Submit
      </motion.button>
    </motion.div>
  );
};

export default ContactForm;

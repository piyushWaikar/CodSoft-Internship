import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ value, onClick, className }) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    className={`bg-indigo-500 text-white font-bold py-3 rounded ${className}`}
    onClick={() => onClick(value)}
  >
    {value}
  </motion.button>
);

export default Button;

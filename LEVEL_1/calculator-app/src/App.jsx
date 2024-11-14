import React, { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import { motion } from "framer-motion";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "←") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "←",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "+",
    "/",
    "%",
    "=",
    "C",
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: "25rem" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-gray-900 p-4 rounded-lg shadow-xl max-w-xs w-full"
      >
        <Display input={result || input} />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1, // Adjust the stagger delay between each button
                delayChildren: 0.3, // Initial delay for the first button
              },
            },
          }}
          className="grid grid-cols-4 gap-4 mt-4"
        >
          {buttons.map((btn, idx) => (
            <motion.div
            className={btn === "=" ? "col-span-2 bg-green-500 rounded-md" : ""}
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button
                value={btn}
                onClick={handleClick}
                className={btn === "=" ? "col-span-2 bg-green-500 w-full" : " w-full"}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;

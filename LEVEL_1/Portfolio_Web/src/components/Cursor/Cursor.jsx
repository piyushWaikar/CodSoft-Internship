import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';
import './Cursor.scss'

const Cursor = () => {
    const [position, setPosition] = useState({x:0,y:0});

    useEffect(()=>{
        const mouseMove = (e)=>{
            setPosition({x:e.clientX, y:e.clientY});
        };

        window.addEventListener("mousemove",mouseMove);

        //cleanup function needed for useEffect so that when the window is close it should clouse the mouseMove function:-
        return () =>{
            window.removeEventListener("mousemove",mouseMove);
        }
    },[]);
  return (
    <motion.div animate={{x:position.x+10, y:position.y+10}} className='cursor'></motion.div>
  )
}

export default Cursor
import React from 'react'
import { motion } from 'framer-motion'


const Skill = ({name, x, y}) => {


  return (
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
    py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{scale:1.05}}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y}}
      transition={{duration: 1.2}}
      >
     {name}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <>
     <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
     <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
     lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">


          <Skill name="Programming" x="0" y="0" />
          <Skill name="Computer-Aided Design" x="-5vw" y="-10vw" />
          <Skill name="Computer-Aided Machining" x="-20vw" y="-4vw" />
          <Skill name="Finite Element Analysis" x="0vw" y="11vw" />
          <Skill name="Computational Simulations" x="15vw" y="-12vw" />
          <Skill name="C, C#, C++" x="-20vw" y="-15vw" />
          <Skill name="Inventor" x="0vw" y="-20vw" />
          <Skill name="SolidWorks" x="18vw" y="18vw" />
          <Skill name="Visual Basics" x="-20vw" y="15vw" />
          <Skill name="Javascript" x="20vw" y="5vw" />
          <Skill name="Python" x="-30vw" y="0vw" />
          <Skill name="MATLAB" x="0vw" y="20vw" />
          <Skill name="Bootstrap" x="10vw" y="-7vw" />
          <Skill name="LabVIEW" x="30vw" y="-4vw" />

     </div>
    </>
  )
}

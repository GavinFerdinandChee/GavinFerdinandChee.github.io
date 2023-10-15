import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <div className=' font-bold text-xl'>
                @&nbsp; {place}
            </div>

            <span className="capitalize font-medium text-dark/75 dark:text-dark/75 xs:text-sm">
                {time} | {place}
            </span>

            <p className="font-medium w-full md:text-sm">
                {info}
            </p>
        </motion.div>
    </li>
}

export default function Education() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Education
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md-w-[2px] md:left-[30px] xs:left-[20px]
            " />

                <ul className="w-full flex flex-col items-start justify-between ml-4">

                    <Details
                        type="Bachelors of Engineering with Honours in Mechanical Engineering, Specialisation in Mechatronics"
                        time="2022-2023"
                        place="Singapore Institute of Technology - University of Glasgow"
                        info="Currently, I am enrolled in a full-time Bachelor's program in Mechanical Engineering with Honours, specialising in Mechatronics. This program is accredited by the University of Glasgow and offered through a joint collaboration with the Singapore Institute of Technology, ensuring a comprehensive and globally recognized education. As part of my academic journey, I recently participated in a student exchange program to the University of Glasgow, enriching my academic and cultural experiences."
                    />

                    <Details
                        type="Diploma/Associates Degree in Mechatronics & Robotics"
                        time="2017-2020"
                        place="Singapore Polytechnic"
                        info="During my tenure at Singapore Polytechnic, I pursued a diploma in Mechatronics and Robotics, broadening my knowledge in this field. Simultaneously, I made significant contributions to the school's Solar Racing Team, notably in the development of the SunSPEC 6 vehicle. I further expanded my expertise through a Diploma Plus program, earning a certificate in Aviation Management. Beyond academics, I was an active member of the SP Rotaract Club's executive committee, where I spearheaded the planning and execution of various community service-based events. This role enabled me to collaborate with beneficiaries and sister clubs from other institutions, further enhancing my leadership and community engagement skills."
                    />

                    <Details
                        type="Higher Nitec Certification in Mechatronics Engineering"
                        time="2015-2017"
                        place="Institute of Technical Education"
                        info="Graduating as a Silver Course Medallist with distinctions in 4 of 8 core modules, I achieved significant recognition, including the Lee Kuan Yew Technology Award and the esteemed OMRON Book Award, earned twice during my academic journey. My dedication was further reflected in my consistent position on the Director's List for four consecutive semesters. Beyond academics, I proudly represented my institution and Singapore in an overseas exchange program to Yamagata University in Japan in 2015."
                    />
                </ul>
            </div>
        </div>
    )
}

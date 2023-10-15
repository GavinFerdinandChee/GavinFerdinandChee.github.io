import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, time, address, work }) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}
            </h3>
            <div className=' font-bold text-2xl'>
                @&nbsp; {company}
            </div>

            <span className="capitalize font-medium text-dark/75 dark:text-dark/75 xs:text-sm">
                {time} | {address}
            </span>

            <p className="font-medium w-full md:text-sm">
                {work}
            </p>
        </motion.div>
    </li>
}

export default function Volunteering() {
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
                Volunteer Work and Extra Curricular Activities
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px] 
            " />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

                    <Details
                        position="Director of Club Services (2018) || Community Service Sub-Committee Member (2017)"
                        company="SP Rotaract"
                        time="2017 - 2018"
                        address="Singapore Polytechnic"
                        work="During my involvement with the SP Rotaract Club, I played a pivotal role in fostering positive change within our community. As the Club Service Director and a Community Service Sub-Committee Member, I dedicated my time and energy to leading and participating in numerous charitable initiatives. Notably, I worked closely with various beneficiaries to organize and execute impactful community service events, such as educational trips for less fortunate children, food donation drives, and initiatives promoting active lifestyles for youths. These experiences reinforced the importance of empathy and giving back, allowing me to grow as a person and instilling the values of compassion and community welfare within me."
                    />

                    <Details
                        position="President"
                        company="Automation & Robotics Club"
                        time="2015 - 2016"
                        address="Institute of Technical Education, College West"
                        work="During my tenure with the Automation and Robotics Club, I actively contributed to the club's goals and objectives. I took the initiative to scout events and opportunities for the club and mechatronics course to participate in, facilitating our involvement in various competitions and exhibitions, including the Singapore Robotic Games. Additionally, I played a role in recruiting potential participants for these events, ensuring our club's active engagement in promoting robotics and automation. My efforts aimed to foster innovation and enthusiasm within the club and make a positive impact on the robotics community."
                    />
                </ul>
            </div>
        </div>
    )
}

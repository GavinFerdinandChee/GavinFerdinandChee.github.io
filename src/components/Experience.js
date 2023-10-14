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

export default function Experience() {
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
                Experience
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px] 
            " />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

                    <Details
                        position="Rigid Hull Inflatable Boat Operator and Coxswain"
                        company="Republic of Singapore Navy"
                        time="July 2020 - July 2022"
                        address="San Francisco, CA"
                        work="During my 2- years conscription in Singapore, I served as a Rigid Hull Inflatable Boat (RHIBs) Coxswain and Operator, 
                        responsible for ensuring the safety and operational readiness of our naval base. 
                        I led a team of 12 in executing vital tasks, including sea investigations, 
                        foreign vessel screenings, and intruder intercepts, 
                        contributing to the overall security and smooth operation of our naval base.."
                    />

                    <Details
                        position="SunSPEC 6 Programming Team Leader & Systems Scrutineer (Singapore Polytechnic Solar Racing Team)"
                        company="Bridgestone World Solar Challenge"
                        time="October 2018 - October 2019"
                        address="San Francisco, CA"
                        work="As the programming team lead for a diverse team of 16 engineering students, 
                        I spearheaded the development of a sophisticated wireless telemetry system and an innovative dashboard interface using Python and Embedded C. 
                        My skill set extends beyond programming, as I'm also well-versed in CAD design and mechanical fabrication. 
                        I played a pivotal role in the fabrication of critical mechanical components and electrical fixtures, 
                        contributing significantly to the vehicle's braking and double wishbone suspension systems."
                    />
                </ul>
            </div>
        </div>
    )
}

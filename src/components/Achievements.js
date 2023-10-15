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

export default function Achievements() {
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
                Achievements & Competitions
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px] 
            " />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

                    <Details
                        position="Full-Stack Software Engineer Student"
                        company="App Academy"
                        time="September 2022 - March 2022"
                        address="San Francisco, CA"
                        work="As a software engineering student, I've developed full-stack projects using Javascript, Python, React, Redux, and SQL. I'm well-versed in agile methodologies and test-driven development, and have honed my teamwork skills through collaborative work with my peers."
                    />

                    <Details
                        position="Business Owner"
                        company="eCommerce Business"
                        time="February 2016 - November 2022"
                        address="San Francisco, CA"
                        work="Drove revenue growth through process improvements and enhanced operational efficiency. Coordinated activities across departments, including production, pricing, sales, and distribution, to achieve optimal outcomes. Established a strong business foundation with technical skills and best practices for sustainable daily operations."
                    />


                    <Details
                        position="Lead Operations"
                        company="JP Morgan Chase"
                        time="August 2021 - June 2022"
                        address="San Francisco, CA"
                        work="Led day-to-day operations, ensuring smooth efficiency. Conducted audits of cash entities, improving compliance and reducing risk. Managed staff schedules and delegated duties for productivity and customer satisfaction. Adhered to high quality standards, fostering a culture of excellence with the team."
                    />


                    <Details
                        position="Production Lead"
                        company="Charlotte Russe"
                        time="July 2015 - October 2017"
                        address="San Francisco, CA"
                        work="Managed inventory schedules to meet budget and delivery requirements. Conducted quality assurance tests to ensure high-quality products. Coordinated shipments and monitored orders to prevent delays or disruptions."
                    />
                </ul>
            </div>
        </div>
    )
}

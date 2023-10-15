import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import SunSPEC_6 from "../../public/images/projects/SunSPEC_6.jpg"
import Scotch_Yoke_Slider_Crank_AGV from "../../public/images/projects/Scotch_Yoke_Slider_Crank_AGV.png"
import Adaptive_End_Effector_6_DOF_AGV from "../../public/images/projects/Adaptive_End_Effector_6_DOF_AGV.png"
import Thermoelectric_Chiller from "../../public/images/projects/Thermoelectric_Chiller.png"
import Robot_Dog from "../../public/images/projects/Robot_Dog.jpg"


const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            " />
            <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            > 
                <Image src={img} alt={title} className="w-full h-auto rounded-md hover:scale-105 transition  duration-300 ease-in-out" priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl  xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold  sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark">{summary}</p>

                <div className="mt-2 flex items-center">
                <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                
                sm:px-4 sm:text-base
                ">Visit Project/Testimonial</Link>
                </div>
            </div>

        </article>
    )
}

export default function Projects() {
  return (
    <>
        <Head>
            <title>Gavin Ferdinand | Projects Showcase</title>
            <meta name="description" content="any description you want" />
        </Head>

        <TransitionEffect />
        
        <main className=' w-full mb-16 flex flex-col items-center justify-center '>
            <Layout className="pt-16">
                <AnimatedText 
                text="Imagination Trumps Knowledge!" 
                className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                />
                <div className="grid grid-cols-12 gap-24 pt-5 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                    <div className="col-span-12">
                        <FeaturedProject 
                        type="SunSPEC 6: Singapore Polytechnic's Final Solar Powered Vehicle"
                        title="Bridgestone World Solar Challenge"
                        summary="The Bridgestone World Solar Challenge in Australia marked a pivotal chapter in the SunSPEC 6 project, 
                        a collaborative effort that brought together 16 student engineers from diverse disciplines, 
                        alongside 4 staff engineers. 
                        I led a hybrid sub-team in Singapore, 
                        where our mission was to create a cutting-edge wireless telemetry system and a seamless dashboard interface for the solar vehicle. 
                        We worked with a plethora of technologies, from Raspberry Pi and Arduinos to advanced FPGA controllers like CompactRIO, 
                        skillfully combining programming languages such as embedded C, Python, and LabVIEW. Our role extended to intricate aspects like electrical motor control, 
                        wishbone suspension, and braking system design, crucial for optimal vehicle weight distribution. 
                        In Australia, I took charge of a dedicated sub-team responsible for programming, 
                        electronics, and telemetry. As the Programming and Telemetry Team Captain, 
                        I ensured the vehicle's software and electronic systems ran efficiently and safely. 
                        Additionally, I was one of the 3 student engineers overseeing the stringent static & dynamic scrutineering process to qualify for the race, 
                        a testament to the collective dedication and hard work of our diverse team."
                        img={SunSPEC_6}
                        link=""
                        github=""//"https://github.com/GavinFerdinandChee"
                        />
                    </div>

                    <div className="col-span-12">
                        <FeaturedProject 
                            type="Advanced Automated Guided Vehicle (AGV): Pushing Design Boundaries with Complex Mechanisms"
                            title="Year 3 || Singapore Polytechnic"
                            summary="Led a team of 4 throughout the development of an AGV with scotch-yoke and slider-crank mechanisms, 
                            demonstrating expertise in mechanical design and PIC microcontroller programming. 
                            This AGV featured a scotch-yoke mechanism for gripping and a slider-crank mechanism for precise positioning. 
                            I spearheaded the entire project, from fabrication to programming, 
                            highlighting my expertise in both mechanical design and PIC microcontroller programming. 
                            This project became a hallmark, providing an invaluable reference for subsequent batches, as it exemplified the innovative standards we established."
                            img={Scotch_Yoke_Slider_Crank_AGV}
                            link=""
                            github=""//"https://github.com/GavinFerdinandChee"
                        />
                    </div>

                    <div className="col-span-12">
                        <FeaturedProject 
                            type="Innovative AGV with 6-DOF Robotic Arm and Adaptive End Effector: Exploring New Horizons in Robotics"
                            title="Year 2 || Singapore Polytechnic"
                            summary="I led a team of 4 in the comprehensive development of an AGV equipped with a 6 DOF robot arm and adaptive end effector of our design, 
                            enabling precise object pick-and-place capabilities. I oversaw the project from design and fabrication to programming, 
                            showcasing my expertise in electronic design and logic control. To further enhance functionality. 
                            This project set benchmarks, serving as an exemplary reference for future batches, showcasing the innovative standards we achieved."
                            img={Adaptive_End_Effector_6_DOF_AGV}
                            link=""
                            github=""//"https://github.com/GavinFerdinandChee"
                        />
                    </div>

                    <div className="col-span-12">
                        <FeaturedProject 
                            type="Revolutionizing Cooling Technology: The Thermoelectric Innovation Journey"
                            title="Lee Kuan Yew Technology Award 2017 || Merit Award for the Energy Innovation Challenge 2016"
                            summary="I led a team of three in pioneering the exploration of emerging thermoelectric cooler technologies. 
                            We delved into the applications of the Peltier and Seebeck effects, creating an innovative refrigeration unit. 
                            Utilizing the Peltier effect, we implemented precise temperature control through PID logic with an Arduino, optimizing efficiency. 
                            Our project made a mark by winning the Merit Award for Energy Innovation Challenge by The Institution of Engineers, 
                            Singapore, and the prestigious Lee Kuan Yew Technology Award in 2017, a recognition awarded to only 10 teams. As the team leader, 
                            I oversaw the entire development process, from mechanical design and fabrication to electrical schematics, and programming, 
                            ensuring a successful and award-winning project."
                            img={Thermoelectric_Chiller}
                            link=""
                            github=""//"https://github.com/GavinFerdinandChee"
                        />
                    </div>

                    <div className="col-span-12">
                        <FeaturedProject 
                            type="Exploring the Future: Building a Quadruped Robot with Open-Source Innovation"
                            title="Open Dynamic Robot Initiative"
                            summary="As a passionate robotics engineer, I'm continually seeking new challenges to test my skills and push the boundaries of technology. 
                            My next venture involves the development of a quadruped robot using open-source resources from initiatives like the Open Dynamic Robot Initiative. 
                            This project isn't just about building a robot; it's about exploring the possibilities and honing my abilities in robotics engineering. 
                            Stay tuned for updates on this exciting journey as I embark on this innovative and educational endeavor to create a functional and versatile quadruped robot, showcasing the power of open-source technology in the field of robotics."
                            img={Robot_Dog}
                            link=""
                            github=""//"https://github.com/GavinFerdinandChee"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

import React, {useRef, useEffect} from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Profile from "../../public/images/profile/profile_2.png"
import Image from 'next/image'
import { useMotionValue, useSpring, useInView } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Education from '@/components/Education'
import Volunteering from '@/components/Volunteering'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 5000})
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}


export default function About() {
  return (
    <>
        <Head>
            <title>Gavin Ferdinand | About Page</title>
            <meta name="description" content="About Gavin Ferdinand Chee" />
        </Head>

        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center ">
            <Layout className="pt-16">
            <AnimatedText text="Passion Fuels Purpose! " className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">About Me</h2>
                    <p className="font-medium"> 
                    Hey! I'm Gavin, a versatile mechatronics engineering student with an unquenchable thirst for exploring new technology and bringing innovative concepts to life. I firmly believe that engineering is the key to unlocking new frontiers of creativity and problem-solving. My proficiency extends to pioneering the development of cutting-edge technologies,, from developing an advanced telemetry system for a solar-powered vehicle to crafting intelligent robotic systems with unique, innovative mechanisms and designs. all while maintaining a strong command of various programming languages and platforms.
                    
                    </p>
                    <p className="font-medium my-4"> 
                    In addition to my technical pursuits, I am equally passionate about giving back to my community. As an active volunteer, I've dedicated my time to various charitable initiatives by spearheading various events as an executive committee member of SP Rotaract. I worked closely with various beneficiaries and various events to spread joy and welfare to the less fortunate. These experiences have not only enriched my life but also shaped my core values of empathy and the importance of contributing to the well-being of others.
                    </p>

                    <p className="font-medium"> 
                    Whether I'm developing an intricate engineering system, a robotic prototype, or any digital product, my unwavering commitment to design excellence and user-centric thinking remains at the core of every project I take on. I'm eagerly looking forward to the next opportunity to apply my skills in our next venture.
                    </p>
                </div>
                <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8  dark:border-light xl:col-span-4 md:order-1 md:col-span-8">   
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                        <Image src={Profile} 
                        className="w-full h-auto rounded-2xl" 
                        priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                        alt="Profile Picture" />
                </div>

                <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">

                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={25} />+ 
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Technologies Learned</h2>
                    </div>

                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                        <AnimatedNumbers value={5} />+ 
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projects Completed</h2>
                    </div>


                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                        <AnimatedNumbers value={2} />+ 
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Years of Experience</h2>
                    </div>
                </div>
            </div>
            <Skills />
            <Experience />

            <Education />
            <Volunteering />
            </Layout>
        </main>
    </>
    )
}
// insert @ line 102 <Achievements />
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon } from './Icons'
import { LinkedInIcon } from './Icons'
import { motion } from "framer-motion"

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();


    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} onClick={handleClick} className={`${className} relative group text-light  my-2`}>
            {title}

            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} `}
            >&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {

        setIsOpen(!isOpen)
    }

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between  relative z-10 lg:px-16 md:px-12 sm:px-8">

            <button onClick={handleClick} className="flex-col justify-center items-center hidden lg:flex">
                <span className={`bg-dark  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? `rotate-45 translate-y-1` : `-translate-y-0.5`}`}></span>
                <span className={`bg-dark  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? `opacity-0` : `opacity-100`}`}></span>
                <span className={`bg-dark  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? `-rotate-45 -translate-y-1` : `translate-y-0.5`}`}></span>
            </button>


            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="Experience" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                    {/* <CustomLink href="/articles" title="Articles" className="ml-4"   /> */}
                </nav>


                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://github.com/GavinFerdinandChee" target={"_blank"}
                        whileHover={{ y: -2 }}
                        className="w-6 mr-3"
                        whileTap={{ scale: 0.9 }}
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/gavin-/" target={"_blank"}
                        whileHover={{ y: -2 }}
                        className="w-6 mr-3 "
                        whileTap={{ scale: 0.9 }}
                    >
                        <LinkedInIcon />
                    </motion.a>

                </nav>
            </div>

            {
                isOpen ?
                    <div className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-dark/90 rounded-lg backdrop-blur-md py-32">
                        <nav className="flex flex-col items-center justify-center">
                            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                            <CustomMobileLink href="/about" title="Experience" className="" toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
                            {/* <CustomLink href="/articles" title="Articles" className="ml-4"   /> */}
                        </nav>


                        <nav className="flex items-center justify-center flex-wrap">
                            <motion.a href="https://github.com/GavinFerdinandChee" target={"_blank"}
                                whileHover={{ y: -2 }}
                                className="w-6 mx-3"
                                whileTap={{ scale: 0.9 }}
                            >
                                <GithubIcon />
                            </motion.a>
                            <motion.a href="https://www.linkedin.com/in/Gavin-/" target={"_blank"}
                                whileHover={{ y: -2 }}
                                className="w-6 mx-3 "
                                whileTap={{ scale: 0.9 }}
                            >
                                <LinkedInIcon />
                            </motion.a>

                        </nav>
                    </div>
                    : null
            }



            <div className="absolute left-[50%] top-2 translates-x-[-50%]">
                <Logo />
            </div>

        </header>
    )
}

export default NavBar
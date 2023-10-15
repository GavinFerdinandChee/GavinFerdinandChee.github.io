import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Profile from "../../public/images/profile/profile.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'
import React, { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [modal, setModal] = useState(false)
  const handleModal = (e) => {setModal(!modal)}
  const handleSubmit = async (e) => {e.preventDefault()}

  return (
    <>
      <Head>
        <title>Gavin Ferdinand Chee's Portfolio</title>
        <meta name="description" content="Developed By Gavin Ferdinand Chee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={Profile}
                alt="Profile Image"
                className="w-2/3 h-auto lg:hidden md:inline-block md:w-2/3 "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Gavin Ferdinand Chee Robotics Engineer" className="!text-6xl !text-left  
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
                " />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I'm an aspiring engineer with a strong passion for programming, computer-aided design and fabrication.
                Explore my passions and latest projects as i push boundaries of what's possible in this field.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href="https://drive.google.com/file/d/1j08-yH7p-VuNKzLWngheaRExPIFZM2MI/view?usp=sharing" // Input gdrive resume here as url https://docs.google.com/document/d/xxxxxxxxx/edit?usp=sharing
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >Resume <LinkArrow className="w-6 ml-1" /> </Link>
                <button  onClick={handleModal} className="ml-4 text-lg font-medium capitalize text-dark underline md:text-base"></button>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

// @ line 64      <HireMe modal={modal} />
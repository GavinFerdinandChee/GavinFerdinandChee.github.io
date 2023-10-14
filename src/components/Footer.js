import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
        <Layout className="py-8 flex items-center gap-5 justify-center lg:flex-col lg:py-6">
            <span className="text-center">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            
        </Layout>
    </footer>
  )
}

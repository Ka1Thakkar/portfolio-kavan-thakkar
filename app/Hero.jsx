import Image from 'next/image'
import Main from './assets/components/Home'
import Experience from './assets/components/experience/Experience'
import { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import About from '@/app/assets/components/About/About'
import Work from "@/app/assets/components/work/Work"
import Contact from '@/app/assets/components/Contact/Contact'
import Navbar from './assets/components/Navbar'
import Cursor from './assets/components/Cursor/Cursor'

const hamburgerButton = () => {
    return (
        <section>
            <Navbar />
            <Main />
            <About />
            <Work />
            <Experience />
            <Contact />
        </section>
    );
}
 
export default hamburgerButton;
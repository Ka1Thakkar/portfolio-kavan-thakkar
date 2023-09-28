import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './Link';
import Image from 'next/image';
import home from '@/app/assets/public/Home.png'
import about from '@/app/assets/public/About.png'
import work from '@/app/assets/public/Work.png'
import contact from '@/app/assets/public/Contact.png'
import experience from '@/app/assets/public/Experience.png'

const navItems = [
  {
    title: "Home",
    href: "/",
    image : home
  },
  {
    title: "About",
    href: "/about",
    image : about
  },
  {
    title: "Work",
    href: "/work",
    image: work
  },
  {
    title: "Experience",
    href: "/experience",
    image: experience
  },
  {
    title: "Contact",
    href: "/contact",
    image : contact
  },
]

export default function Menu() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={" h-full w-full bg-[#282827] fixed top-0 right-0 text-white"}
      >
       <div className={" box-border h-full p-10 lg:p-20 flex flex-col justify-between"}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col lg:text-[5vw] text-5xl gap-[12px] mt-5 lg:mt-[80px]">
                    {
                      navItems.map( (data, index) => {
                        return(
                          <div className='flex gap-10 items-center'>
                            <Link 
                            key={index} 
                            data={{...data, index}} 
                            isActive={selectedIndicator == data.href} 
                            setSelectedIndicator={setSelectedIndicator}>
                            </Link>
                            <Image src={data.image} alt={data.title} className=' object-contain w-[50px] md:w-max' />
                          </div>
                        )
                      })
                    }
            </div>
            <div className="flex w-full justify-between text-sm lg:text-2xl text-[#D7BDA3]">
                <a>Awwwards</a>
                <a>Instagram</a>
                <a>Dribble</a>
                <a>LinkedIn</a>
            </div>
        </div>
    </motion.div>
  )
}
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import { DM_Serif_Display } from "next/font/google";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { Inter } from "next/font/google";
import ssms from '@/app/assets/components/work/assets/SSMS_Mess_Menu.png'
import spotify from '@/app/assets/components/work/assets/2023-09-23 18_43_12-About.jsx - portfolio-kavan-thakkar - Visual Studio Code.png'
import scienomath from '@/app/assets/components/work/assets/2023-08-05 16_45_35-ScienoMath - Brave.png'
import americana from '@/app/assets/components/work/assets/2023-08-05 17_00_24-Americana Restaurant - Las Vegas, NV - Brave.png'
import styles from '@/app/assets/components/work/style.module.scss'
import {BsArrowUpRight} from 'react-icons/bs'
import underline from '@/app/assets/public/Underline_darks.png'
import food from '@/app/assets/public/Mess_Food.png'
import headphones from '@/app/assets/public/Headphones.png'
import atom from '@/app/assets/public/atom.png'
import menu from '@/app/assets/public/Menu.png'

const DM = DM_Serif_Display({weight:['400'], subsets:['latin']})
const inter = Inter({weight:['400', '700'], subsets:['latin']})


const Work = () => {

    const work = [
      {
        Project: "SSMS Mess Menu",
        Link: "",
        Code: "",
        Image: ssms,
        description: "Mess Menu website for the students of BITS Pilani.",
        techused: ["HTML", "TailwindCSS","Javascript", "Nextjs"],
        color: "bg-darkolive",
        textcolor: "text-sagegreen",
        doodle : food
      },
      {
        Project: "ScienoMath",
        Link: "",
        Code: "",
        Image: scienomath,
        description: "Online Education Service.",
        techused: ["Framer Motion", "TailwindCSS","Javascript", "Nextjs"],
        color : "bg-bglightblue",
        textcolor : "text-orange-600",
        doodle : atom
      },
      {
        Project: "Spotify Clone",
        Link: "",
        Code: "",
        Image: spotify,
        description: "The name says it all, I guess.",
        techused: ["Typescript", "TailwindCSS","Supabase", "Nextjs"],
        color : "bg-olivegreen",
        textcolor: "text-darkolive",
        doodle : headphones
      },
      {
        Project: "Americana Restaurant",
        Link: "",
        Code: "",
        Image: americana,
        description: "Landing Page Clone.",
        techused: ["Typescript", "TailwindCSS","Supabase", "Nextjs"],
        color : "bg-textbrown",
        textcolor : "text-sagegreen",
        doodle : menu
      },
    ]

    const text = useRef(null)
    const element = useRef(null)
    const time = useRef(null)

    useEffect(() => {
        (
          async() => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll()
          }
        )()
    },[])

    return (
        <section ref={element} className="bg-beige min-h-screen py-20 flex flex-col items-center px-5 lg:px-10 xl:px-40 2xl:px-40 relative">
          <div  data-scroll data-scroll-speed="0.15" className="flex flex-col justify-center items-center">
            <h1 className={DM.className + " text-black flex justify-center text-[7.5vh] md:text-[7.5vw] text-center"} ref={text}>My Work</h1>
            <Image src={underline} alt="underline" className="w-9/12 lg:w-full object-cover mt-[-40px]" />
          </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center pt-5 gap-10">
              {work.map((item, i)=>(
                <div key={i} data-scroll data-scroll-speed = {i%2 === 0 ? "0.15" : "0.1"} className={" flex flex-col justify-center h-[50vh] rounded-xl gap-5"}>
                  <div className={item.color + " rounded-xl pt-40 pl-5 lg:pl-10 overflow-hidden relative " + styles.linkdiv}>
                    <div className="absolute top-10 left-5 lg:left-10 pr-10 flex gap-2 items-start">
                      <div className="w-8/12">
                        <h1 className="lg:text-4xl text-2xl font-black">{item.Project}</h1>
                        <p className={" pt-2 font-medium text-sm lg:text-lg " + item.textcolor}>{item.description}</p>
                      </div>
                      <div className="w-3/12 rotate-12">
                        <Image src={item.doodle} alt="Food" className=" object-cover" />
                      </div>
                    </div>
                    <Link href={item.Code} className="absolute right-5 lg:right-10 top-10 cursor-none">
                      <div id="dp" className=" rounded-full bg-white text-black text-xl p-2">
                        <BsArrowUpRight />
                      </div>
                    </Link>
                    <Link href={item.Link} >
                      <Image id="link" src={item.Image} className={" rounded-tl-xl object-cover shadow-xl shadow-black " + styles.linkdiv} />
                    </Link>
                  </div>
                  {/* <div className="lg:p-10 p-5 flex flex-col justify-between bg-white/70 rounded-xl">
                    <div>
                      <h1 className="md:text-5xl text-2xl font-black">{item.Project}</h1>
                      <p className="pt-5 md:text-xl font-medium">{item.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 pb-10 text-center gap-2 pt-5 lg:w-1/2">
                        {item.techused.map((items, i)=>(
                          <div key={i} className="bg-sagegreen/80 backdrop-blur-md rounded-full py-1 md:py-2 px-2">
                            <h1 className="font-medium text-sm">{items}</h1>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link href={item.Code}><button id="link" className={"bg-sanddollar p-2 rounded-lg font-light " + styles.linkdiv}>View Code</button></Link>
                  </div> */}
                </div>
              ))}
            </div>
        </section>
    );
}
 
export default Work;
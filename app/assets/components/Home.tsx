import Image from "next/image";
import bg from "@/app/assets/public/city_in_the_clouds_by_tatasz_d8yebbu 1.png"
import { DM_Serif_Display } from "next/font/google";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap, { Power1, Power2 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {IoInformationSharp} from 'react-icons/io5';
import styles from '@/app/assets/components/style.module.scss'
import Info from '@/app/assets/components/information/Info'

const DM = DM_Serif_Display({weight:["400"], subsets:["latin"]})

const Main = () => {

    const imageRef = useRef(null)
    const documentRef = useRef(null)
    const scrollRef = useRef(null)

    useEffect(() => {
        (
          async() => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll()
          }
        )()
    },[])

    useLayoutEffect(()=> {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(imageRef.current, {
            scrollTrigger: {
                trigger: documentRef.current,
                start:"top",
                end: "bottom",
                scrub:true,
            },
            height:"100vh",
            width:"100vw",
            position: "100px",
            borderRadius: "0px",
            borderWidth : "4px",
        })

        gsap.to(scrollRef.current, {y: 20, repeat:-1, duration:1.5, ease: Power2.easeIn, yoyo: true})
    })

    return (
        <section id="home" className=" bg-beige w-full h-screen relative" ref={documentRef}>
            <div className="absolute w-full h-full flex items-center justify-center">
                <Image src={bg} alt="background image" style={{objectFit: "cover"}} className="w-[60vw] h-[80vh] brightness-[110%] rounded-xl border-0 border-black " ref={imageRef} />
            </div>
            <div data-scroll data-scroll-speed = "0.7" className="absolute z-10 flex flex-col justify-center items-center w-full h-full  text-6xl sm:text-8xl md:text-9xl lg:text-[175px] xl:text-[200px] 2xl:text-[250px]">
                <p className={DM.className + " text"}>HI I'M KAVAN</p>
                <p className={DM.className + " text " + styles.textoutline} id="textoutline">HI I'M KAVAN</p>
                <p className={DM.className + " text"}>HI I'M KAVAN</p>
            </div>
            <div className="absolute rotate-90 bottom-20 right-2" ref={scrollRef}>
                <Link href={"#about"}><h1>{"Scroll --->"}</h1></Link>
            </div>
        </section>
    );
}
 
export default Main;
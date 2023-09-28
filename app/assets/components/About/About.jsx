import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import { DM_Serif_Display } from "next/font/google";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import dp from '@/app/assets/public/Dp_Edited.png'
import { Inter } from "next/font/google";
import underline from '@/app/assets/public/Underline.png'

const DM = DM_Serif_Display({weight:['400'], subsets:['latin']})
const inter = Inter({weight:['100','400', '700','200','300','500'], subsets:['latin']})

const absolute = () => {
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
    
      useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(text.current,{
            scrollTrigger:{
                trigger: element.current,
                start:"-600px top",
                end : "top",
                scrub: true,
            },
            opacity: 100,
            ease:"SlowMo",
            paddingTop:"0px",
        })

        // gsap.to(element.current, {
        //     scrollTrigger : {
        //         trigger : element.current,
        //         start : "300px botttom",
        //         end: "bottom bottom",
        //         scrub: true,
        //     },
        //     backgroundColor : "#909193"
        // })
        const timeline = gsap.timeline({
            scrollTrigger : {
                trigger:element.current,
                start:"bottom-=40% top",
                end: "bottom-=15% top",
                scrub: true,
            }
        })

        timeline.to(element.current,{backgroundColor: "#FAE8C8", ease: "SlowMo"})
    },[])
    return (
        <section id="about" ref={element} className=" min-h-screen relative bg-black py-20 px-10">
            <div  data-scroll data-scroll-speed="0.1" className="flex flex-col justify-center items-center">
                <h1 ref={text} className={DM.className + " text-[#D7BDA3] flex justify-center text-[7.5vw] opacity-0 pt-[100px] text-center"}>A little something about me</h1>
                <div className=" h-[5px] w-9/12 lg:w-full flex items-center justify-center">
                    <Image src={underline} alt="underline" className=" object-cover" />
                </div>
            </div>
            <div ref={time} className="w-full flex flex-col lg:flex-row justify-center items-center text-white gap-2 lg:gap-32 pt-5">
                <div  data-scroll data-scroll-speed="0.1" id="dp" className="w-10/12 lg:w-4/12 border-4 border-olivegreen rounded-[200px] p-2">
                    <div className="border-2 rounded-[200px] border-sagegreen p-2">
                        <Image alt="myimage" src={dp} className={" rounded-[200px] bg-white "} />
                    </div>
                </div>
                <p id="about-text" data-scroll data-scroll-speed="0.075" className={inter.className + " w-10/12 lg:w-4/12 text-2xl font-thin text-center"}>I'm Kavan! A front-end developer and a UI/UX designer, doing bacholars in Electronics Engineering, from BITS Pilani. I love making creative and beautiful websites, and challenging myself to gain new skills. I consider myself to be a hardworking and easy to adapt individual.
                <br />
                I hope I can help you make your dream website come true, and be a resource to your company.</p>
            </div>
        </section>
    );
}
 
export default absolute;
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Inter } from "next/font/google";
import gsap from 'gsap'
import {useLayoutEffect, useRef} from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import underline from '@/app/assets/public/Underline.png'

const int = Inter({weight:["400"],subsets:["latin"]})

const DM = DM_Serif_Display({weight:["400"], subsets:["latin"]})

const experiences = [
    {
        position : "Secondary School",
        place : "Delhi Public School, Bopal, Ahmedabad",
        period : "2005 - 2019"
    },
    {
        position : "Higher Secondary School",
        place : "Rahul International School, Mumbai",
        period : "2019 - 2021"
    },
    {
        position : "MSc. Physics + B.E. Electronics and Instrumentation",
        place : "Birla Institute of Technology and Science, Pilani",
        period : "2005 - 2019"
    },
    {
        position : "Dev Team Lead & Core Team Member",
        place : "Google Developer Student Club, BITS Pilani",
        period : "Dec, 2022 - Present"
    },
    {
        position : "Tech Team Member & Front-End Developer",
        place : "Society for Student Mess Services, BITS Pilani",
        period : "August, 2023 - Present"
    },
    {
        position : "Tech Team Lead",
        place : "KalamVansh, BITS Pilani",
        period : "June, 2023 - Present"
    },
    {
        position : "AI ML Research Intern",
        place : "Bhaskaracharya National Institute for Space Application & Geoinformatics (BISAG-N)",
        period : "May, 2023 - July, 2023"
    },
]

const Experience = () => {

    const text = useRef(null)
    const element = useRef(null)
    const time = useRef(null)

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        // gsap.to(text.current, {
        //     scrollTrigger :{
        //         trigger: element.current,
        //         scrub:true,
        //         start:"top-=500px top",
        //         end:"top top",
        //     },
        //     fontSize:"5vw",
        //     opacity: 100,
        //     ease: "SlowMo",
        // })
        // gsap.to(element.current, {
        //     scrollTrigger :{
        //         trigger:element.current,
        //         scrub:true,
        //         start:"top-500px top",
        //         end:"top top",
        //     },
        //     backgroundColor: "#000000",
        //     ease:"SlowMo"
        // })
        const timeline = gsap.timeline({
            scrollTrigger : {
                trigger:element.current,
                start:"top-=800px top",
                end: "top-=200px top",
                scrub: true,
            }
        })

        timeline.to(element.current,{backgroundColor: "#000000", ease: "SlowMo"}).to(text.current, {fontSize : "7.5vh", opacity: 100, ease: "SlowMO"},0).to(time.current, {opacity:100, ease:"SlowMo"},0)
    },[])

    return (
        <section ref={element} className=" py-20 bg-[#FAE8C8] min-h-[180vh] xl:min-h-[105vh] px-2 relative overflow-hidden">
            <div className="flex flex-col justify-center items-center">
                <h1 className={DM.className + " text-[#D7BDA3] flex justify-center text-[20vw] opacity-0 text-center"} ref={text}>Experience</h1>
                <Image src={underline} alt="underline" />
            </div>
            <div className="absolute w-full opacity-0 pt-10" ref={time}>
                <div className="absolute left-[49vw] pt-0">
                    <div className="bg-white w-[3px] min-h-[150vh] xl:min-h-[70vh] flex justify-center rounded-xl"></div>
                </div>
                <div className=" flex flex-col gap-2 pt-0">
                    {experiences.map((experience, key)=>(
                        <ul key={key} className = { key == 0 ? "" : " pt-36 xl:pt-20 w-full"}>
                            <li key={key} className={key % 2 === 0 ? "absolute left-[48.75vw] text-left flex text-white gap-5" : "absolute right-[49.75vw] text-right text-white flex-row-reverse flex gap-5 "}>
                                <div className="lg:w-[10px] lg:h-[10px] rounded-full bg-[#D7BDA3]"></div>
                                <div className={key%2 === 0 ? "pr-2 xl:pr-28" : "pl-2 xl:pl-28"}>
                                    <div className={int.className}>
                                        <h1 className="font-bold text-xl lg:text-2xl">{experience.place}</h1>
                                        <p className="text-sm lg:text-xl font-light">{experience.position}</p>
                                        <p className={DM.className + " text-beige"}>{experience.period}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    );
}
 
export default Experience;
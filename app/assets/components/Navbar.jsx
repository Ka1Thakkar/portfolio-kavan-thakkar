'use client'

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "@/app/assets/components/style.module.scss"
import { AnimatePresence } from "framer-motion";
import Menu from "./menu";
import { Holtwood_One_SC } from "next/font/google";
import gsap from'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const holt = Holtwood_One_SC({weight:["400"], subsets:["latin"]})

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const logoRef = useRef(null)
    const menuRef = useRef(null)

    return (
        <nav className=" flex justify-between items-center px-5 lg:px-10 fixed top-0 w-full py-1 md:py-2 z-50 text-black bg-beige" ref={menuRef}>
            <div className={holt.className + " flex gap-[-2px] text-[5vw] md:text-4xl text-black"} ref={logoRef}>
                <p>K</p>
                <p>T</p>
            </div>
            <div id="hamburger" onClick={() => setIsActive(!isActive)} className={styles.button} ref={logoRef}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Menu />}
            </AnimatePresence>
        </nav>
    );
}
 
export default Navbar;
'use client'
import styles from './style.module.scss' 
import { useEffect } from "react";
import gsap, { Power2 } from 'gsap';
import {AiOutlineArrowDown} from 'react-icons/ai'
import {BsArrowUpRight} from 'react-icons/bs'

const Cursor = () => {

    useEffect(()=>{
        const cursor = document.getElementById("cursor")
        const DP = document.getElementById('dp')
        const aboutText = document.getElementById('about-text')
        const hamburgerButton = document.getElementById('hamburger')
        const home = document.getElementById('home')
        const scrollDown = document.getElementById('scroll-down')
        const linkList = document.querySelectorAll("#link")
        const cursorLink = document.getElementById('cursor-link')

        const onMouseMove = (event) => {
            const {clientX, clientY} = event;
            gsap.to(cursor, {x: clientX-10, y: clientY-10})
        }

        document.addEventListener('mousemove', onMouseMove)

        const onMouseEnterDP = (event) => {
            gsap.to(cursor, {opacity: 0, delay:0, duration:0})
        }

        const onMouseLeaveDP = (event) => {
            gsap.to(cursor, {opacity: 100, delay:0, duration:0})
        }

        DP.addEventListener('mouseenter', onMouseEnterDP)
        DP.addEventListener('mouseleave', onMouseLeaveDP)

        const onMouseEnterAboutText = (event) => {
            gsap.to(cursor, {scale:10})
        }

        const onMouseLeaveAboutText = (event) => {
            gsap.to(cursor, {scale: 1})
        }

        aboutText.addEventListener('mouseenter', onMouseEnterAboutText)
        aboutText.addEventListener('mouseleave', onMouseLeaveAboutText)

        const onMouseEnterHam = (event) => {
            gsap.to(cursor, {scale:2.5})
        }

        const onMouseLeaveHam = (event) => {
            gsap.to(cursor, {scale:1})
        }

        hamburgerButton.addEventListener('mouseenter', onMouseEnterHam)
        hamburgerButton.addEventListener('mouseleave', onMouseLeaveHam)

        const onMouseEnterHome = (event) => {
            gsap.to(scrollDown, {display:"block", scale : 1, opacity : 1})
            gsap.to(cursor,{scale:3})
        }

        const onMouseLeaveHome = (event) => {
            gsap.to(scrollDown, {display: "none", delay:0, duration:0, scale : 0, opacity : 1})
            gsap.to(cursor, {scale:1})
        }

        home.addEventListener('mouseenter', onMouseEnterHome)
        home.addEventListener('mouseleave', onMouseLeaveHome)

        const onMouseEnterLink = (event) => {
            gsap.to(cursorLink, {display:"block", scale : 1, opacity : 1})
            gsap.to(cursor,{scale:3})
        }

        const onMouseLeaveLink = (event) => {
            gsap.to(cursorLink, {display: "none", delay:0, duration:0, scale:0, opacity : 0})
            gsap.to(cursor, {scale:1})
        }

        linkList.forEach((link)=>{
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
    })

    return (
        <div id="cursor" className={styles.cursor + " lg:flex"}>
            <div id='scroll-down' className={styles.scrolldown}>
                <AiOutlineArrowDown />
            </div>
            <div id='cursor-link' className={styles.scrolldown}>
                <BsArrowUpRight />
            </div>
        </div>
    );
}
 
export default Cursor;
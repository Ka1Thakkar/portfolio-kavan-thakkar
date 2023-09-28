"use client";

import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Main from '@/app/assets/components/Home'
import About from '@/app/assets/components/About/About'
import Work from '@/app/assets/components/work/Work'
import Experience from "./assets/components/experience/Experience";
import Contact from '@/app/assets/components/Contact/Contact'
import Info from "./assets/components/information/Info";
import {GrInfo} from 'react-icons/gr'

const Home = () => {
  const [infoVisiblity, setInfoVisibility] = useState(false)

  return (
    <main className=" overflow-x-hidden relative">
      <div onClick={()=>setInfoVisibility(true)} className="fixed z-20 bottom-2 left-2 p-2 rounded-full bg-textbrown text-black text-lg">
        <GrInfo />
      </div>
      {infoVisiblity && 
        <div className="fixed z-50 w-screen h-screen">
          <Info infoVisiblity={infoVisiblity} setInfoVisibility={setInfoVisibility}/>
        </div>
      }
      <Main />
      <About />
      <Work />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
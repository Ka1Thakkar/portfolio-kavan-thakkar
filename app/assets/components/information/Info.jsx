import {RxCross2} from 'react-icons/rx'
import { DM_Serif_Display } from 'next/font/google';

const dm = DM_Serif_Display({weight:["400"], subsets: ["latin"]})

const Info = ({infoVisibility, setInfoVisibility}) => {
    return (
        <section id="info" className="relative w-full h-full bg-black/80 flex justify-center items-center">
            <div className="bg-black w-10/12 h-[80vh] rounded-xl relative p-10 overflow-y-scroll">
                <div onClick={()=>setInfoVisibility(false)} className=' sticky top-5 right-5 rounded-full p-2 bg-white text-black w-fit'>
                    <RxCross2 />
                </div>
                <h1 className={dm.className + ' text-4xl lg:text-6xl text-textbeige uppercase pb-2 pt-10'}>About this website (and me)</h1>
                <hr />
                <p className=' font-thin lg:text-2xl text-lg text-white pt-5'>I would like this opportunity to tell you about me and this website that I've made. This is my first real attempt at UI/UX design and animations using GSAP, and honestly, first real attempt even at React Hooks {"( I have made few projects using react hooks but I never really understood the basic fundamentals involved )"}. It took me about a week to build this website and learn all the related concepts that have been used here, and I hope you love it.
                <br />
                <br />
                I have tried to add my own personal flair to the website by using some personally created elements which perfectly show what kind of a person I am, a perfectly ordered chaos. At first glance the website looks all classy, showing the version of Kavan who likes structured file management system and perfectly ordered shelf items, then you see some randomly scribbled elements, perfectly showcasing the chaos that goes on in my head as designer.
                <br />
                <br />
                With this project, I'd like to take a little break from front-end development, to make my fundamentals of Data Structures and Algorithms, stronger so that I can implement them in my future projects. I will also be learning some backend technologies like MongoDB and, and how to make and use APIs to fetch data efficiently. With this, I will be ready to call myself a <span className=' font-normal uppercase'>Full stack developer</span>
                </p>
            </div>
        </section>
    );
}
 
export default Info;
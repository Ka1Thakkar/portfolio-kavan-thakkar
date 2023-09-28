import Form from "./Form";
import { DM_Serif_Display } from "next/font/google";
import {TbBrandGmail, TbBrandLinkedin, TbBrandGithub, TbBrandStackoverflow} from 'react-icons/tb'
import Link from "next/link";

const DM = DM_Serif_Display({weight:['400'], subsets:['latin']})

const Contact = () => {
    const socials = [
        {
            icon: TbBrandGmail,
            value: "kavan1357@gmail.com",
            link: "#contact"
        },
        {
            icon: TbBrandLinkedin,
            value: "Kavan Thakkar",
            link: "https://www.linkedin.com/in/kavan-thakkar/"
        },
        {
            icon: TbBrandGithub,
            value: "Ka1Thakkar",
            link: "https://github.com/Ka1Thakkar"
        },
        {
            icon: TbBrandStackoverflow,
            value: "KAVAN THAKKAR",
            link: "https://stackoverflow.com/users/21417020/kavan-thakkar",
        },
    ]
    return (
        <section className="min-h-screen bg-bggray py-20 relative px-10 lg:px-20">
            <h1 className={DM.className + " text-black text-[7.5vh] md:text-[7.5vw]"}>Let's Talk!</h1>
            
        </section>
    );
}
 
export default Contact;
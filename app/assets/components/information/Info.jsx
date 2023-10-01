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
                <p className=' font-thin lg:text-2xl text-lg text-white pt-5'>
                    To be Filled
                </p>
            </div>
        </section>
    );
}
 
export default Info;
import { useEffect } from "react";
import "./styles/intro.css"

import wave from "../assets/wave.svg"

function Bubble(props) { 
    const {className, ...rest} = props
    useEffect(() => {
        const tween = KUTE.fromTo(
          '#blob1',
          { path: '#blob1' },
          { path: '#blob2' },
          { repeat: 999, duration: 3000, yoyo: true }
        );
        tween.start();
    
        return () => {
          tween.stop();
        };
      }, []);

    const fill_color = "#E26EE5"

    return (
        <svg className={className+" "} {...rest} viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
            <g transform="translate(437.8564492604596 290.91628158509064)" className="h-full">
                <path
                id="blob1"
                d="M216.6 -57.5C242.9 10.7 200.5 114.2 134.6 154.9C68.7 195.6 -20.8 173.7 -91.7 122.9C-162.6 72.2 -214.9 -7.3 -196.5 -64.6C-178.2 -121.9 -89.1 -156.9 3 -157.9C95.1 -158.9 190.2 -125.8 216.6 -57.5"
                fill={fill_color}>
                </path>
            </g>
            <g transform="translate(444.98569844362476 277.96369917215895)" className="h-full">
                <path
                    id="blob2"
                    d="M183.7 -58.9C202.5 -1.8 157.7 76.8 87.1 130.6C16.5 184.5 -79.9 213.6 -131.6 177C-183.2 140.5 -190 38.3 -160.6 -33.4C-131.2 -105.1 -65.6 -146.3 8.4 -149.1C82.4 -151.8 164.8 -116.1 183.7 -58.9"
                    fill={fill_color}
                    style={{visibility: "hidden"}}>
                </path>
            </g>
        </svg>
    )
}
export default function Intro() {
    return (
        <>
            <section className="bg-dark-purple w-full h-[38rem] relative">
                <div className=" w-full h-[30rem] flex justify-center items-center absolute overflow-hidden">
                    <div className="absolute top-0 right-0 py-8 px-12">
                        <button className="bg-dark-white text-dark-purple rounded-full px-4 py-2 text-xl font-bold">Resume</button>
                    </div>
                    <Bubble className="absolute h-full p-6" />
                    <div className="z-10 flex flex-col gap-4">
                        <h1 className="text-3xl text-white inverted-text">Hello, I'm <span className="text-pink bg-white px-3 py-[0.75] rounded-full">Michele</span></h1>
                        <h1 className="text-3xl text-white inverted-text">a <span className="bg-amber-400 rounded-full px-3 py-[0.75]">Full Stack</span> Developer</h1>
                    </div>
                </div>
                <div className="bg-transparent h-[8rem]">
                    <img src={wave} alt="wave" className="w-full absolute bottom-0 right-0" />
                </div>
            </section>
        </>
        
    )
}
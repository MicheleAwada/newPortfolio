import { useEffect } from "react";
import "./styles/intro.css"


function Bubble(props) { 
    const {...rest} = props
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
    return (
        <svg id="visual" {...rest} viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
        <g transform="translate(446.2161423759699 305.71813932416933)">
            <path id="blob1"
                d="M167.3 -184.8C193.1 -141.4 174 -70.7 169.4 -4.6C164.9 61.5 174.7 123 148.9 167.4C123 211.7 61.5 238.9 9.7 229.2C-42.2 219.5 -84.4 173 -109.4 128.7C-134.4 84.4 -142.2 42.2 -154.9 -12.7C-167.7 -67.6 -185.3 -135.3 -160.3 -178.6C-135.3 -222 -67.6 -241 1.5 -242.5C70.7 -244 141.4 -228.1 167.3 -184.8"
                fill="#BB004B"></path>
        </g>
        <g transform="translate(426.987231433047 303.5342640187103)">
            <path id="blob2" style={{ visibility: "hidden" }}
                d="M176.8 -160C224.5 -129.2 255.2 -64.6 248.2 -7.1C241.1 50.4 196.2 100.9 148.5 125.9C100.9 150.9 50.4 150.4 -10.1 160.6C-70.7 170.7 -141.4 191.4 -175.4 166.4C-209.4 141.4 -206.7 70.7 -196 10.7C-185.3 -49.3 -166.5 -98.5 -132.5 -129.4C-98.5 -160.2 -49.3 -172.6 7.7 -180.3C64.6 -187.9 129.2 -190.8 176.8 -160"
                fill="#BB004B"></path>
        </g>
    </svg>
    )
}
export default function Intro() {
    return (
        <>
            <div className="bg-cyan-700 w-full flex justify-center items-center h-[90vh] sm:h-[60vh] md:h-[90vh]  relative">
                <Bubble className="absolute h-full p-2" />
                <h1 className="text-3xl z-10 text-white">Hello, I'm Michele</h1>
            </div>
        </>
        
    )
}
import { useEffect, useState } from "react";
import "./styles/intro.css";

import wave from "../assets/images/intro/wave.svg";

function ButtonBubble(props) {
	const { className, ...rest } = props;

	useEffect(() => {
		const tween = KUTE.fromTo(
			"#buttonblob1",
			{ path: "#buttonblob1" },
			{ path: "#buttonblob2" },
			{ repeat: Infinity, duration: 3000, yoyo: true }
		);
		tween.start();

		return () => {
			tween.stop();
		};
	}, []);


	const fill_color = "#F3F8FF";

	return (
            <a target="_blank" href="https://www.youtube.com" className={" "} >
                <div className=" w-full h-full flex items-center justify-center relative">
                    <svg className="w-[165%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" version="1.1"id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 700 327.6"style={{"enableBackground": "new 0 0 700 327.6"}} xmlSpace="preserve">
                        {/* <path 
                            id="buttonblob"
                            d="M479.8,250.3H220.2c-47.8,0-86.5-38.7-86.5-86.5v0c0-47.8,38.7-86.5,86.5-86.5h259.6
                            c47.8,0,86.5,38.7,86.5,86.5v0C566.3,211.6,527.6,250.3,479.8,250.3z"
                            fill={fill_color} /> */}
                        <path
                            fill={fill_color}
                            id="buttonblob2"
                            d="M285,287.1c25,4.3,48.8,14.1,73.5,19.6c50,11.2,105.4,4,146.6-26.5c15.6-11.5,44.7-18.5,64.9-35.4
                                    c22.9-19.1,36-49.1,36-79.7c0-27.3-11.6-53.9-30.6-73.4S531.7,59,506.1,49.5c-26.8-10-55-44.7-83.2-48.5c-54.5-7.3-89,26-165.5,25.4
                                    c-46.2-0.4-92.3,3.6-138.5,5.4c-28.4,1.1-58.7,2.9-81.4,20c-14.2,10.7-24.3,31-15.2,46.3c11.9,20.2,45.1,15.5,60.5,33.2
                                    c12.2,14.1,8,35.3,10.6,53.8c2.5,17.7,12.4,34.3,26.7,45c16.8,12.5,38.3,16.6,57.4,25.4c9.2,4.2,18.2,10.2,24.9,17.9
                                    c4.6,5.2,4.5,21.1,14.3,22.8c8.8,1.5,24.3-9.4,32-10.4C260.8,284.3,273.1,285,285,287.1z"
                                    style={{ visibility: "hidden" }}
                        />
                        <g>
                                    <path
                                        fill={fill_color}
                                        id="buttonblob1"
                                        d="M479.8,250.3H220.2c-47.8,0-86.5-38.7-86.5-86.5v0c0-47.8,38.7-86.5,86.5-86.5h259.6
                                                    c47.8,0,86.5,38.7,86.5,86.5v0C566.3,211.6,527.6,250.3,479.8,250.3z"
                                                    

                                    />
                                </g>
                    </svg>
                <p className="z-10 m-0 text-2xl text-dark-purple font-semibold">Resume</p>
                </div>
            </a>
	);
}

function Bubble(props) {
	const { className, ...rest } = props;
	useEffect(() => {
		const tween = KUTE.fromTo(
			"#blob1",
			{ path: "#blob1" },
			{ path: "#blob2" },
			{ repeat: Infinity, duration: 3000, yoyo: true }
		);
		tween.start();

		return () => {
			tween.stop();
		};
	}, []);

	const fill_color = "#E26EE5";

	return (
		<svg
			className={className + " "}
			{...rest}
			viewBox="0 0 900 600"
			width="900"
			height="600"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
		>
			<g transform="translate(437.8564492604596 290.91628158509064)">
				<path
					id="blob1"
					d="M216.6 -57.5C242.9 10.7 200.5 114.2 134.6 154.9C68.7 195.6 -20.8 173.7 -91.7 122.9C-162.6 72.2 -214.9 -7.3 -196.5 -64.6C-178.2 -121.9 -89.1 -156.9 3 -157.9C95.1 -158.9 190.2 -125.8 216.6 -57.5"
					fill={fill_color}
				></path>
			</g>
			<g transform="translate(444.98569844362476 277.96369917215895)">
				<path
					id="blob2"
					d="M183.7 -58.9C202.5 -1.8 157.7 76.8 87.1 130.6C16.5 184.5 -79.9 213.6 -131.6 177C-183.2 140.5 -190 38.3 -160.6 -33.4C-131.2 -105.1 -65.6 -146.3 8.4 -149.1C82.4 -151.8 164.8 -116.1 183.7 -58.9"
					fill={fill_color}
					style={{ visibility: "hidden" }}
				></path>
			</g>
		</svg>
	);
}
export default function Intro() {
	return (
		<>
			<section className="bg-dark-purple w-full h-[38rem] relative">
				<div className=" w-full h-[30rem] flex justify-center items-center absolute overflow-hidden">
					<div className="absolute top-0 right-0 py-8 px-12">
						<a className="px-4 py-2  text-dark-purple bg-dark-white rounded-full text-2xl font-medium" target="_blank" href="https://youtube.com">
                            Resume
                        </a>
					</div>
					<Bubble className="absolute h-full p-6" />
					<div className="z-10 flex flex-col gap-6">
						<h1 className="text-3xl text-white inverted-text">
							Hello, I'm{" "}
							<span className="text-pink bg-white px-3 py-[0.75] rounded-full">
								Michele
							</span>
						</h1>
						<h1 className="text-3xl text-white inverted-text">
							a{" "}
							<span className="bg-amber-400 rounded-full px-3 py-[0.75]">
								Full Stack
							</span>{" "}
							Developer
						</h1>
					</div>
				</div>

					{/* <img
						style={{ backgroundImage: `url(${wave})`}}
						alt="wave"
						className="absolute bottom-0 right-0 intro-transition"
					/> */}
					<img src={wave} alt="wave" className="absolute bottom-0 right-0" />

			</section>
		</>
	);
}

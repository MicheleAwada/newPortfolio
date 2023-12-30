import "./styles/langs.scss";

import layered_wave from "../assets/langs/images/layered-waves.svg";

import NginxLogo from "../assets/langs/images/nginx-icon.svg";
import TraefikLogo from "../assets/langs/images/traefikio-icon.svg";

import ReactLogo1 from "../assets/langs/images/react-icon-1.svg";
import ReactLogo2 from "../assets/langs/images/react-icon-2.svg";

import Tailwind1 from "../assets/langs/images/tailwind-1.svg";
import Tailwind2 from "../assets/langs/images/tailwind-2.svg";

import Django1 from "../assets/langs/images/django-1.svg";
import Django2 from "../assets/langs/images/django-2.svg";

import Python1 from "../assets/langs/images/python-1.svg";
import Python2 from "../assets/langs/images/python-2.svg";
import { useEffect } from "react";

export default function Langs() {
	const languages_info = [
		{
			name: "React",
			img: ReactLogo1,
			img2: ReactLogo2,
		},
		{
			name: "HTML",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		},
		{
			name: "CSS",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
		},
		{
			name: (
				<>
					Java
					<br />
					Script
				</>
			),
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		},
		{
			name: "SASS",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
		},
		{
			name: "Tailwind",
			img: Tailwind1,
			img2: Tailwind2,
		},
		{
			name: "Bootstrap",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
		},
		{
			name: "Adobe illustrator",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
		},
		{
			name: "Python",
			img: Python1,
			img2: Python2,
		},
		{
			name: "Django",
			img: Django1,
			img2: Django2,
		},
		{
			name: "Postgres",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		},
		{
			name: "Docker",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
		},
		{
			name: "Nginx",
			img: NginxLogo,
		},
		{
			name: "traefik",
			img: TraefikLogo,
		},
		{
			name: "Git",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		},
		{
			name: "GitHub",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
		},
	];

	// useEffect(() => {
	//     const loadImage = (imageSrc) => {
	//       const img = new Image();
	//       img.src = imageSrc;

	//       img.onload = function() {
	//         const aspectRatio = img.width / img.height;
	//         const containerRef = Document.getElementById("langs_transition_layered_waved");
	//         if (containerRef.current) {
	//           containerRef.current.style.height = `${
	//             containerRef.current.offsetWidth / aspectRatio
	//           }px`;
	//         }
	//       };
	//     };

	//     loadImage(Python1); // Replace with your imported image variable
	//     // or loadImage(Python2); depending on which image you want to use

	//   }, []);

	return (
		<>
			{/* <div style={{ backgroundImage: `url(${layered_wave})` }} alt="layered_wave" className="lang-transition w-full bg-dark-white" /> */}
			<img
				src={layered_wave}
				alt="layered_wave"
				className="w-full bg-dark-white"
			/>
			<div className="bg-pink w-full">
				<h1 className="text-center text-white text-2xl md:text-3xl pt-4">
					Languages I{" "}
					<span className="line-through decoration-dark-white">speak</span> code
				</h1>
				<p className="text-center text-dark-white text-sm pb-4">
					psst.. click the icons
				</p>
				<div className="py-6 sm:px-4 sm:py-4 md:px-14 lg:px-16 flex flex-wrap justify-center gap-y-10 overflow-hidden">
					{languages_info.map((info, index) =>
						info.img2 === undefined ? (
							<div key={index} className="split-icon inline-flex h-auto">
								<div className="split-left-div">
									<img
										className="z-10 split-left split-left-cut"
										src={info.img}
									/>
								</div>
								<p className="split-inner font-bold text-white">{info.name}</p>
								<div className="split-right-div">
									<img
										className="z-10 split-right split-right-cut"
										src={info.img}
									/>
								</div>
							</div>
						) : (
							<div key={index} className="split-icon inline-flex h-auto">
								<div className="split-left-div">
									<img className="z-10 split-left" src={info.img} />
								</div>
								<p className="split-inner font-bold text-white">{info.name}</p>
								<div className="split-right-div">
									<img className="z-10 split-right" src={info.img2} />
								</div>
							</div>
						)
					)}
				</div>
			</div>
			<img
				src={layered_wave}
				alt="layered_wave"
				className="rotate-180 w-full bg-dark-white"
			/>
		</>
	);
}

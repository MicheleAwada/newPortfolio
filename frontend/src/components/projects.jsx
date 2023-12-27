import "./styles/projects.scss";

import friendlyFurThumbnail from "../assets/projects/images/friendly fur.png";
import kentuckyThumbnail from "../assets/projects/images/kentucky.png";
import chessThumbnail from "../assets/projects/images/chess.png";
import mugThumbnail from "../assets/projects/images/mug.png";
import { Link } from "react-router-dom";

export function OldProjects() {
	const projects_info = [
		{
			title: "Mug",
			description: (
				<p className="text-xs">
					Lightning-fast social media app on React with Django backend. Login,
					post, edit, delete, like, comment, follow, view, and more! Change
					password & auth info seamlessly.
				</p>
			),
			thumbnail: mugThumbnail,
			link: (
				<a
					href="http://mug.micheleawada.com"
					className="mx-auto bg-red-600 text-white px-4 py-2 rounded-xl"
				>
					LIVE Site
				</a>
			),
		},
		{
			title: "Friendly Fur",
			description: <p>Website Developer</p>,
			thumbnail: friendlyFurThumbnail,
			link: (
				<Link
					to="kentucky/"
					className="bg-red-600 text-white px-4 py-2 rounded-xl"
				>
					Play NOW!
				</Link>
			),
		},
		{
			title: "Kentucky Game",
			description: <p>Website Developer</p>,
			thumbnail: kentuckyThumbnail,
			link: (
				<Link
					to="kentucky/"
					className="bg-red-600 text-white px-4 py-2 rounded-xl"
				>
					Play NOW!
				</Link>
			),
		},
		{
			title: "Chess Game",
			description: <p>Website Developer</p>,
			thumbnail: chessThumbnail,
			link: (
				<Link
					to="kentucky/"
					className="bg-red-600 text-white px-4 py-2 rounded-xl"
				>
					Play NOW!
				</Link>
			),
		},
	];
	return (
		<section className="bg-dark-white w-full pt-4">
			<h1 className="text-center text-dark-purple text-4xl">
				<span className="rotated-my">My</span> Projects
			</h1>
			<div
				id="proj-container"
				className="flex flex-wrap gap-8 p-8 items-center w-full py-12"
			>
				{projects_info.map((info, index) => (
					<div
						key={index}
						className="flip-card w-[22rem] h-[16rem] p-4 bg-transparent border-dark-purple border-2 rounded-md"
					>
						<div className="flip-card-inner rounded-md">
							<div className="flip-card-front flex flex-col h-full rounded-md overflow-hidden">
								<img
									src={info.thumbnail}
									alt={info.title + " Thumbnail"}
									className="w-full aspect-video object-contain bg-dark-white"
								/>
								<div className="w-full flex-grow bg-purple flex items-center justify-center">
									<p className="text-white text-2xl">{info.title}</p>
								</div>
							</div>
							<div className="flip-card-back flex justify-center items-center rounded-md ">
								<div className="flex flex-col gap-2">
									<h1 className="text-xl">{info.title}</h1>
									{info.description}
									{info.link}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default function Project() {
	return <div className="projects-container"></div>;
}

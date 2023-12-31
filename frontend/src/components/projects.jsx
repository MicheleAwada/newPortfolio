import "./styles/projects.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoMdArrowBack } from "react-icons/io";

import states from "./etc/projects/states";

export default function Project() {
	const [projectsType, setProjectsType] = useState(0);
	const [selectedProject, setSelectedProject] = useState(null);
	const [prevSelectedProject, setPrevSelectedProject] = useState(null);
	const [fullyOpened, setFullyOpened] = useState(false);
	function choiceIndex(array) {
		return Math.floor(Math.random() * array.length);
	}
	useEffect(() => {
		const projectsInterval = setInterval(() => {
			setProjectsType((oldProjectTypeIndex) => {
				const statesWithoutOldState = [...states];
				statesWithoutOldState.splice(oldProjectTypeIndex, 1);

				let newProjectTypeIndex = choiceIndex(statesWithoutOldState);

				if (newProjectTypeIndex >= oldProjectTypeIndex) newProjectTypeIndex++;

				return newProjectTypeIndex;
			});
		}, 3000);
		return () => {
			clearInterval(projectsInterval);
		};
	}, []);

	const selectedProjectStyles = {
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		zIndex: 10,
	};

	const constantStateStyles = [
		{ zIndex: 1 },
		{ zIndex: 1 },
		{ zIndex: 1 },
		{ zIndex: 0 },
	];

	const projects_mapping = [
		{
			props: { className: "mini-projects mug-project bg-[#A9D5E5]" },
			selected: {
				title: "Mug",
				subtitle: "Recommended",
				description: (
					<p className="description text-dark-white pl-6 px-4 sm:px-4 text-sm sm:text-sm md:text-md lg:text-lg">
						A lightning fast fully SPA application. With modern complex
						features. Frontend built on react and backend built on django. With
						modern quick REST APIs and one tap Google authentications.
					</p>
				),
				button: (
					<a
						target="_blank"
						href="https://mug.micheleawada.com/"
						className="boutton"
					>
						Live Site
					</a>
				),
			},
		},
		{
			props: { className: "mini-projects kentucky-project bg-pink" },
			selected: {
				title: "Kentucky Game",
				subtitle: "Fun",
				description: (
					<p className="description text-dark-white pl-6 px-4 sm:px-4 text-sm sm:text-sm md:text-md lg:text-lg lg:leading-8">
						You are suddenly transformed into a pixelated chicken! You must eat
						all the worms, strawberries and bananas. However! Beware of the fox
						and the hawk trying to eat you! Survive as long as possible.
					</p>
				),
				button: (
					<Link target="_blank" to="/kentucky/" className="boutton">
						Play Now
					</Link>
				),
			},
		},
		{
			props: { className: "mini-projects chess-project bg-purple" },
			selected: {
				title: "Chess VS AI",
				subtitle: "Fun",
				description: (
					<p className="description text-dark-white pl-6 px-4 sm:px-4 text-sm sm:text-sm md:text-md lg:text-lg">
						Did winning your friend in Chess give you a ego boost?
						<br />
						<br />
						<span className="font-semibold">Long Lived your ego</span>
					</p>
				),
				button: (
					<a
						target="_blank"
						href="https://chess.micheleawada.com"
						className="boutton"
					>
						Play Now
					</a>
				),
			},
		},
		{
			props: { className: "mini-projects friendlyfur-project bg-dark-purple" },
			selected: {
				title: "Friendly Fur",
				subtitle: "First self-coded project",
				description: (
					<p className="description text-dark-white pl-6 px-4 sm:px-4 text-xs sm:text-sm md:text-md lg:text-lg">
						Do you like your dogs, But fear buying them allergic food by
						accident?
						<br />
						Friendly Furs Web E-Commerce is the answer for you
						<br />
						Buy treats and snacks with
						<span className="font-medium"> automatic filtering</span> to warn
						you about dangerous products that contain allergies for your dogs
					</p>
				),
				button: (
					<a
						target="_blank"
						href="https://www.youtube.com/watch?v=HlnDabvjUOk&t=4s"
						className="boutton"
					>
						Watch Video
					</a>
				),
			},
		},
	];

	function clearTimeoutArray(array) {
		array.forEach((timeout) => {
			clearTimeout(timeout);
		});
		array.splice(0, array.length);
		return array;
	}

	const [_prevTimeouts, setPrevTimeouts] = useState([]);
	const [_openedTimeouts, setOpenedTimeouts] = useState([]);

	return (
		<div className="bg-dark-white w-full flex items-center justify-center">
			<div className="flex-col items-center my-20">
				<div className="mb-16 flex flex-col gap-2">
					<h1 className="text-center text-2xl md:text-3xl text-dark-purple font-medium">
						My Projects
					</h1>
					<p className="text-center text-sm text-dark-purple font-light">
						Click a colour!
					</p>
				</div>
				<div className="projects-container w-[100vmin] md:w-[95vmin] flex items-center justify-center">
					<div className="square-projects-container">
						{projects_mapping.map((info, index) => {
							const isSelected = selectedProject === index;
							const isPrevSelected = prevSelectedProject === index;
							const projectClasses = info.props.className;
							return (
								<div
									key={index}
									style={{
										...constantStateStyles[index],
										...(isPrevSelected ? { zIndex: 5 } : {}),
										...(isSelected
											? selectedProjectStyles
											: states[projectsType][index]),
									}}
									className={
										projectClasses + " lg:p-2 " + (isSelected ? "selected" : "")
									}
									onClick={() => {
										if (selectedProject !== index) {
											setSelectedProject(index);
											setPrevTimeouts((prevTimeouts) =>
												clearTimeoutArray(prevTimeouts)
											);
											setPrevSelectedProject(index);
											const currentOpenedTimeout = setTimeout(() => {
												setFullyOpened(true);
											}, 1000);
											setOpenedTimeouts((openedTimeout) => [
												...openedTimeout,
												currentOpenedTimeout,
											]);
										}
									}}
								>
									{isSelected && (
										<div className="w-full h-full flex flex-col">
											<div className="flex items-center">
												{fullyOpened && (
													<IoMdArrowBack
														color="white"
														className="cursor-pointer aspect-square h-8 sm:h-12 w-8 sm:w-12 m-2"
														onClick={() => {
															setSelectedProject(null);
															setFullyOpened(false);
															setOpenedTimeouts((openedTimeouts) =>
																clearTimeoutArray(openedTimeouts)
															);
															const currentTimeout = setTimeout(() => {
																setPrevSelectedProject(null);
															}, 1000);
															setPrevTimeouts((prevTimeouts) => [
																...prevTimeouts,
																currentTimeout,
															]);
														}}
													/>
												)}
												<div className="flex-grow flex items-baseline gap-2">
													<h1 className="inline text-dark-white text-2xl sm:text-3xl pl-2 md:pl-4 font-semibold whitespace-nowrap">
														{fullyOpened ? info.selected.title : ""}
													</h1>
													<p className="inline font-medium text-dark-white text-xs sm:text-sm">
														{fullyOpened ? info.selected.subtitle : ""}
													</p>
												</div>
											</div>
											<div className="flex-grow">
												{fullyOpened ? info.selected.description : ""}
											</div>
											<div>
												<div className="flex items-center justify-end">
													{fullyOpened && info.selected.button}
												</div>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

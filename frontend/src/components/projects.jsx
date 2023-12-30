import "./styles/projects.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoMdArrowBack } from "react-icons/io";

export default function Project() {
	const states = [
		[
			{
				width: 25,
				height: 100,
				top: 0,
				left: 0,
				bottom: null,
				right: null,
				borderRadius: 0,
			},
			{
				width: 25,
				height: 100,
				top: 0,
				left: 25,
				bottom: null,
				right: null,
				borderRadius: 0,
			},
			{
				width: 25,
				height: 100,
				top: 0,
				left: null,
				bottom: null,
				right: 25,
				borderRadius: 0,
			},
			{
				width: 25,
				height: 100,
				top: 0,
				left: null,
				bottom: null,
				right: 0,
				borderRadius: 0,
			},
		],
		[
			{
				width: 25,
				height: 100,
				top: 0,
				left: 0,
				bottom: null,
				right: null,
				borderRadius: "100vmax",
			},
			{
				width: 25,
				height: 100,
				top: 0,
				left: 25,
				bottom: null,
				right: null,
				borderRadius: "100vmax",
			},
			{
				width: 25,
				height: 100,
				top: 0,
				left: null,
				bottom: null,
				right: 25,
				borderRadius: "100vmax",
			},
			{
				width: 25,
				height: 100,
				top: 0,
				left: null,
				bottom: null,
				right: 0,
				borderRadius: "100vmax",
			},
		],
		[
			{
				width: 25,
				height: 66.66,
				top: 0,
				left: 0,
				bottom: null,
				right: null,
				borderRadius: 0,
			},
			{
				width: 50,
				height: 33.33,
				top: null,
				left: 0,
				bottom: 0,
				right: null,
				borderRadius: 0,
			},
			{
				width: 25,
				height: 66.66,
				top: 0,
				left: 25,
				bottom: null,
				right: null,
				borderRadius: 0,
			},
			{
				width: 50,
				height: 100,
				top: 0,
				left: null,
				bottom: null,
				right: 0,
				borderRadius: 0,
			},
		],
		[
			{
				width: 25,
				height: 66.66,
				top: 0,
				left: 0,
				bottom: null,
				right: null,
				borderRadius: "100vmax 100vmax 0 100vmax",
			},
			{
				width: 50,
				height: 33.33,
				top: null,
				left: 0,
				bottom: 0,
				right: null,
				borderRadius: "0 0 100vmax 0",
			},
			{
				width: 25,
				height: 66.66,
				top: 0,
				left: 25,
				bottom: null,
				right: null,
				borderRadius: "100vmax 0 0 0",
			},
			{
				width: 50,
				height: 100,
				top: 0,
				left: null,
				bottom: null,
				right: 0,
				borderRadius: "0 0 0 100vmax",
			},
		],
		[
			{
				width: 50,
				height: 50,
				top: 0,
				left: 0,
				bottom: null,
				right: null,
				borderRadius: "0 100vmax 100vmax 0",
			},
			{
				width: 25,
				height: 40.45,
				top: null,
				left: null,
				bottom: 0,
				right: 0,
				borderRadius: "100vmax",
			},
			{
				width: 50,
				height: 50,
				top: null,
				left: 0,
				bottom: 0,
				right: null,
				borderRadius: "4rem 0.75rem 4rem 0.75rem",
			},
			{
				width: 50,
				height: 100,
				top: 0,
				left: null,
				bottom: null,
				right: 0,
				borderRadius: "100vmax 0 0 0",
			},
		],
		[
			{
				width: 25,
				height: 100,
				top: 0,
				left: 0,
				bottom: null,
				right: null,
				borderRadius: "1rem",
			},
			{
				width: 25,
				height: 40.45,
				top: null,
				left: null,
				bottom: 0,
				right: 0,
				borderRadius: "1rem",
			},
			{
				width: 25,
				height: 100,
				top: 0,
				left: 25,
				bottom: null,
				right: null,
				borderRadius: "1rem",
			},
			{
				width: 50,
				height: 100,
				top: 0,
				left: null,
				bottom: null,
				right: 0,
				borderRadius: "1rem",
			},
		],
		[
			{
				width: 25,
				height: 100,
				top: 0,
				left: 0,
				bottom: null,
				right: null,
				borderRadius: 0,
			},
			{
				width: 25,
				height: 40.45,
				top: null,
				left: null,
				bottom: 0,
				right: 0,
				borderRadius: 0,
			},
			{
				width: 25,
				height: 100,
				top: 0,
				left: 25,
				bottom: null,
				right: null,
				borderRadius: 0,
			},
			{
				width: 50,
				height: 100,
				top: 0,
				left: null,
				bottom: null,
				right: 0,
				borderRadius: 0,
			},
		],
	];

	states.forEach((state, mainIndex) => {
		state.forEach((componentState, componentStateIndex) => {
			if (componentState["right"] !== null && componentState["left"] === null) {
				const oldRight = componentState["right"];
				states[mainIndex][componentStateIndex]["right"] = null;
				states[mainIndex][componentStateIndex]["left"] =
					100 - oldRight - componentState["width"];
			}
			if (componentState["bottom"] !== null && componentState["top"] === null) {
				const oldBottom = componentState["bottom"];
				states[mainIndex][componentStateIndex]["bottom"] = null;
				states[mainIndex][componentStateIndex]["top"] =
					100 - oldBottom - componentState["height"];
			}
			componentState = states[mainIndex][componentStateIndex];
			Object.keys(componentState).forEach((key) => {
				// const current = states[mainIndex][componentStateIndex][key]
				if (states[mainIndex][componentStateIndex][key] === null) {
					delete states[mainIndex][componentStateIndex][key];
				}
				if (
					key === "width" ||
					key === "height" ||
					key === "top" ||
					key === "bottom" ||
					key === "left" ||
					key === "right" ||
					key === "borderRadius"
				) {
					if (
						states[mainIndex][componentStateIndex][key] !== null &&
						typeof states[mainIndex][componentStateIndex][key] === "number"
					) {
						states[mainIndex][componentStateIndex][key] =
							states[mainIndex][componentStateIndex][key] + "%";
					}
				}
			});
		});
	});
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
				title: (
					<>
						Mug<span className="font-medium text-sm"> Recommened</span>
					</>
				),
				description: (
					<p className="description text-dark-white pl-6 px-4 sm:px-4 text-sm sm:text-sm md:text-md lg:text-lg">
						A lightning fast fully spa application. With modern complex
						features. Frontend built on react and backend built on django. With
						modern quick restAPIs and one tap google authentications.
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
				title: (
					<>
						Kentucky Game<span className="font-medium text-sm"> Fun</span>
					</>
				),
				description: (
					<p className="description text-dark-white pl-6 px-4 sm:px-4 text-sm sm:text-sm md:text-md lg:text-lg lg:leading-8">
						You are suddenly transformed into a pixelated chicken! You must eat
						all the worms, strawberries and bananas. However! Beware of the fox
						and the hawk trying to eat you! Survive as long as possible,{" "}
						<span className="font-medium">you don't die ;D</span> .
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
				title: (
					<>
						Chess VS AI<span className="font-medium text-sm"> Fun</span>
					</>
				),
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
				title: (
					<>
						Friendly Fur
						<span className="font-medium text-xs sm:text-sm">
							{" "}
							First self-coded project
						</span>
					</>
				),
				description: (
					<p className="description text-dark-white pl-6 px-4 sm:px-4 text-xs sm:text-sm md:text-md lg:text-lg">
						Do you like all your dogs, But fear buying them allergic food on
						accident?
						<br />
						Friendly Furs Web E-Commerence is the anwser for you
						<br />
						Buy treats and snacks with{" "}
						<span className="font-medium">automatic filtering</span> to warn you
						about dangerous products that contain allergies for your all your
						dogs
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

	return (
		<div className="bg-dark-white w-full flex items-center justify-center">
			<div className="flex-col items-center my-20">
				<div>
					<p className="text-center text-4xl mb-16 text-dark-purple font-medium">
						My Projects
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
											console.log("cube");
											setSelectedProject(index);
											setPrevSelectedProject(index);
											setTimeout(() => {
												setFullyOpened(true);
											}, 1000);
										}
									}}
								>
									{isSelected && (
										<div className="w-full h-full flex flex-col">
											<div className="flex items-center">
												{fullyOpened && (
													<IoMdArrowBack
														color="white"
														size={"3rem"}
														className="m-2 cursor-pointer"
														onClick={() => {
															if (true) {
																console.log("arrow");
																setSelectedProject(null);
																setFullyOpened(false);
																setTimeout(() => {
																	setPrevSelectedProject(null);
																}, 1000);
															}
														}}
													/>
												)}
												<div className="flex-grow">
													<p className="text-dark-white text-2xl md:text-3xl lg:text-4xl pl-2 md:pl-4 font-semibold">
														{fullyOpened ? info.selected.title : ""}
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

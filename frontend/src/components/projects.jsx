import "./styles/projects.scss";

import friendlyFurThumbnail from "../assets/projects/images/friendly fur.png";
import kentuckyThumbnail from "../assets/projects/images/kentucky.png";
import chessThumbnail from "../assets/projects/images/chess.png";
import mugThumbnail from "../assets/projects/images/mug.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Project() {
	const states = [
		[
			{ width:25, height:100, top: 0, left: 0, bottom: null, right: null, borderRadius: 0 },
			{ width:25, height:100, top: 0, left: 25, bottom: null, right: null, borderRadius: 0 },
			{ width:25, height:100, top: 0, left: null, bottom: null, right: 25, borderRadius: 0 },
			{ width:25, height:100, top: 0, left: null, bottom: null, right: 0, borderRadius: 0 },
		],
		[
			{ width:25, height:100, top: 0, left: 0, bottom: null, right: null, borderRadius: "100vmax" },
			{ width:25, height:100, top: 0, left: 25, bottom: null, right: null, borderRadius: "100vmax" },
			{ width:25, height:100, top: 0, left: null, bottom: null, right: 25, borderRadius: "100vmax" },
			{ width:25, height:100, top: 0, left: null, bottom: null, right: 0, borderRadius: "100vmax" },
		],
		[
			{ width:25, height:66.66, top: 0, left: 0, bottom: null, right: null, borderRadius: 0 },
			{ width:50, height:33.33, top: null, left: 0, bottom: 0, right: null, borderRadius: 0 },
			{ width:25, height:66.66, top: 0, left: 25, bottom: null, right: null, borderRadius: 0 },
			{ width:50, height:100, top: 0, left: null, bottom: null, right: 0, borderRadius: 0 },
		],
		[
			{ width:25, height:66.66, top: 0, left: 0, bottom: null, right: null, borderRadius: "100vmax 100vmax 0 100vmax" },
			{ width:50, height:33.33, top: null, left: 0, bottom: 0, right: null, borderRadius: "0 0 100vmax 0" },
			{ width:25, height:66.66, top: 0, left: 25, bottom: null, right: null, borderRadius: "100vmax 0 0 0" },
			{ width:50, height:100, top: 0, left: null, bottom: null, right: 0, borderRadius: "0 0 0 100vmax" },
		],
		[
			{ width:50, height:50, top: 0, left: 0, bottom: null, right: null, borderRadius: "0 100vmax 100vmax 0" },
			{ width:25, height:40.45, top: null, left: null, bottom: 0, right: 0, borderRadius: "100vmax" },
			{ width:50, height:50, top: null, left: 0, bottom: 0, right: null, borderRadius: "4rem 0.75rem 4rem 0.75rem" },
			{ width:50, height:100, top: 0, left: null, bottom: null, right: 0, borderRadius: "100vmax 0 0 0" },
		],
		[
			{ width:25, height:100, top: 0, left: 0, bottom: null, right: null, borderRadius: "1rem"},
			{ width:25, height:40.45, top: null, left: null, bottom: 0, right: 0, borderRadius: "1rem"},
			{ width:25, height:100, top: 0, left: 25, bottom: null, right: null, borderRadius: "1rem"},
			{ width:50, height:100, top: 0, left: null, bottom: null, right: 0, borderRadius: "1rem"},
		],
		[
			{ width:25, height:100, top: 0, left: 0, bottom: null, right: null, borderRadius: 0	},
			{ width:25, height:40.45, top: null, left: null, bottom: 0, right: 0, borderRadius: 0},
			{ width:25, height:100, top: 0, left: 25, bottom: null, right: null, borderRadius: 0},
			{ width:50, height:100, top: 0, left: null, bottom: null, right: 0, borderRadius: 0},
		],
	];
	const constantStateStyles = [
		{zIndex:1},
		{zIndex:3},
		{zIndex:2},
		{zIndex:0},
	]

	states.forEach((state, mainIndex) => {
		state.forEach((componentState, componentStateIndex) => {
			if (componentState["right"]!==null && componentState["left"]===null) {
				const oldRight = componentState["right"]
				states[mainIndex][componentStateIndex]["right"] = null
				states[mainIndex][componentStateIndex]["left"] = 100-oldRight-componentState["width"]
			}
			if (componentState["bottom"]!==null && componentState["top"]===null) {
				const oldBottom = componentState["bottom"]
				states[mainIndex][componentStateIndex]["bottom"] = null
				states[mainIndex][componentStateIndex]["top"] = 100-oldBottom-componentState["height"]
			}
			componentState = states[mainIndex][componentStateIndex]
			Object.keys(componentState).forEach((key) => {
				// const current = states[mainIndex][componentStateIndex][key]
				if (states[mainIndex][componentStateIndex][key]===null) {
					delete states[mainIndex][componentStateIndex][key]
				}
				if (key==="width" || key==="height" || key==="top" || key==="bottom" || key==="left" || key==="right" || key==="borderRadius") {
					if (states[mainIndex][componentStateIndex][key]!==null && typeof states[mainIndex][componentStateIndex][key]==="number") {
						states[mainIndex][componentStateIndex][key] = states[mainIndex][componentStateIndex][key] + "%"
					}
				}
			})

		})
	})
	const [projectsType, setProjectsType] = useState(0)
	function choiceIndex(array) {
		return Math.floor(Math.random() * array.length)
	}
	useEffect(() => {
		const projectsInterval = setInterval(() => {
			const newProjectTypeIndex = choiceIndex(states) 
			setProjectsType(newProjectTypeIndex)
		}, 3000)
		return () => {
			clearInterval(projectsInterval)
		}
	})
	return (
		<div className="bg-dark-white w-full flex items-center justify-center">
			<div className="projects-container my-20 w-[100%] sm:w-[95%] lg:w-[80%] xl:w-[70%] 2xl:[w-55%] flex items-center justify-center">
				<div className="square-projects-container">
					<div style={{...constantStateStyles[0], ...states[projectsType][0]}} className="mini-projects mug-project bg-cyan-500"></div>
					<div style={{...constantStateStyles[1], ...states[projectsType][1]}} className="mini-projects kentucky-project bg-pink"></div>
					<div style={{...constantStateStyles[2], ...states[projectsType][2]}} className="mini-projects chess-project bg-purple"></div>
					<div style={{...constantStateStyles[3], ...states[projectsType][3]}} className="mini-projects friendlyfur-project bg-dark-purple"></div>
				</div>
			</div>
		</div>
	);
}

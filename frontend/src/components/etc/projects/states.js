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

export default states;

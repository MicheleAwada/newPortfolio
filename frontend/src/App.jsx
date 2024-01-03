import Intro from "./components/intro";
import Projects from "./components/projects";
import Langs from "./components/langs";
import Contact from "./components/contact";
import ThemeSwitch from "./components/themeSwitch";

import RenderMessages, { getSimpleAddMessages } from "./components/messages";
import { useEffect, useState, createContext, useContext } from "react";

import { DarkThemeToggle, Flowbite } from "flowbite-react";

export const ThemeContext = createContext(null);

function App() {
	const [messages, setMessages] = useState({});
	const simpleAddMessage = getSimpleAddMessages(messages, setMessages);

	const [isLightTheme, setIsLightTheme] = useState(null);

	useEffect(() => {
		const localStorageThemeExists = localStorage.getItem("theme") !== null;
		const localStorageTheme = localStorage.getItem("theme") === "true";
		const mediaPrefersDarkMode =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		const mediaPrefersLightMode = !mediaPrefersDarkMode;

		const finalPreference = localStorageThemeExists
			? localStorageTheme
			: mediaPrefersLightMode;
		setIsLightTheme(finalPreference);
	}, []);

	useEffect(() => {
		if (isLightTheme !== null) {
			const root = document.documentElement;
			root.setAttribute("class", isLightTheme ? "light" : "dark");
			localStorage.setItem("theme", isLightTheme);
		}
	}, [isLightTheme]);

	return (
		<ThemeContext.Provider value={isLightTheme}>
			<RenderMessages messages={messages} />
			<Intro setIsLightTheme={setIsLightTheme} />
			<Projects />
			<Langs />
			<Contact simpleAddMessage={simpleAddMessage} />
		</ThemeContext.Provider>
	);
}

export default App;

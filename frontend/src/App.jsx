import Intro from "./components/intro";
import Projects from "./components/projects";
import Langs from "./components/langs";
import Contact from "./components/contact";

import RenderMessages, { getSimpleAddMessages } from "./components/messages";
import { useEffect, useState, createContext, useContext } from "react";

export const ThemeContext = createContext(null);

function App() {
	const [messages, setMessages] = useState({});
	const simpleAddMessage = getSimpleAddMessages(messages, setMessages);

	const [isLightTheme, setIsLightTheme] = useState(true);

	useEffect(() => {
		const prefersDarkMode =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		setIsLightTheme(!prefersDarkMode);
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		root.setAttribute("data-theme", isLightTheme ? "light" : "dark");
	}, [isLightTheme]);
	return (
		<ThemeContext.Provider value={isLightTheme}>
			<RenderMessages messages={messages} />
			<Intro />
			<Projects />
			<Langs />
			<Contact simpleAddMessage={simpleAddMessage} />
		</ThemeContext.Provider>
	);
}

export default App;

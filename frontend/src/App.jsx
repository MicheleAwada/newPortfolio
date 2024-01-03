import Intro from "./components/intro";
import Projects from "./components/projects";
import Langs from "./components/langs";
import Contact from "./components/contact";

import RenderMessages, { getSimpleAddMessages } from "./components/messages";
import { useEffect, useState } from "react";

function App() {
	const [messages, setMessages] = useState({});
	const simpleAddMessage = getSimpleAddMessages(messages, setMessages);
	useEffect(() => {
		function setThemePreference() {
			const prefersDarkMode =
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches;

			const root = document.documentElement;
			root.setAttribute("data-theme", prefersDarkMode ? "dark" : "light");
		}
		setThemePreference();
	});
	return (
		<>
			<RenderMessages messages={messages} />
			<Intro />
			<Projects />
			<Langs />
			<Contact simpleAddMessage={simpleAddMessage} />
		</>
	);
}

export default App;

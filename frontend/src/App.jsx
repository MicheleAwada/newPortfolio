import Intro from "./components/intro";
import Projects from "./components/projects";
import Langs from "./components/langs";
import Contact from "./components/contact";

import getSimpleAddMessages from "./components/messages";
import { useState } from "react";

function App() {
	const [message, setMessage] = useState({});
	const simpleAddMessage = getSimpleAddMessages(message, setMessage);
	return (
		<>
			<Intro />
			<Projects />
			<Langs />
			<Contact simpleAddMessage={simpleAddMessage} />
		</>
	);
}

export default App;

import Intro from "./components/intro";
import Projects from "./components/projects";
import Langs from "./components/langs";
import Contact from "./components/contact";

import RenderMessages, { getSimpleAddMessages } from "./components/messages";
import { useState } from "react";

function App() {
	const [messages, setMessages] = useState({});
	const simpleAddMessage = getSimpleAddMessages(messages, setMessages);
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

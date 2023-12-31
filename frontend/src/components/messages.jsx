import { Alert } from "flowbite-react";

import {
	HiOutlineCheckCircle,
	HiOutlineExclamationCircle,
	HiInformationCircle,
	HiOutlineExclamation,
} from "react-icons/hi";

function getLastKey(dict) {
	if (!dict) {
		return -1;
	}
	const keys = Object.keys(dict);
	const last_key = keys[keys.length - 1];
	return last_key;
}

function addMessageToSetMessage(dict, value) {
	const last_key = getLastKey(dict);
	const new_dict = { ...dict, [last_key + 1]: value };
	return new_dict;
}
function simpleMakeMessage(
	type,
	message,
	boldMessage = "",
	messages,
	setMessages
) {
	let color;
	let icon;
	if (type === "error") {
		color = "failure";
		icon = HiOutlineExclamationCircle;
	} else if (type === "success") {
		color = "success";
		icon = HiOutlineCheckCircle;
	} else if (type === "info") {
		color = "info";
		icon = HiInformationCircle;
	} else if (type === "warning") {
		color = "warning";
		icon = HiOutlineExclamation;
	}

	const key = getLastKey(messages) + 1; //doesnt exist yet

	function dismissMessage() {
		setMessages((prevList) => {
			const newList = { ...prevList };
			delete newList[key];
			return newList;
		});
	}

	const timeout = setTimeout(dismissMessage, 4500);

	function dismissNow() {
		clearTimeout(timeout);
		dismissMessage();
	}

	return (
		<Alert
			color={color}
			icon={icon}
			onDismiss={dismissNow}
			className="shadow-sm"
			key={key}
		>
			<p className="pr-0 md:pr-2">
				{boldMessage && (
					<span className="font-medium">{boldMessage + " "}</span>
				)}
				{message}
			</p>
		</Alert>
	);
}

function addMessageWithSetMessage(messageElement, setMessages) {
	setMessages((prevList) =>
		addMessageToSetMessage({ ...prevList }, messageElement)
	);
}

export function get_all_messages(messages, setMessages) {
	const addMessage = (message) =>
		addMessageWithSetMessage(message, setMessages);
	const simpleAddMessage = (message, type, boldMessage = "") =>
		addMessage(
			simpleMakeMessage(message, type, boldMessage, messages, setMessages)
		);

	return { simpleAddMessage, addMessage };
}

export function getSimpleAddMessages(messages, setMessages) {
	return get_all_messages(messages, setMessages).simpleAddMessage;
}

export default function RenderMessages({
	messages,
	className = "gap-2 top-0 right-0 p-8",
}) {
	return (
		<div
			id="messages"
			className={`fixed z-50 flex flex-col items-center ${className}`}
		>
			{Object.keys(messages)
				.reverse()
				.map((message) => messages[message])}
		</div>
	);
}

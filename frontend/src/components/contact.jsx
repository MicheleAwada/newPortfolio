import "./styles/contact.scss";

import Wave from "../assets/contact/images/wave.svg?react";
import email_icon from "../assets/contact/images/email.svg";
import EmailIconComponent from "../assets/contact/images/email.svg?react";
import spinner_icon from "../assets/contact/images/spinner.svg";

import { Form, useActionData } from "react-router-dom";
import { Button, Label, TextInput, Checkbox, Textarea } from "flowbite-react";
import { useContext, useEffect, useRef, useState } from "react";

import { useNavigation } from "react-router-dom";

import { contact } from "../api";

import { ThemeContext } from "../app";

export async function action({ request, params }) {
	console.log("once");
	const formData = await request.formData();
	const response = await contact(formData);
	return response;
}

function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);
}

export default function Contact({ simpleAddMessage }) {
	const isLightTheme = useContext(ThemeContext);
	const actionData = useActionData();
	const navigation = useNavigation();
	const showSpinner =
		navigation.state === "submitting" && navigation.location.pathname === "/";
	const formRef = useRef();
	function cancelForm() {
		formRef.current.reset();
	}
	function raiseErrorMessage(actionData) {
		if (actionData === undefined) {
			return;
		}
		if (actionData.succeeded === true) {
			cancelForm();
			return simpleAddMessage("success", "Your message was sent", "Success!");
		}
		if (actionData.succeeded === false) {
			return simpleAddMessage("error", actionData.errors, "Whops!");
		}
	}

	useEffect(() => {
		raiseErrorMessage(actionData);
	}, [actionData]);

	useEffect(() => {
		let elems = document.getElementsByClassName("jump-child-on-hover");
		elems = Array.from(elems);

		elems.forEach((elem, index) => {
			const child = elem.children[0];
			const jump_force = 8;
			let max_acc = 0;
			let acc = 0;
			let pos = 0;
			let cooldown = false;
			function jump() {
				if (!cooldown) {
					max_acc = jump_force;
					acc = jump_force;
					cooldown = true;
				}
			}
			elem.addEventListener("mouseover", () => jump());
			if (isMobile() || true) {
				function loop_jump(first = false) {
					!first && setTimeout(jump, 250 * index);
					setTimeout(loop_jump, first ? 6000 : isMobile() ? 12000 : 16000);
				}
				loop_jump(true);
			}
			elem.addEventListener("mouseout", () => {});
			function onUpdate() {
				pos += acc;
				if (pos <= 0) {
					pos = 0;
					max_acc = Math.floor(max_acc / 1.25);
					if (max_acc === 0) {
						cooldown = false;
					}
					acc = max_acc;
				}
				child.style.bottom = pos + "px";
				acc--;
				requestAnimationFrame(onUpdate);
			}
			requestAnimationFrame(onUpdate);
		});
	}, []);
	return (
		<div className="flex flex-col items-center overflow-hidden w-full">
			<Wave className="w-full bg-pink" />
			<div className="bg-purple w-full px-[12vw] pb-16 flex items-center flex-col gap-6 xl:flex-row xl:items-start xl:gap-12">
				<div className="w-full">
					<h1
						className={
							"pt-4 pb-12 text-center text-2xl md:text-3xl font-bold " +
							(isLightTheme ? "text-white" : "text-gray-200")
						}
					>
						Lets get in Touch
					</h1>
					<Form
						ref={formRef}
						method="POST"
						className="w-full flex flex-col gap-3"
					>
						<div className="flex w-full flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8">
							<div className="flex-grow">
								<div className="mb-1 block">
									<Label
										className={
											isLightTheme ? "text-white" : "dark:text-gray-200"
										}
										htmlFor="name"
										value="Your Name *"
									/>
								</div>
								<TextInput
									required
									id="name"
									name="name"
									type="text"
									placeholder="John Smith"
								/>
							</div>
							<div className="flex-grow">
								<div className="mb-1 block">
									<Label
										className={
											isLightTheme ? "text-white" : "dark:text-gray-200"
										}
										htmlFor="email"
										value="Your Email *"
									/>
								</div>
								<TextInput
									required
									id="email"
									name="email"
									type="email"
									placeholder="name@email.com"
								/>
							</div>
						</div>
						<div>
							<div className="mb-1 block">
								<Label
									className={isLightTheme ? "text-white" : "dark:text-gray-200"}
									htmlFor="message-title"
									value="Message's Title *"
								/>
							</div>
							<TextInput
								required
								id="message-title"
								name="title"
								type="text"
								placeholder="Hiring Oppurtunity"
							/>
						</div>
						<div className="pb-4 md:pb-8">
							<div className="mb-1 block">
								<Label
									className={isLightTheme ? "text-white" : "dark:text-gray-200"}
									htmlFor="message-body"
									value="Message's Body"
								/>
							</div>
							<Textarea
								required={false}
								rows={6}
								id="message-body"
								name="body"
								type="text"
								placeholder="Hello..."
							/>
						</div>
						<Button color="dark" type="sumbit" disabled={showSpinner}>
							{showSpinner && (
								<img
									src={spinner_icon}
									alt="spinner"
									className="animate-spin mr-4"
								/>
							)}
							Sumbit
						</Button>
					</Form>
				</div>
				<p
					className={
						"text-2xl text-center xl:pt-8 " +
						(isLightTheme ? "text-white" : "text-gray-200")
					}
				>
					Or
				</p>
				<div>
					<h1
						className={
							"pt-4 pb-4 text-center text-2xl md:text-3xl font-semibold " +
							(isLightTheme ? "text-white" : "text-gray-200")
						}
					>
						Contact through my socials
					</h1>
					<div className="flex justify-center gap-12 pt-12 pb-8">
						<a
							href="https://github.com/MicheleAwada/"
							className="jump-child-on-hover w-14 aspect-square relative"
						>
							<div className="absolute bottom-0 left-0 w-full">
								<img
									className="w-full aspect-square"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
									alt="github"
								/>
							</div>
						</a>
						<a
							href="https://www.linkedin.com/in/michele-awada/"
							className="jump-child-on-hover w-14 aspect-square relative"
						>
							<div className="absolute bottom-0 left-0 w-full">
								<img
									className="w-full aspect-square"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
									alt="linkedin"
								/>
							</div>
						</a>
						<a
							href="mailto:info@micheleawada.com"
							className="jump-child-on-hover w-14 aspect-square relative"
						>
							<div className="absolute bottom-0 left-0 w-full">
								<EmailIconComponent
									className="w-full aspect-square p-2 bg-[#181616] rounded-md"
									alt="email"
								/>
							</div>
						</a>
					</div>
					<p className="text-center text-white">Email: info@micheleawada.com</p>
				</div>
			</div>
		</div>
	);
}

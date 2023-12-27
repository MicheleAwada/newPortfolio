import "./styles/contact.scss";

import wave from "../assets/contact/images/wave.svg";
import email_icon from "../assets/contact/images/email icon.svg";
import { Form } from "react-router-dom";
import { Button, Label, TextInput, Checkbox, Textarea } from "flowbite-react";
import { useEffect } from "react";

import { contact } from "../api";

export async function action({ request, params }) {
	const formData = await request.formData();
	const response = await contact(formData);
	return response;
}

function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);
}

export default function Contact() {
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
		<>
			<img src={wave} alt="wave transition" className="w-full bg-dark-white" />
			<div className="bg-purple px-[12vw] pb-16 flex items-center flex-col gap-6 xl:flex-row xl:gap-12">
				<div className="w-full">
					<p className="pt-4 pb-12 text-center text-white text-3xl font-bold">
						Lets get in Touch
					</p>
					<Form method="POST" className="w-full flex flex-col gap-3">
						<div className="flex w-full flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8">
							<div className="flex-grow">
								<div className="mb-1 block">
									<Label
										className="text-white"
										htmlFor="name"
										value="Your Name"
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
										className="text-white"
										htmlFor="email"
										value="Your Email"
									/>
								</div>
								<TextInput
									required={false}
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
									className="text-white"
									htmlFor="message-title"
									value="Message Title"
								/>
							</div>
							<TextInput
								required={false}
								id="message-title"
								name="title"
								type="text"
								placeholder="Hiring Oppurtunity"
							/>
						</div>
						<div className="pb-4 md:pb-8">
							<div className="mb-1 block">
								<Label
									className="text-white"
									htmlFor="message-body"
									value="Message"
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
						<Button color="dark" type="sumbit">
							Sumbit
						</Button>
					</Form>
				</div>
				<p className="text-white text-2xl text-center">Or</p>
				<div>
					<p className="pt-4 pb-4 text-center text-white text-3xl font-bold">
						Contact through my socials
					</p>
					<div className="flex justify-center gap-12 pt-12 pb-8">
						<a
							href="https://github.com/MicheleAwada/"
							className="jump-child-on-hover w-14 aspect-square relative"
						>
							<div className="absolute bottom-0 left-0">
								<img
									className="w-full aspect-square"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
								/>
							</div>
						</a>
						<a
							href="https://www.linkedin.com/in/michele-awada/"
							className="jump-child-on-hover w-14 aspect-square relative"
						>
							<div className="absolute bottom-0 left-0">
								<img
									className="w-full aspect-square"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
								/>
							</div>
						</a>
						<a
							href="mailto:info@micheleawada.com"
							className="jump-child-on-hover w-14 aspect-square relative"
						>
							<div className="absolute bottom-0 left-0">
								<img
									className="w-full aspect-square p-2 bg-gray-900 rounded-md"
									src={email_icon}
								/>
							</div>
						</a>
					</div>
					<p className="text-center text-white">Email: info@micheleawada.com</p>
				</div>
			</div>
		</>
	);
}

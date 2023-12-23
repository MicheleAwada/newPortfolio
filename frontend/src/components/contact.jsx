import wave from "../assets/images/contact/wave.svg"
import email_icon from "../assets/images/contact/email icon.svg"
import { Form } from "react-router-dom"
import {Button, Label, TextInput, Checkbox, Textarea} from "flowbite-react"
import { useEffect } from "react"


export default function Contact() {
    useEffect(() => {
        let elems = document.getElementsByClassName("jump-child-on-hover")
        elems = Array.from(elems)
        
        
        elems.forEach((elem) => {
            const child = elem.children[0]
            const jump_force = 12
            let max_acc = 0
            let acc = 0
            let pos = 0
            let cooldown=false
            elem.addEventListener("mouseover", () => {
                console.log("hi")
                if (!cooldown) {
                    max_acc = jump_force
                    acc = jump_force
                    cooldown=true
                }
                
            })
            elem.addEventListener("mouseout", () => {

            })
            function onUpdate() {
                pos += acc
                if (pos<=0) {
                    pos = 0
                    max_acc = Math.floor(max_acc/1.25)
                    if(max_acc === 0) {
                        cooldown=false
                    }
                    acc = max_acc
                }
                child.style.bottom = pos+"px"
                acc--
                requestAnimationFrame(onUpdate)
            }
            requestAnimationFrame(onUpdate)
        })
    }, [])
    return (
        <>
            <img src={wave} alt="wave transition" className="w-full " />
            <div className="bg-purple px-[12vw] pb-16 flex flex-col gap-6 xl:flex-row xl:gap-12">
                <div className="w-full">
                    <p className="pt-4 pb-12 text-center text-white text-3xl font-bold">Lets get in Touch</p>
                    <Form method="post" className="w-full flex flex-col gap-3">
                        <div className="flex w-full gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                            <div className="flex-grow">
                                <div className="mb-1 block">
                                <Label className="text-white" htmlFor="name" value="Your Name" />
                                </div>
                                <TextInput id="name" type="text" placeholder="John Smith" required />
                            </div>
                            <div className="flex-grow">
                                <div className="mb-1 block">
                                <Label className="text-white" htmlFor="email" value="Your Email" />
                                </div>
                                <TextInput id="email" type="email" placeholder="name@email.com" required />
                            </div>
                        </div>
                        <div>
                            <div className="mb-1 block">
                            <Label className="text-white" htmlFor="message-title" value="Message Title" />
                            </div>
                            <TextInput id="message-title" type="text" placeholder="Hiring Oppurtunity" required />
                        </div>
                        <div className="pb-4 lg: pb-8">
                            <div className="mb-1 block">
                            <Label className="text-white" htmlFor="message-body" value="Message" />
                            </div>
                            <Textarea rows={6} id="message-body" type="text" placeholder="Hello..." required />
                        </div>
                        <Button color="dark" type="sumbit">Sumbit</Button>
                    </Form>
                </div>
                {/* <p className="text-white text-lg text-center py-12">Or</p> */}
                <div className="px-4 h-0.5 w-full xl:h-full xl:w-0.5">
                    <div className="bg-white w-full h-full" />
                </div>
                <div>
                    <p className="pt-4 pb-12 text-center text-white text-3xl font-bold">Contact through my socials</p>
                    <div className="flex justify-center gap-12 pt-12 pb-8">
                        <a href="https://github.com/MicheleAwada/" className="jump-child-on-hover w-14 aspect-square relative"><div className="absolute bottom-0 left-0"><img className="w-full aspect-square" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></div></a>
                        <a href="https://www.linkedin.com/in/michele-awada/" className="jump-child-on-hover w-14 aspect-square relative"><div className="absolute bottom-0 left-0" ><img className="w-full aspect-square" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></div></a>
                        <a href="mailto:info@micheleawada.com" className="jump-child-on-hover w-14 aspect-square relative"><div className="absolute bottom-0 left-0"><img className="w-full aspect-square p-2 bg-gray-900 rounded-md" src={email_icon} /></div></a>
                    </div>
                    <p className="text-center text-white">Email: info@micheleawada.com</p>
                </div>
            </div>
        </>
    )
}
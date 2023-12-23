import wave from "../assets/images/contact/wave.svg"
import { Form } from "react-router-dom"
import {Button, Label, TextInput, Checkbox, Textarea} from "flowbite-react"


export default function Contact() {
    return (
        <>
            <img src={wave} alt="wave transition" className="w-full " />
            <div className="bg-purple px-[16vw] lg:px-[24vw] pb-16">
                <p className="py-4 text-center text-white text-4xl font-bold">Lets get in Touch</p>
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
                    <Button color="dark" type="sumbit">Pink to Orange</Button>
                </Form>
            </div>
        </>
    )
}
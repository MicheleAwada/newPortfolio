import wave from "../assets/images/contact/wave.svg"

export default function Contact() {
    return (
        <>
            <img src={wave} alt="wave transition" className="w-full " />
            <div className="bg-purple">
                <p className="py-4 text-center text-white text-2xl">Lets get in Touch</p>

            </div>
        </>
    )
}
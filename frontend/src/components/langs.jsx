import "./styles/langs.css"

import NginxLogo from "../assets/images/langs/nginx-icon.svg"
import TraefikLogo from "../assets/images/langs/traefikio-icon.svg"

export default function Langs() {
    const languages_info = [
        {
            name: "React",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },

    ]
    return (
        <div className="bg-pink w-full">

            <p className="text-center text-white text-4xl py-4">Languages I speak</p>
            <div className="px-24 py-6 flex flex-wrap gap-y-10">
                {languages_info.map((info) => (
                    <div className="split-icon inline-flex h-auto">
                        <div className="split-left-div">
                            <img className="z-10 split-left" src={info.img} />
                        </div>
                        <p className="split-inner text-3l font-bold text-white">
                            {info.name}
                        </p>
                        <div className="split-right-div">
                            <img className="z-10 split-right" src={info.img} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
import "./styles/langs.css"

import layered_wave from "../assets/images/langs/layered-waves.svg"

import NginxLogo from "../assets/images/langs/nginx-icon.svg"
import TraefikLogo from "../assets/images/langs/traefikio-icon.svg"

export default function Langs() {
    const languages_info = [
        {
            name: "React",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "HTML",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "SASS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
        {
            name: "Tailwind",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
            name: "Bootstrap",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
        },
        {
            name: (<>Java<br />Script</>),
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "Python",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
            name: "Django",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
            name: "Postgres",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
            name: "Docker",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
            name: "Nginx",
            img: NginxLogo,
        },
        {
            name: "traefik",
            img: TraefikLogo,
        },
        {
            name: "Git",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            name: "GitHub",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
            name: "GitHub",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
        },
    ]
    return (

        <>
            <img src={layered_wave} alt="layered_wave" className="w-full bg-dark-white" />
            <div className="bg-pink w-full">
                <p className="text-center text-white text-4xl py-4">Languages I <span className="line-through decoration-dark-white">speak</span> code</p>
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
        </>
    )
}
import "./styles/projects.css"

import friendlyFurThumbnail from "../assets/images/friendly fur.png"

export default function Projects() {
    const projects_info = [
        {
            title: "Friendly Fur",
            description: "Website Developer",
            thumbnail: friendlyFurThumbnail
        },
        {
            title: "Friendly Fur",
            description: "Website Developer",
            thumbnail: friendlyFurThumbnail
        },
    ]
    return (
        <section className="bg-[#F3F8FF] w-full h-32 pt-4">
            <h1 className="text-center text-4xl"><span className="rotated-my">My</span> Projects</h1>
            <div id="proj-container" className="flex flex-wrap gap-8 p-8 items-center w-full py-12 bg-[#F3F8FF]">
                {projects_info.map((info, index) => (<div className="flip-card w-80 h-60 p-4 border-[#7E30E1] border-2 rounded-md">
                    <div className="flip-card-inner">
                        <div className="flip-card-front flex flex-col rounded-md">
                            <div className="max-w-full">
                                <img src={info.thumbnail} alt={info.title + " Thumbnail"} className="w-full" />
                            </div>
                            <div className="w-full h-full bg-[#E26EE5] flex items-center justify-center">
                                <p className="text-white text-2xl">{info.title}</p>
                            </div>
                        </div>
                        <div className="flip-card-back flex justify-center items-center">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl">{info.title}</h1>
                                <p>{info.description}</p>
                                <button className="bg-red-600 text-white px-4 py-2 rounded-xl">LIVE Site</button>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </section>
    )
}
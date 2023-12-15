import "./styles/projects.css"

import friendlyFurThumbnail from "../assets/images/friendly fur.png"

export default function Projects() {

    return (
        <section className="bg-[#F3F8FF] w-full h-32 pt-4">
            <h1 className="text-center text-4xl"><span className="rotated-my">My</span> Projects</h1>
            <div id="proj-container" className="flex flex-wrap gap-8 p-8 items-center w-full py-12 bg-[#F3F8FF]">
                    <div className="flip-card w-80 h-60 p-4 border-[#7E30E1] border-2 rounded-md">
                        <div className="flip-card-inner">
                            <div className="flip-card-front flex flex-col rounded-md">
                                <div className="max-w-full">
                                    <img src={friendlyFurThumbnail} alt="Friendly Fur Thumbnail" className="w-full" />
                                </div>
                                <div className="w-full h-full bg-[#E26EE5] flex items-center justify-center">
                                    <p className="text-white text-2xl">Friendly Fur</p>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <h1>Friendly Fur</h1> 
                                <p>Website Developer</p> 
                                <p>Visit profile</p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}
import { useEffect } from "react";
import start_game from "./kaboom/game";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function KentuckyGame() {
	useEffect(() => {
		return start_game("kentucky-canvas");
	});
	return (
		<div className="h-full flex flex-col">
			<Link
				to="/"
				className="bg-gray-900 w-12 aspect-square rounded-full m-4 mb-0 p-4 inilne"
			>
				<IoMdArrowRoundBack color="white" />
			</Link>
			<div className="flex-grow flex items-center justify-center pb-8">
				<canvas id="kentucky-canvas" className=""></canvas>
			</div>
		</div>
	);
}

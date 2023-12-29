import { useEffect } from "react";
import start_game from "./kaboom/game";

export default function KentuckyGame() {
	useEffect(() => {
		return start_game("kentucky-canvas");
	});
	return (
		<div className="flex items-center justify-center w-full h-full">
			<canvas id="kentucky-canvas" className=""></canvas>
		</div>
	);
}

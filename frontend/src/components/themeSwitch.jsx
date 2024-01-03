import "./styles/themeSwitch.scss";

export default function ThemeSwitch({ toggled, toggle }) {
	return (
		<button
			onClick={toggle}
			className={
				"moon-button rounded-md " + (toggled ? "bg-gray-300" : "bg-gray-700")
			}
		>
			<div className="moon-rotate rotate-[20deg]">
				<div className="moon-shape"></div>
			</div>
		</button>
	);
}

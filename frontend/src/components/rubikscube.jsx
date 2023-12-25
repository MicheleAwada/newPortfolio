import { OrbitControls, RoundedBox, Stars, useFBX } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function RubiksFullCube() {
	const [cubesInfo, setCubesInfo] = useState([]);
	let cubesInfoList = [];

	const groups = [];

	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			groups.push({
				requirement(pos) {
					return pos[i + 1] === j; // pos[i+1] is like the direction 0 is x and so on
				},
				pos: [i, j],
				drequirement(posdir, dir) {
					const result = dir === i + 1 && posdir === j;
					return result;
				},
			});
			for (let k = -1; k < 2; k++) {
				const posList = [i, j, k];
				const id = generateUniqueID(posList);
				cubesInfoList.push({
					startingPos: posList,
					currentPos: posList,
					actualPos: posList,
					groupParent: null,
					id: id,
					frameFunction(groupRef) {
						return "complete";
					},
				});
			}
		}
	}

	const mainGroupRef = useRef();

	return (
		<>
			<group ref={mainGroupRef}>
				{cubesInfo.map((cubeInfo, index) => {
					return (
						<IndividalCube
							key={index}
							activateMove={activateMove}
							cubesInfo={cubesInfo}
							id={index}
							groups={groups}
						/>
					);
				})}
			</group>
		</>
	);
}

function IndividalCube({
	cubesInfo,
	activateMove,
	object,
	groups,
	id,
	...props
}) {
	const mesh = useRef();
	const cubeInfo = cubesInfo[id];

	const geometry = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();

	const colors = [];
	const color = new THREE.Color();

	const color_faces = {};
	const startingPos = cubeInfo.startingPos;

	color_faces["top"] = [0.9, 0.9, 0.1];
	color_faces["bottom"] = [1, 1, 1];
	color_faces["right"] = [0.8, 0.2, 0.2];
	color_faces["left"] = [1, 0.5, 0.2];
	color_faces["front"] = [0.2, 0.4, 0.8];
	color_faces["back"] = [0.2, 0.7, 0.3];
	const empty_face_color = [0.033, 0.033, 0.033];
	const order_of_direction = [
		"right",
		"left",
		"top",
		"bottom",
		"front",
		"back",
	];

	for (let i = 0; i < geometry.attributes.position.count; i += 6) {
		const current_face = order_of_direction[i / 6];

		const color_to_apply = color_faces.hasOwnProperty(current_face)
			? color_faces[current_face]
			: empty_face_color;

		for (let j = 0; j < 6; j++) {
			colors.push(...color_to_apply);
		}
	}

	geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

	const groupCenterRef = useRef();
	useFrame(() => {
		cubeInfo.frameFunction(groupCenterRef);
	});

	return (
		<>
			<group ref={groupCenterRef} position={[0, 0, 0]}>
				<mesh
					ref={mesh}
					position={cubeInfo.actualPos.map((val) => val * 1.01)}
					onClick={() => activateMove(cubeInfo.currentPos[2], 2, -1)}
					geometry={geometry}
				>
					<meshBasicMaterial
						{...props}
						object={object}
						attach="material"
						vertexColors={true}
					/>
				</mesh>
			</group>
		</>
	);
}

export function RoundedCubeTest() {
	const geometry = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();

	const colors = [];

	const color_faces = {};
	color_faces["top"] = [0.9, 0.9, 0.1];
	color_faces["bottom"] = [1, 1, 1];
	color_faces["right"] = [0.8, 0.2, 0.2];
	color_faces["left"] = [1, 0.5, 0.2];
	color_faces["front"] = [0.2, 0.4, 0.8];
	color_faces["back"] = [0.2, 0.7, 0.3];
	const empty_face_color = [0.033, 0.033, 0.033];
	const order_of_direction = [
		"right",
		"left",
		"top",
		"bottom",
		"front",
		"back",
	];

	for (let i = 0; i < geometry.attributes.position.count; i += 6) {
		const current_face = order_of_direction[i / 6];

		const color_to_apply = color_faces.hasOwnProperty(current_face)
			? color_faces[current_face]
			: empty_face_color;

		for (let j = 0; j < 6; j++) {
			colors.push(...color_to_apply);
		}
	}

	geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
	return (
		<RoundedBox radius={0.2} geometry={geometry}>
			<meshStandardMaterial attach={"material"} vertexColors={true} />
		</RoundedBox>
	);
}

function Piano() {
	let painoFBX = useFBX("piano.fbx");

	return (
		<mesh scale={0.05}>
			<primitive object={painoFBX} />
		</mesh>
	);
}

export default function MainRubiksCube() {
	return (
		<div className="bg-gray-800 h-full">
			<Canvas>
				<OrbitControls rotateSpeed={0.5} />
				<Stars />
				<ambientLight intensity={1} />

				{/* <RubiksFullCube /> */}
				{/* <RoundedCubeTest /> */}
				<Piano />
			</Canvas>
		</div>
	);
}

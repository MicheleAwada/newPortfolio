import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from 'three';
import { OrbitControls, RoundedBox, Stars } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"


function randomListItem(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function RubiksIndividialCube({ color="hotpink", ...props }) {
    return (
        // <mesh {...props}>
        //     {/* <RoundedBox {...props} args={[1, 1, 1]} radius={0.33} /> */}
        //     <boxGeometry {...props} attach={"geometry"} />
        //     <meshBasicMaterial attach="material" color={randomListItem(["pink", "red", "green", "blue", "yellow", "purple", "white", "black", "hotpink"])} />
        // </mesh>
        <IndividalCube {...props} />
    )
}

function increment_list_index(list, index) {
    list[index] = list[index]++
    return list
}

function RubiksLine({pos}) {
    return (
    <>
        <RubiksIndividialCube position={[-1,pos[1], pos[2]]}/>
        <RubiksIndividialCube position={[0,pos[1], pos[2]]}/>
        <RubiksIndividialCube position={[1,pos[1], pos[2]]}/>
    </>
    )
}
function RubiksSquare({pos}) {
    return (
    <>
        <RubiksLine pos={[-1,pos[1],-1]}/>
        <RubiksLine pos={[-1,pos[1],0]}/>
        <RubiksLine pos={[-1,pos[1],1]}/>
    </>
    )
}

function generateUniqueID(list) {
    // Ensure the list has exactly 3 elements
    if (list.length !== 3) {
      throw new Error('List should contain exactly 3 elements');
    }
  
    // Convert the list from base-3 to base-10
    const id = list[0] * Math.pow(3, 2) + list[1] * Math.pow(3, 1) + list[2] * Math.pow(3, 0);
  
    return id;
  }

function moveCube(currentPosition, direction) {
    // Check if the current position is valid
    if (!currentPosition.every(coord => coord >= -1 && coord <= 1)) {
      throw new Error("Invalid cube position");
    }
  
    // Define movement vectors based on the direction
    const movement = [
      [-1, 0, 0],  // Movement along x-axis (direction 0)
      [0, 1, 0],   // Movement along y-axis (direction 1)
      [0, 0, -1]   // Movement along z-axis (direction 2)
    ];
  
    // Perform the movement
    const new_position = currentPosition.map((coord, index) => coord + movement[direction][index]);
  
    // Check if the new position is within bounds
    if (!new_position.every(coord => coord >= -1 && coord <= 1)) {
      throw new Error("Cube moved out of bounds");
    }
  
    return new_position;
  }

function RubiksFullCube() {
    const [cubesInfo, setCubesInfo] = useState([])
    let cubesInfoList = []

    const groups = []

    for (let i=-1; i<2; i++) {
        for (let j=-1; j<2; j++) {
            groups.push({
                requirement(pos) {
                    return pos[i+1]===j// pos[i+1] is like the direction 0 is x and so on
                },
                pos: [i,j],
                drequirement(posdir, dir) {
                    const result = dir===(i+1) && posdir === j
                    return result
                }
            })
            for (let k=-1; k<2; k++) {
                const posList = [i,j,k]
                const id = generateUniqueID(posList)
                cubesInfoList.push({
                    startingPos: posList,
                    currentPos: posList,
                    actualPos: posList,
                    groupParent: null,
                    id: id,
                    frameFunction(groupRef) {
                        return "complete"
                    },
                })
            }
        }
    }


    const mainGroupRef = useRef();




    function activateMove(posdir, dir, amplifier, speed=1) {
        let desiredGroup = null 
        groups.forEach((groupInfo) => {
            if (groupInfo.drequirement(posdir, dir)) {
                desiredGroup = groupInfo
            }
        })

        setCubesInfo(cubesInfo.map((cubeInfo) => {
            if (!desiredGroup) {
                return cubeInfo
            }
            const meets_requirement = desiredGroup.requirement(cubeInfo.currentPos)
            let rep = 0
            const oldFrameFunction = cubeInfo.frameFunction
            let oldFrameFunctionDone = false
            cubeInfo.frameFunction = (groupRef) => {
                console.log("hi")
                if (!oldFrameFunctionDone && oldFrameFunction(groupRef)==="complete") {oldFrameFunctionDone=true} 
                if (oldFrameFunctionDone) {
                    if (rep >= 50) {
                        return "complete"
                    }
                    if (meets_requirement) {
                        const index_to_notation = {0:"x", 1:"y", 2:"z"}
                        const notation = index_to_notation[dir]
                        groupRef.current.rotation[notation] = groupRef.current.rotation[notation] + ((Math.PI/2)/50) * amplifier
                    }
                    rep+=1
                    return "uncomplete"
                }
                return "uncomplete"
            }

            return cubeInfo
        }))
    }
    function preActivateMove(cubesList, posdir, dir, amplifier, speed=1) {
        let desiredGroup = null 
        groups.forEach((groupInfo) => {
            if (groupInfo.drequirement(posdir, dir)) {
                desiredGroup = groupInfo
            }
        })

        cubesList = cubesList.map((cubeInfo) => {
            if (!desiredGroup) {
                return cubeInfo
            }
            const meets_requirement = desiredGroup.requirement(cubeInfo.currentPos)
            let rep = 0
            const oldFrameFunction = cubeInfo.frameFunction
            let oldFrameFunctionDone = false
            cubeInfo.frameFunction = (groupRef) => {
                console.log("hi")
                if (!oldFrameFunctionDone && oldFrameFunction(groupRef)==="complete") {oldFrameFunctionDone=true} 
                if (oldFrameFunctionDone) {
                    if (rep >= 50) {
                        return "complete"
                    }
                    if (meets_requirement) {
                        const index_to_notation = {0:"x", 1:"y", 2:"z"}
                        const notation = index_to_notation[dir]
                        groupRef.current.rotation[notation] = groupRef.current.rotation[notation] + ((Math.PI/2)/50) * amplifier
                }
                    rep+=1
                    return "uncomplete"
                }
                return "uncomplete"
            }
            if (meets_requirement) {
                cubeInfo.currentPos = cubeInfo.currentPos.map((pos, index) => {
                    if (index!==dir) {
                        pos = pos 
                    }
                    return pos
                })
            }
            return cubeInfo
        })
        return cubesList
    }
    
    useEffect(() =>{
        cubesInfoList = preActivateMove(cubesInfoList, -1, 0, 1)
        cubesInfoList = preActivateMove(cubesInfoList, 1, 0, 1)
        cubesInfoList = preActivateMove(cubesInfoList, 0, 1, 1)
        cubesInfoList = preActivateMove(cubesInfoList, 1, 1, 1)
        setCubesInfo(cubesInfoList)
    }, [])

    return (
        <>
            <group ref={mainGroupRef}>
                {cubesInfo.map((cubeInfo, index) => {
                    return <IndividalCube key={index} activateMove={activateMove} cubesInfo={cubesInfo} id={index} groups={groups} />
                })}
            </group>
        </>
    )
}

function isValueRepeated(list, value) {
    const count = list.reduce((acc, currentValue) => {
      if (currentValue === value) {
        acc++;
      }
      return acc;
    }, 0);
  
    return count === 2;
  }

function IndividalCube({cubesInfo, activateMove, object, groups, id, ...props}) {
    const mesh = useRef();
    const cubeInfo = cubesInfo[id]

    
    const geometry = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
  
    const colors = [];
    const color = new THREE.Color();
  

    const color_faces = {}
    const startingPos = cubeInfo.startingPos

    if (startingPos[1] === 1) {
        // yellow on top
        color_faces["top"] = [0.9,0.9,0.1]
    }
    if (startingPos[1] === -1) {
        //white on bottom
        color_faces["bottom"] = [1,1,1]
    }

    if (startingPos[0] === 1) {
        // red on right
        color_faces["right"] = [0.8, 0.2, 0.2]
    }
    if (startingPos[0] === -1) {
        color_faces["left"] = [1,0.5,0.2]
    }
    if (startingPos[2] === 1) {
        color_faces["front"] = [0.2,0.4,0.8]
    }
    if (startingPos[2] === -1) {
        color_faces["back"] = [0.2,0.7,0.3]
    }
    const empty_face_color = [0.033, 0.033, 0.033]
    const order_of_direction = ["right", "left", "top", "bottom", "front", "back"]

    for (let i = 0; i < geometry.attributes.position.count; i += 6) {    
        const current_face = order_of_direction[i/6]

    
        const color_to_apply = color_faces.hasOwnProperty(current_face) ? color_faces[current_face] : empty_face_color

        for (let j=0; j<6; j++) {
            colors.push(...color_to_apply);
        }
    }
    
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));


    const groupCenterRef = useRef()
    useFrame(() => {
        cubeInfo.frameFunction(groupCenterRef)
    })

    return (
      <>
          <group ref={groupCenterRef} position={[0,0,0]}>
              <mesh ref={mesh} position={cubeInfo.actualPos.map((val) => val*1.01 )} onClick={() => activateMove(cubeInfo.currentPos[2], 2, -1)} geometry={geometry}>
                <meshBasicMaterial {...props} object={object} attach="material"  vertexColors={true} />
              </mesh>
          </group>
      </>
    );
  }

  

export default function RubiksCube() {
    return (
        <div className="bg-gray-800 h-full">
            <Canvas>
                <OrbitControls rotateSpeed={0.5} />
                <Stars />
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[15, 35, 10]}
                    angle={300}
                    intensity={300}
                />
                <RubiksFullCube />
            </Canvas>
        </div>
    )
}

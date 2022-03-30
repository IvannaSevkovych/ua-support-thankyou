import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { shaderMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import styles from '../styles/ThreeIcons.module.scss'

import vertex from './glsl/vertex.glsl'
import fragment from './glsl/fragment.glsl'

function IconPlane({ iconFile, iconIndex, iconTotal }) {

    const texture = useLoader(THREE.TextureLoader, `/assets/${iconFile}`)

    // Create a shader material
    const ThreeIconMaterial = useMemo(() => shaderMaterial(
        {
            time: 0,
            iconTexture: texture
        },
        vertex,
        fragment,
        (material) => {
            material.transparent = true;
            material.wireframe = true;
        }
    ), [texture])

    // Create a geometry
    const planeGeometry = useMemo(() => new THREE.PlaneBufferGeometry(1, 1, 50, 50), [])

    // Set mesh position
    let x = iconIndex
    let y = 0
    if (iconTotal == 2) {
        x = 0.7 * (2 * iconIndex - 1);
    }
    else if (iconTotal == 3) {
        x = 0.7 * (iconIndex - 1);
        y = 0.7 * Math.pow(-1, iconIndex);
    }
    const z = 0
    const position = new THREE.Vector3(x, y, z)

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            // {...threeProps}
            position={position}
            ref={ref}
            geometry={planeGeometry}
            material={new ThreeIconMaterial()}
        >
        </mesh>
    )
}

export const ThreeIcons = ({ iconFiles }) => {
    return (
        <Canvas className={styles.canvas} camera={{ position: [0, 0, 2], far: 3, dpr: [1, 2] }} >
            <color attach="background" args={["#F4D566"]} />
            <Suspense fallback={"<h1>Loading...</h1>"}>
                {
                    iconFiles.map((iconFile, index) => <IconPlane key={index} iconIndex={index} iconTotal={iconFiles.length} iconFile={iconFile} />)
                }
            </Suspense>
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas >
    )
}
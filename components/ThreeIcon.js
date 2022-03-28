import { useRef, Suspense, useLayoutEffect } from 'react'
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber'
import { shaderMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import styles from '../styles/ThreeIcon.module.scss'

import vertex from './glsl/vertex.glsl'
import fragment from './glsl/fragment.glsl'

function IconPlane({ iconFile, ...threeProps }) {

    const texture = useLoader(THREE.TextureLoader, `/assets/${iconFile}`)

    // Create a shader material
    const ThreeIconMaterial = shaderMaterial(
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
    )
    extend({ ThreeIconMaterial })

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()

    useLayoutEffect(() => {
        if (ref.current && ref.current.material) {
            console.log('Hi', iconFile);
            ref.current.material.uniforms.iconTexture.needsUpdate = true
        }
    }, [iconFile])


    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...threeProps}
            ref={ref}
        >
            <planeGeometry args={[1, 1, 50, 50]} />
            <threeIconMaterial />
        </mesh>
    )
}

export const ThreeIcons = ({ iconFiles }) => {
    return (
        <Canvas className={styles.canvas} camera={{ position: [0, 0, 2] }}>
            <color attach="background" args={["#F4D566"]} />
            <Suspense fallback={"<h1>Loading...</h1>"}>
                {
                    iconFiles.map((iconFile, index) => <IconPlane key={index} position={[index == 2 ? 0.5 : index, index == 2 ? 1 : 0, 0]} iconFile={iconFile} />)
                }
            </Suspense>
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>
    )
}
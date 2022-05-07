import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { shaderMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import styles from '../styles/ThreeIcon.module.scss'

import vertex from './glsl/vertex.glsl'
import fragment from './glsl/fragment.glsl'

function IconPlane({ iconFile, display }) {

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
            material.wireframe = display == "desktop";
        }
    ), [texture])

    // Create a geometry
    const segmentsCount = display == "desktop" ? 40 : 100
    const planeGeometry = useMemo(() => new THREE.PlaneBufferGeometry(1, 1, segmentsCount, segmentsCount), [])

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()

    // Subscribe this component to the render-loop, rotate the mesh every frame
    const randomX = Math.random()* 100
    const randomY = Math.random()* 100
    useFrame((state, delta) => {
        ref.current.material.uniforms.time.value += delta;
        ref.current.rotation.x = Math.PI / 18 * Math.sin(state.clock.elapsedTime*1.2 + randomX )
        ref.current.rotation.y = Math.PI / 16 * Math.sin(state.clock.elapsedTime*1.2 + randomY )
    })

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            ref={ref}
            geometry={planeGeometry}
            material={new ThreeIconMaterial()}
        >
        </mesh>
    )
}



export const ThreeIcon = ({ iconFile, iconsTotal, iconIndex, display }) => {

    const canvasStyles = []
    canvasStyles.push(display == "desktop" ? styles.canvas__desktop : styles.canvas__mobile )
    canvasStyles.push(styles.canvas)

    if (iconsTotal > 1) {
        if (iconIndex === 0) {
            canvasStyles.push(styles.canvas__right)
            // Last index check
        } else if (iconIndex + 1 === iconsTotal) {
            canvasStyles.push(styles.canvas__left)
        } else {
            canvasStyles.push(styles.canvas__center)
        }
    } else {
        canvasStyles.push(styles.canvas__center)
    }

    return (
        <Canvas className={canvasStyles.join(' ')} camera={{ position: [0, 0, 1], far: 4, dpr: [1, 2] }} >
            <color attach="background" args={["#F4D566"]} />
            <Suspense fallback={"<h1>Loading...</h1>"}>
                <IconPlane iconFile={iconFile} display={display} />
            </Suspense>
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
        </Canvas >
    )
}
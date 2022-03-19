import { useRef, useState } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import ThreeIconMaterial from './ThreeIconMaterial'

extend({ ThreeIconMaterial })

function IconPlane(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
        >
            <planeGeometry args={[1, 1, 20, 20]} />
            <threeIconMaterial />
        </mesh>
    )
}

export const ThreeIcon = () => {
    return (
        <Canvas>
            <IconPlane position={[-1.2, 0, 0]} />
        </Canvas>
    )
}
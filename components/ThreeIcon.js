import { useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { PerspectiveCamera, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

import vertex from './glsl/vertex.glsl'
import fragment from './glsl/fragment.glsl'

function IconPlane({ id, iconFile, ...threeProps }) {
    // Create a shader material
    const ThreeIconMaterial = shaderMaterial(
        {
            time: 0,
            iconTexture: new THREE.TextureLoader().load(`/assets/${iconFile}`)
        },
        vertex,
        fragment
    )
    extend({ ThreeIconMaterial })

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.00))

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...threeProps}
            ref={ref}
        >
            <planeGeometry args={[1, 1, 20, 20]} />
            <threeIconMaterial />
        </mesh>
    )
}

export const ThreeIcon = (props) => {
    return (
        <Canvas>
            <PerspectiveCamera makeDefault>
                <IconPlane position={[0, 0, -1]} {...props} />
            </PerspectiveCamera>
        </Canvas>
    )
}
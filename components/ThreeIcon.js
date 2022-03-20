import { useRef, useEffect } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

import ThreeIconMaterial from './ThreeIconMaterial'


extend({ ThreeIconMaterial })

function IconPlane(props) {

    useEffect(() => {
        const texture = new THREE.TextureLoader().load('/assets/emoji.png');
        ThreeIconMaterial.uniforms.texture.value = texture;
    }, [])

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.00))
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
            <PerspectiveCamera makeDefault>
                <IconPlane position={[0, 0, -1]} />
            </PerspectiveCamera>
        </Canvas>
    )
}
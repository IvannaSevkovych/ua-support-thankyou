
import { shaderMaterial } from '@react-three/drei'
// import iconImage from '/assets/emoji.png'

import vertex from './glsl/vertex.glsl';
import fragment from './glsl/fragment.glsl';


// const texture = new THREE.TextureLoader().load('../public/assets/emoji.png');

const ThreeIconMaterial = shaderMaterial(
    {
        time: 0,
        texture: null
    },
    vertex,
    fragment
)

export default ThreeIconMaterial;
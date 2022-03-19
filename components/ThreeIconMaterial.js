import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'

import vertex from './glsl/vertex.glsl';
import fragment from './glsl/fragment.glsl';

const ThreeIconMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
  vertex,
  fragment
)

export default ThreeIconMaterial;
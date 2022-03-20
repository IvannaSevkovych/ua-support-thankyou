uniform sampler2D iconTexture;

varying vec2 vUv;
varying vec3 vPosition;

void main(){
    vUv=uv;
    vPosition=position;

    float heightmap=texture2D(iconTexture,vUv).r;
    vPosition.z=.15*heightmap;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(vPosition,1.);
}
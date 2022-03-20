uniform sampler2D iconTexture;

varying vec2 vUv;
varying vec3 vPosition;

void main(){
    vUv=uv;
    vPosition=position;

    vec4 icon=texture2D(iconTexture,vUv);
    float heightmap=icon.r;

    vPosition.z=.07*heightmap;

    gl_Position=projectionMatrix*modelViewMatrix*vec4(vPosition,1.);
}
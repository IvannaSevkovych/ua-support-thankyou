uniform float time;
uniform sampler2D iconTexture;

varying vec2 vUv;
varying vec3 vPosition;

void main(){
    vUv=uv;
    vPosition=position;
    
    vec4 icon=texture2D(iconTexture,vUv);
    float heightmap=(icon.r+icon.g/2.);
    
    vPosition.z=.1*heightmap;
    
    // vPosition.xz*=mat2(cos(time),-sin(time), sin(time),cos(time));
    
    gl_Position=projectionMatrix*modelViewMatrix*vec4(vPosition,1.);
}
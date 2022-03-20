uniform float time;
uniform sampler2D iconTexture;

varying vec2 vUv;

void main(){
    gl_FragColor=texture2D(iconTexture,vUv);
}
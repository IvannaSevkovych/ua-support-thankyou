uniform float time;
uniform sampler2D texture;
varying vec2 vUv;
void main(){
    if (texture == null) discard;
    gl_FragColor=texture2D(texture, vUv);
}
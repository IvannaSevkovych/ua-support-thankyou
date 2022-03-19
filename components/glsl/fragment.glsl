uniform float time;
uniform vec3 color;
varying vec2 vUv;
void main(){
    gl_FragColor.rgba=vec4(.5+.3*sin(vUv.yxx+time)+color,1.);
}
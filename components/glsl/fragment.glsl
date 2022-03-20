uniform float time;
uniform sampler2D iconTexture;

varying vec2 vUv;
varying vec3 vPosition;

void main(){
    
    vec2 st=80.*vPosition.xy;
    
    vec2 grid=abs(fract(st-.5)-.5)/fwidth(st);
    float color=min(grid.x,grid.y);
    
    vec4 icon=texture2D(iconTexture,vUv);
    gl_FragColor=icon*(1.-color);
    
    // gl_FragColor=texture2D(iconTexture,vUv);
}
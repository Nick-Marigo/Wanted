precision mediump float;

#define SCALE 2.0 // 
#define SCALE_INV (1.0 / SCALE)
#define CELL_SIZE 32.0 // TODO explain this
#define CELL_SIZE_INV (1.0 / CELL_SIZE) // TODO explain this
#define MASK_UNITS 16.0 // grid-mask.png is 16x16 matrix of booleans
#define MASK_UNIT_INV (1.0 / MASK_UNITS) // TODO explain this

// https://docs.phaser.io/phaser/concepts/gameobjects/shader#sampler2d-uniform
uniform float time;
uniform vec2 offsetDirection;

uniform sampler2D iChannel0; // Grid masking
uniform sampler2D iChannel1; // Sprite

varying vec2 fragCoord; // pixel coordinates on the screen

void main(void) {
    vec2 offset = offsetDirection * time;

    vec2 pixelCoord = SCALE_INV * (fragCoord + offset);
    vec2 tileCoord = (floor(CELL_SIZE_INV * pixelCoord) + 0.5) * MASK_UNIT_INV;
    vec2 iconCoord = (floor(pixelCoord) + 0.5) * CELL_SIZE_INV;

    float maskAlpha = texture2D(iChannel0, tileCoord).r;
    vec4 iconColor = texture2D(iChannel1, iconCoord * vec2(1.0, -1.0));

    float alpha = min(iconColor.a, maskAlpha);

    gl_FragColor = vec4(iconColor.rgb * alpha, alpha);
}

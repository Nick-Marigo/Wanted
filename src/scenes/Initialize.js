class Initialize extends Phaser.Scene {
    constructor(){
        super('initializeScene');
    }

    preload() {
        this.load.setPath('./Assets/Sprites');
        this.load.image('slug', '/Slug.png');
        this.load.image('banana', '/Banana.png');
        this.load.image('grid-mask', '/grid-mask.png');

        // shaders
        this.load.setPath('./Assets/Shaders');
        this.load.glsl('grid_mask', '/grid_mask.fsh');
    }

    create() {
        this.sys.cache.shader.get('grid_mask').uniforms = { offsetDirection: { type: '2f', value: { x: 64, y: 64 } }};

        this.scene.start('playScene');
    }
}
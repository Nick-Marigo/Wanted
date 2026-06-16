class Initialize extends Phaser.Scene {
    constructor(){
        super('initializeScene');
    }

    preload() {
        this.load.setPath('./Assets/Sprites');
        this.load.image('slug', '/Slug.png');
        this.load.image('banana', '/Banana.png');
    }

    create() {
        this.scene.start('playScene');
    }
}
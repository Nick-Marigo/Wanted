class Initialize extends Phaser.Scene {
    constructor(){
        super('initializeScene');
    }

    preload() {
        
    }

    create() {
        this.scene.start('playScene');
    }
}
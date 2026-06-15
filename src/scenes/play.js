class Play extends Phaser.Scene {

    constructor() {
        super('playScene');
    }
 
    preload() {
        this.load.setPath('./Assets/Sprites');
        this.load.image('slug', '/Slug.png');
        //this.load.image('banana', '/Banana.png');

    }

    create() {

        const randomSpawn = this.createRandomSpawnPoint();

        this.UnknwonArray = [];

        this.unknwon = new Unknwon(this, randomSpawn.x, randomSpawn.y, 'slug');


        // DEBUG: R key to restart scene
        this.input.keyboard.on('keydown-R', () => {
            this.scene.restart();
        });

        // DEBUG: G key to draw debug boxes on/off
        this.physics.world.createDebugGraphic();
        this.physics.world.drawDebug = false;
        this.input.keyboard.on('keydown-G', () => {
            this.physics.world.drawDebug = !this.physics.world.drawDebug;

            if (!this.physics.world.drawDebug) {
                this.physics.world.debugGraphic.clear();
            }
        });

    }

    update() {
        
    }

    createRandomSpawnPoint(){

        const randomX = Phaser.Math.Between(0, width);
        const randomY = Phaser.Math.Between(0, height);

        return new Phaser.Math.Vector2(randomX, randomY);
    }

}
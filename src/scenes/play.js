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

        this.targetArray = [];

        for (let i = 0; i < 5; i++) {
            const randomSpawn = this.createRandomSpawnPoint();
            this.target = new Target(this, randomSpawn.x, randomSpawn.y, 'slug', false);
            this.targetArray.push(this.target);
        }

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

    // Returns a random x and y spawn point.
    createRandomSpawnPoint(){
        const randomX = Phaser.Math.Between(0, width);
        const randomY = Phaser.Math.Between(0, height);
        return new Phaser.Math.Vector2(randomX, randomY);
    }

}
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

        this.unknwon = new Unknwon(this, randomSpawn.x, randomSpawn.y, 'slug');

    }

    update() {
        
    }

    createRandomSpawnPoint(){

        const randomX = Phaser.Math.Between(0, width);
        const randomY = Phaser.Math.Between(0, height);

        return new Phaser.Math.Vector2(randomX, randomY);
    }

}
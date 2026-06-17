class Play extends Phaser.Scene {

    constructor() {
        super('playScene');
    }

    create() {

        this.targetArray = [];
        this.wantedX = 0;
        this.wantedY = 0;

        this.timer = new GameTimer(this, 30);

        this.spawnTargets();

        // Handles mouse input anywhere on the map
        this.input.on('pointerdown', (pointer) => {
            //console.log(pointer.x, pointer.y, this.wantedX, this.wantedY);
            if(this.checkIfWanted(pointer)){
                console.log("Found wanted");
                this.timer.addtime(5);
                this.spawnTargets();
            } else {
                console.log("Not wanted");
                this.timer.subtractTime(10);
            }
        });

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

    // Checks if the pointer click is over the target
    checkIfWanted(pointer) {
        return (this.wantedX - 16 < pointer.x && 
                this.wantedX + 16 > pointer.x && 
                this.wantedY - 16 < pointer.y && 
                this.wantedY + 16 > pointer.y)
    }

    spawnTargets(){

        this.targetArray.forEach(gameObject => gameObject.destroy());
        this.targetArray = [];

        for (let i = 0; i < 5; i++) {
        const randomSpawn = this.createRandomSpawnPoint();
        if(i == 3) {
            this.target = new Target(this, randomSpawn.x, randomSpawn.y, 'slug', true);
            this.wantedX = this.target.x;
            this.wantedY = this.target.y;
        } else {
            this.target = new Target(this, randomSpawn.x, randomSpawn.y, 'banana', false);
        }
        this.targetArray.push(this.target);
        }
    }

}
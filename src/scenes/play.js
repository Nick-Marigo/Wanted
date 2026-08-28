class Play extends Phaser.Scene {

    constructor() {
        super('playScene');

        this.level = 0;
    }

    create() {

        this.targetArray = [];
        this.target;
        this.level++;

        this.timer = new GameTimer(this, 30);

        const levelDataALL = this.cache.json.get('levelData');

        console.log(levelDataALL);

        this.currentLevelData = levelDataALL["level_" + this.level];
        console.log(this.currentLevelData);

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

        // Shader
        //this.add.shader('grid_mask', 0, 0, width, height, [ 'grid-mask', 'banana' ]).setOrigin(0, 0).setBlendMode(Phaser.BlendModes.NORMAL);
    }

    update() {
        
    }

    // Returns a random x and y spawn point.
    createRandomSpawnPoint(){
        const randomX = Phaser.Math.Between(0, width);
        const randomY = Phaser.Math.Between(0, height);
        return new Phaser.Math.Vector2(randomX, randomY);
    }

    getSpawnPoint(spawnCount){
        const spawnX = this.currentLevelData.spawnpoints[spawnCount].x;
        const spawnY = this.currentLevelData.spawnpoints[spawnCount].y;
        return new Phaser.Math.Vector2(spawnX, spawnY);
    }

    // Checks if the pointer click is over the target
    checkIfWanted(pointer) {
        return (this.target.x - 16 < pointer.x && 
                this.target.x + 16 > pointer.x && 
                this.target.y - 16 < pointer.y && 
                this.target.y + 16 > pointer.y)
    }

    spawnTargets(){

        this.targetArray.forEach(image => image.destroy());
        this.targetArray = [];

        let amount = this.currentLevelData.amount;
        let targetSpawnpoint = Phaser.Math.Between(0, amount - 1);

        for (let i = 0; i < amount; i++) {
        //const randomSpawn = this.createRandomSpawnPoint();
        const randomSpawn = this.getSpawnPoint(i);
        if(i == targetSpawnpoint) {
            this.tempTarget = new Target(this, randomSpawn.x, randomSpawn.y, 'slug', true);
            this.target = this.tempTarget;
        } else {
            this.tempTarget = new Target(this, randomSpawn.x, randomSpawn.y, 'banana', false);
        }
        this.targetArray.push(this.tempTarget);
        }
    }

    

}

/*
{
                "x": "width / 2 - 32",
                "y": "height / 2 - 32"
            },
            {
                "x": "width / 2 + 32",
                "y": "height / 2 + 32"
            },
            {
                "x": "width / 2 - 32",
                "y": "height / 2 + 32"
            },
            {
                "x": "width / 2 + 32",
                "y": "height / 2 + 32"
            }
                */

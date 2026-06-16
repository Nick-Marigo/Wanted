class Play extends Phaser.Scene {

    constructor() {
        super('playScene');
    }

    create() {

        this.targetArray = [];
        this.wantedX = 0;
        this.wantedY = 0;
        this.timeRemaining = 6000;

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

        this.gameTimer = this.time.addEvent({
            delay: 1000, 
            callback: this.timerSubtract(), 
            callbackScope: this, 
            loop: true
        });

        this.events.on(EVENT_TIMER_SUBTRACT, this.timerSubtract, this);
        this.events.on(EVENT_TIMER_ADD, this.timerAdd, this);

        // Handles mouse input anywhere on the map
        this.input.on('pointerdown', (pointer) => {
            //console.log(pointer.x, pointer.y, this.wantedX, this.wantedY);
            if(this.checkIfWanted(pointer)){
                console.log("Found wanted");
                this.event.emit(EVENT_TIMER_ADD);
            } else {
                console.log("Not wanted");
                this.events.emit(EVENT_TIMER_SUBTRACT);
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

    checkIfWanted(pointer) {
        return (this.wantedX - 16 < pointer.x && 
                this.wantedX + 16 > pointer.x && 
                this.wantedY - 16 < pointer.y && 
                this.wantedY + 16 > pointer.y)
    }

    timerAdd(){
        this.timeRemaining += 5000;
        console.log("Time remaining: " + this.timeRemaining);
    }

    timerSubtract(){
        this.timeRemaining -= 1000;
        console.log("Time remaining: " + this.timeRemaining);
    }

}
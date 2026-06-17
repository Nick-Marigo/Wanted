class GameTimer {
    constructor(scene, startTime){
        this.scene = scene;
        this.currentTime = startTime;

        this.gameTimer = this.scene.time.addEvent({
            delay: 1000,
            callback: this.subtractTime,
            callbackScope: this,
            args: [1],
            loop: true
        });
    }

    subtractTime(time){
        console.log("Time subtracted " + this.currentTime);
        this.currentTime -= time;
    }

    addtime(time){
        console.log("Time added " + this.currentTime);
        this.currentTime += time;
    }

    pauseTimer(pause){
        this.gameTimer.pause = pause;
    }

    destory(){
        this.gameTimer.destory();
    }
}
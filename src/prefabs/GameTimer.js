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

        this.timerText = this.scene.add.text(width / 2, 50, this.currentTime, { 
            fontSize: '32px',
            /* TODO: add custom font*/
            fontStyle: 'bold',
            color: '#000000',
            align: 'center'
        }).setOrigin(0.5);
    }

    subtractTime(time){
        this.currentTime -= time;
        this.timerText.setText(this.currentTime);
    }

    addtime(time){
        this.currentTime += time;
        this.timerText.setText(this.currentTime);
    }

    pauseTimer(pause){
        this.gameTimer.pause = pause;
    }

    destory(){
        this.gameTimer.destory();
        this.timerText.destory();
    }


}
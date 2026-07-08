// Phaser 3.9 Template

"use strict"

let config = {
    parent: 'game',
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#00ccff',
    render: {
        pixelArt: true
    },
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Initialize, Play ]
}

let width = config.width;
let height = config.height;

let game = new Phaser.Game(config);

const EVENT_TIMER_ADD = 'timerAdd';
const EVENT_TIMER_SUBTRACT = 'timerSubtract';
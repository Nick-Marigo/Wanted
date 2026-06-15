class Target extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, texture, isWanted){
        super(scene, x, y, texture);

        this.scene = scene;
        this.isWanted = isWanted;

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setInteractive();

        this.setScale(2);

        this.on('pointerdown', () => {
            if (isWanted) {
                console.log('Wanted Sprite');
            } else {
                console.log('Not Wanted Sprite');
            }
        });
    }

}
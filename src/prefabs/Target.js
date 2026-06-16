class Target extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, texture, isWanted){
        super(scene, x, y, texture);

        this.scene = scene;
        this.isWanted = isWanted;

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(2);

    }

}
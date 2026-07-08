class Target extends Phaser.GameObjects.Image{

    constructor(scene, x, y, texture, isWanted){
        super(scene, x, y, texture);

        this.scene = scene;
        this.isWanted = isWanted;

        scene.add.existing(this);
        //scene.physics.add.existing(this);

        this.setScale(2);

    }

}
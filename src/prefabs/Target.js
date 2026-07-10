class Target extends Phaser.GameObjects.Image{

    constructor(scene, x, y, texture, isWanted){
        super(scene, x, y, texture);

        this.scene = scene;
        this.isWanted = isWanted;

        scene.add.existing(this);
        //scene.physics.add.existing(this);

        scene.time.delayedCall(0, () => this.texture.setFilter(Phaser.Textures.FilterMode.NEAREST), null, this);

        this.setScale(2);

    }

}
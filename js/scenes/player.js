export default class Player{
    constructor(scene){
        this.scene = scene
        this.sprite = scene.physics.add.sprite(200, 100, 'dude')
        this.sprite.setBounce(0.2)
        this.sprite.setCollideWorldBounds(true)

        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('dude', { start: 24, end: 26}),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('dude', { start: 13, end: 14}),
            frameRate: 10,
            repeat: -1
        })
    }
}
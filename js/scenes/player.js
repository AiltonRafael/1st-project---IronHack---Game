export default class Player{
    constructor(scene){
        this.scene = scene
        this.sprite = scene.physics.add.sprite(800, 500, 'dude')
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
        });
        scene.anims.create({
            key: 'turn',
            frames: scene.anims.generateFrameNumbers('dude', {start: 1, end: 1}),
            frameRate: 10,
            repeat: -1
        });
        scene.anims.create({
            key: 'down',
            frames: scene.anims.generateFrameNumbers('dude', {start: 0, end: 2}),
            frameRate: 10,
            repeat: -1
        })
    }
}
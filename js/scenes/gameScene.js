import Player from "./player.js";

export default class gameScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'gameScene'
        });
        this.platforms;
        this.setCollider = [140, 36]
    }


    create(){
        const widthGame = this.sys.canvas.width;
        const heightGame = this.sys.canvas.height;
        // let video = this.add.video(widthGame/2, heightGame/2, 'video')
        // video.play()
        let image = this.add.image(widthGame/2, heightGame/2, 'sky');
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);


        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(700, 450, 'Earth').setScale(0.3).refreshBody().body.setSize(140, 36);
        this.platforms.create(500, 300, 'Ice').setScale(0.3).refreshBody().body.setSize(140, 36);
        this.platforms.create(400, 200, 'Earth').setScale(0.3).refreshBody().body.setSize(140, 36);



        this.player = new Player(this);
        this.physics.add.collider(this.player.sprite, this.platforms)

        this.cursor = this.input.keyboard.createCursorKeys();

    }

    update(){
        const player = this.player.sprite

            player.body.setGravityY(400)
            
            if(this.cursor.right.isDown){
                player.setVelocityX(160)
                player.anims.play('right', true)

            } else if (this.cursor.left.isDown) {
                player.setVelocityX(-160)
                player.anims.play('left', true)

            } else {
                player.setVelocityX(0);
                player.anims.play('turn', true)
            }
            
        
            if(this.cursor.up.isDown){
                player.setVelocityY(-230);
                player.anims.play('up', true)
            } else if(this.cursor.down.isDown) {
                player.setVelocityY(330)
                player.anims.play('down', true)
            } 
    }

}
import Player from "./player.js";

export default class gameScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'gameScene'
        });
        this.platforms;
        this.ground;
        this.setCollider = [140, 36];
        this.stars;
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
        this.ground = this.physics.add.staticGroup();

        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 100,
            setXY: { x: 0, y: 100, stepX: 70 },
            setGravityY: -100,
        });
        
        this.stars.children.iterate(function (child) {
        
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        
        });

        this.platforms.create(700, 450, 'Earth').setScale(0.2).refreshBody().body.setSize(110, 20);
        this.platforms.create(500, 380, 'Ice').setScale(0.2).refreshBody().body.setSize(110, 20);
        this.platforms.create(300, 310, 'Earth').setScale(0.2).refreshBody().body.setSize(110, 20);
        this.ground.create(800/2, 690, 'Earth').setScale(1).refreshBody().body.setSize(800, 400);
        // this.physics.add.overlap(this.player, this.stars, collectStar, null, this);

        // function collectStar (player, star){
        //     star.disableBody(true, true);
        // }

    
        function gotFall(player){
            player.setX(700);
            player.setY(400);
        }

        this.player = new Player(this);
        this.physics.add.collider(this.player.sprite, this.platforms);
        this.physics.add.collider(this.player.sprite, this.ground, gotFall);
        this.physics.add.collider(this.platforms, this.stars);
        this.physics.add.overlap(this.platforms, this.stars, collectStar, null, this);

        function collectStar (platforms, star){
            star.disableBody(true, true);
        }

        this.cursor = this.input.keyboard.createCursorKeys();
        
        // setInterval(() => {
        //     this.stars = this.physics.add.group({
        //         key: 'star',
        //         repeat: 100,
        //         setXY: { x: 0, y: 100, stepX: 70 },
        //     })
        // }, 5000);
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
            
        
            if(this.cursor.up.isDown && player.body.touching.down){
                player.setVelocityY(-300);
                player.anims.play('up', true)
            } else if(this.cursor.down.isDown) {
                player.setVelocityY(330)
                player.anims.play('down', true)
            } 
            
    }  

}
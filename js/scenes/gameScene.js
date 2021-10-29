import Player from "./player.js";

export default class gameScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'gameScene'
        });
    }

    preload(){

    }

    create(){
        const widthGame = this.sys.canvas.width;
        const heightGame = this.sys.canvas.height;
        let image = this.add.image(widthGame/2, heightGame/2, 'forest');
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);

        this.player = new Player(this)

        this.cursor = this.input.keyboard.createCursorKeys()
    }

    update(){
      const player = this.player.sprite
    
      if(this.cursor.right.isDown){
          player.setVelocityX(160)
          player.anims.play('right', true)

      } else if (this.cursor.left.isDown) {
          player.setVelocityX(-160)
          player.anims.play('left', true)

      } else {
          player.setVelocityX(0)
      }
    }

}
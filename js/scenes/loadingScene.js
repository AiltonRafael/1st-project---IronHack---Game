export default class loadingScene extends Phaser.Scene {
    constructor(){
        super({
            key: 'loadingScene'
        });

    }

    preload (){
        const widthGame = this.sys.canvas.width;

        const progressbar = this.add.graphics();

        this.load.on('progress', (percent) => {
            progressbar.clear();
            progressbar.fillStyle(0xffff);
            progressbar.fillRect(0, 0, widthGame * percent, 20);
            progressbar.lineStyle(4, 0xfff00, 1);
            progressbar.strokeRect((widthGame - widthGame) / 2, this.sys.game.config.height)
        })

        this.load.on('complete', () => {
            this.scene.start('gameScene')
        })

        this.load.image('sky', '../../assets/images/sky.gif')
        this.load.image('platformIce', '../../assets/images/platform-ice.png')
        this.load.video('video', '../../assets/video/sky.mp4', 'loadeddata', true, false)
        this.load.spritesheet('dude', '../../assets/images/dude.png', {frameWidth: 45, frameHeight: 49})

    }

    create ()
    {}

    create()
    {}

}
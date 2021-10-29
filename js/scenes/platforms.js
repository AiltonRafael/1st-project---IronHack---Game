class platforms extends Phaser.Scene{
    constructor(width, height){
        super(
            create(this.width, this.height),
            setScale(),
            refreshBody(),
            setSize(),
        )
        this.width = width;
        this.height = height;
        this.platforms
    }
    create(){

    }
}
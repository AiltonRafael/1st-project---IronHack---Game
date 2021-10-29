import loadingScene from './scenes/loadingScene.js'
import gameScene from './scenes/gameScene.js'

    let config = {
        type: Phaser.AUTO,
        width: 800,
        height: 500,
        parent: 'game',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y: 100
                },
                debug: false
            }
        },
        scene: [
            loadingScene,
            gameScene
        ]
    };

    const game = new Phaser.Game(config);
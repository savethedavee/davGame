import Phaser from 'phaser'

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('main')
    }

    create(): void {
        this.add.text(200, 120, 'Hello Phaser (TS)!', { color: '#fff' })
    }
}
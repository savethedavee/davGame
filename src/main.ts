// src/main.ts (or main.js)
import Phaser from 'phaser'
import './index.css'

new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1e293b',
    scene: {
        create() {
            this.add.text(120, 120, 'Hello Phaser!', { color: '#fff' })
        }
    }
})
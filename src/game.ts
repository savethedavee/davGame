export function createGame(parent = 'app') {
    const DPR = Math.min(window.devicePixelRatio ?? 1, 2) // begrenzen
    const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        parent,
        backgroundColor: '#0f172a',
        scale: {
            mode: Phaser.Scale.ENVELOP,   // füllt Screen, schneidet ggf. ab (gut für Runner/Arcade)
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 360,   // Design-Resolution (9:16)
            height: 640,
            zoom: 1 / DPR // weniger Overdraw auf High-DPI
        },
        render: { pixelArt: true, antialias: false },
        input: { activePointers: 2 }
    }
    return new Phaser.Game(config)
}
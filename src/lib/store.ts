import Dexie from 'dexie'
export type Save = { id: string; coins: number; upgrades: number[] }
class DB extends Dexie {
    saves!: Dexie.Table<Save, string>
    constructor() {
        super('davGameDB')
        this.version(1).stores({ saves: 'id' })
    }
}
export const db = new DB()

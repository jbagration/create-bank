import { Nullable } from 'src/types'

interface IStorage {
    set: (key: string, value: string | object) => void
    remove: (key: string) => void
    get: (key: string) => Nullable<string>
}

export const storage: IStorage = {
    get: (key: string): Nullable<string> => {
        try {
            const item = localStorage.getItem(key)
            if (!item) return null

            return JSON.parse(item)
        } catch (e) {
            return null
        }
    },
    set: (key: string, value: string | object): void => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {}
    },
    remove: (key: string): void => {
        try {
            localStorage.removeItem(key)
        } catch (e) {}
    },
}

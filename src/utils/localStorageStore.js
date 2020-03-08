import { writable as writableStore, get } from 'svelte/store'

export function writable (key, initialValue) {
  const store = writableStore(initialValue)
  const { subscribe, set, update } = store
  const lastValue = localStorage.getItem(key)
  if (lastValue) {
    set(JSON.parse(lastValue))
  }

  return {
    set(value) {
      localStorage.setItem(key, JSON.stringify(value))
      set(value)
    },
    update(callback) {
      const value = callback(get(store))
      this.set(value)
    },
    subscribe
  }
}

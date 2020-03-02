import { writable } from 'svelte/store'

export const selectedStation = writable('PHIL')
export const stations = writable([])

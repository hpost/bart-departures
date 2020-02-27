import { writable } from 'svelte/store'

export const direction = writable('s')
export const selectedStation = writable('PHIL')

export const stations = writable([])

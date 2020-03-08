import { writable } from './utils/localStorageStore'

export const selectedStation = writable('selected_station', 'PHIL')
export const stations = writable('stations', [])

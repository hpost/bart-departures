import { fetchStations, fetchDepartures } from './bart-api.js'
import { dispatchRender } from './view.js'

let state = {
  selectedStation: 'PHIL',
  direction: 's',
  stations: [],
  departures: []
}

function dispatchFetchDepartures () {
  document.dispatchEvent(new CustomEvent('fetchDepartures'))
}

function dispatchUpdate (update) {
  document.dispatchEvent(new CustomEvent('update', { detail: update }))
}

function syncState (newState) {
  console.log('syncState', newState)
  state = {
    ...state,
    ...newState
  }
  dispatchRender(state)
  localStorage.setItem('Departures', JSON.stringify(state))
}

function restore () {
  const state = JSON.parse(localStorage.getItem('Departures'))
  if (state) syncState(state)
}

let interval = setInterval(
  () => document.dispatchEvent(new CustomEvent('fetchDepartures')),
  30 * 1000
)


function model () {
  document.addEventListener('fetchDepartures', () =>
    fetchDepartures(state.selectedStation, state.direction)
      .then((departures) => dispatchUpdate({ departures }))
  )
  document.addEventListener('update', ({detail}) => syncState(detail))
  
  restore()
  
  fetchStations().then((stations) => {
    dispatchUpdate({ stations })
    dispatchFetchDepartures()
  })
}

export { model, dispatchFetchDepartures, dispatchUpdate }

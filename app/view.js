import { dispatchUpdate, dispatchFetchDepartures } from './model.js'

function elt (type, props, ...children) {
  let dom = document.createElement(type)
  if (props) Object.assign(dom, props)
  for (let child of children) {
    if (typeof child != "string") dom.appendChild(child)
    else dom.appendChild(document.createTextNode(child))
  }
  return dom
}

const Departure = (minutes) => 
  elt('span', { className: 'departure' },
    minutes
  )

const Train = ({ destination, estimates, color }) =>
  elt('div', { className: 'train' },
    elt('div', { className: 'departures' },
      ...estimates.map(est =>
        Departure(est.minutes)
      )
    ),
    elt('h2', { className: 'destination' },
      elt('span', { className: 'destination__color', style: `background-color: ${color}` }),
      destination
    ),
  )

const header = document.querySelector('header')
const stationList = document.querySelector('#stations')
const directionToggle = document.querySelector('#direction')
const departuresContainer = document.querySelector('#container')
const fullscreenButton = document.querySelector('#fullscreen')
const themeButton = document.querySelector('#theme')

function dispatchRender (state) {
  document.dispatchEvent(new CustomEvent('render', { detail: state }))
}


function render ({ selectedStation, direction, stations, departures }) {
  // stations
  stationList.textContent = ''
  for (const station of stations) {
    const option = elt('option', {
      value: station.abbr,
      selected: station.abbr === selectedStation
    }, station.name)
    stationList.appendChild(option)
  }
  
  // direction toggle
  if (direction === 's') {
    directionToggle.classList.add('direction-s')
  } else {
    directionToggle.classList.remove('direction-s')
  }
  
  // departures
  departuresContainer.innerHTML = ''
  for (const train of departures) {
    const element = Train({
      destination: train.destination,
      estimates: train.estimate,
      color: train.estimate[0].hexcolor
    })
    departuresContainer.appendChild(element)
  }
}

function view () {
  document.addEventListener('render', ({detail}) => render(detail))
  
  stationList.addEventListener('change', () => {
    dispatchUpdate({
      selectedStation: stationList.value
    })
    dispatchFetchDepartures()
  })

  directionToggle.addEventListener('click', () => {
    dispatchUpdate({
      direction: directionToggle.classList.contains('direction-s') ? 'n' : 's'
    })
    dispatchFetchDepartures()
  })
  
  document.documentElement.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      fullscreenButton.style.display = 'none'
    } else {
      fullscreenButton.style.display = 'block'
    }
  })
  
  fullscreenButton.addEventListener('click', () => {
    document.documentElement.requestFullscreen()
  })
  
  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme')
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark')
  })
}

export { view, dispatchRender }

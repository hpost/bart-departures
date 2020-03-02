const API_KEY = 'MW9S-E7SL-26DU-VV8V'

const fetchStations = async () =>
  fetch(`https://api.bart.gov/api/stn.aspx?cmd=stns&key=${API_KEY}&json=y`)
    .then(response => response.json())
    .then(result => result.root.stations.station)

function etd (origin, direction) {
  return `https://api.bart.gov/api/etd.aspx?cmd=etd&key=${API_KEY}&json=y${
    origin ? `&orig=${origin}` : ''
    }${
    direction ? `&dir=${direction}` : ''
    }`
}

const fetchDepartures = async (origin, direction) =>
  fetch(etd(origin, direction))
    .then(response => response.json())
    .then(result => result.root.station[0].etd)
    .catch(error => { throw new Error(error) })

export { fetchStations, fetchDepartures }

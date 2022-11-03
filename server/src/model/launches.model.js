const launches = new Map()

const launch ={
  flightNumber: 100,
  mission: 'Keep Exploration x',
  rocket : 'Exploration IS1',
  launchData: new Date("11-03-2025"),
  target: 'Kepler Ekrb 221',
  customer : ['Nasa','Proto'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber,launch);

function getAllLaunches(){
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
}
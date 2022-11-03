const launches = new Map()

const launch ={
  flightNumber: 100,
  mission: 'Keep Exploration x',
  rocket : 'Exploration IS1',
  launchData: new Date("11-03-2025"),
  target: 'Kepler-123 a',
  customer : ['Nasa','Proto'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber,launch);

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
    flightNumber: latestFlightNumber,
    customer : ['Nasa', 'Istro', 'SPACEX'],
    upcoming: true,
    success: true,
  }));
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function existLaunchWithId(id) {
  return launches.has(id);
}

function abortLaunchById(id) {
  const aborted = launches.get(id);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted; 
  

}

module.exports =  {
  getAllLaunches,
  addNewLaunch,
  existLaunchWithId,
  abortLaunchById
}
const launches = new Map();

latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'keep Exploration x',
  rocket: 'Exploration IS1',
  launchDate: new Date("11-27-2030"),
  target: 'Kepler-122 a',
  customer : ['Nasa', 'Peter'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber,launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch){
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch,{
      flightNumber: latestFlightNumber,
      customer : ['Nasa', 'John'],
      upcoming: true,
      success: true
    })
  )
}

function exitsLaunchWithId(id){
  return launches.has(id);
}

function abortLaunchById(id){
  const aborted = launches.get(id);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports =  {
  getAllLaunches,
  addNewLaunch,
  exitsLaunchWithId,
  abortLaunchById
}


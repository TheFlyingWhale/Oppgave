//Contains all stations with station details
let unripeStations = undefined;
//Contains all stations with availability details
let availableStations = undefined;
//Contains all stations with merged station details and availability details
let ripeStations = undefined;

export default async function initializeStations(){
    await fetchStations();
    await fetchAvailability();
    mergeStationData(unripeStations, availableStations);
    return ripeStations;
}

export async function fetchStations(){
    const url = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json'
    const response = await fetch(url);
    const result = await response.json();

    unripeStations = result.data.stations;
    return result.data.stations;
}

export async function fetchAvailability(saveTo){
    const url = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json';
    const response = await fetch(url);
    const result = await response.json();

    availableStations = result.data.stations;
    return result.data.stations;
}

function mergeStationData(stations, availability){
    const dataList = [];

    stations.forEach(station => {

        const availableData = availability.find(available => available.station_id === station.station_id);

        const mergedData = {
            id: station.station_id,
            address: station.address,
            name: station.name,
            lat: station.lat,
            lon: station.lon,
            bikes_available: availableData.num_bikes_available,
            docks_available: availableData.num_docks_available
        }

        dataList.push(mergedData);
    });

    ripeStations = dataList;
    return dataList;
}
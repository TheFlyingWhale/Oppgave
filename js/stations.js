export default function stations(){
    getStations();
    // getAvailability();
}

export async function getStations(){
    const url = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json'
    const response = await fetch(url);
    const result = await response.json();

    const stations = result.data.stations;
    console.log(stations);
    return stations;
}

export async function getAvailability(){
    const response = await fetch('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json');
    const result = await response.json();

    console.log(result);
}
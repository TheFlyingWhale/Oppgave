import { displayDetails } from './locationDetailsHandler.js';

export async function map(stations) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXJmbHl3aGFsZWd1eSIsImEiOiJjazNoZGFpOGswMWJsM2xsMXp6N3ZnM25pIn0.qS7D5FBXfYUqswpNrCDkYw';

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [10.7522, 59.9139], // starting position [lng, lat]
        zoom: 12.5 // starting zoom
    });

    createMarkerCurrentLocation(map);
    
    populateMap(stations, map);
}

function populateMap(stations, mapObject){
    stations.forEach(station => {
        createMarkerPointer(station, mapObject);
    })
}

function createMarkerPointer(station, mapObject){
    const el = document.createElement('div');
    const width = 32;
    const height = 50;

    el.className = 'marker';
    el.style.backgroundImage = 'url(./assets/svg/markerPoint.svg)';
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';

    el.addEventListener('click', () => {
        displayDetails(station.address, station.bikes_available, station.docks_available);
        mapObject.flyTo({
            center: [station.lon, station.lat],
            zoom: 15
        });
    });

    return new mapboxgl.Marker(el)
    .setLngLat([station.lon, station.lat])
    .addTo(mapObject);
}

function createMarkerCurrentLocation(mapObject) {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            const el = document.createElement('div');
            const width = 32;
            const height = 37;

            el.className = 'marker';
            el.style.backgroundImage = 'url(./assets/svg/markerUser.svg)';
            el.style.width = `${width}px`;
            el.style.height = `${height}px`;
            el.style.backgroundSize = '100%';

            const marker = new mapboxgl.Marker(el)
            .setLngLat([position.coords.longitude, position.coords.latitude])
            .addTo(mapObject);

            mapObject.flyTo({
                center: [position.coords.longitude, position.coords.latitude], 
                zoom: 14
            });
        });
    } else {
        alert('Geolocation is not activated or supported');
    }
}

function getUserLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getLngLat);
    } else {
        console.log('Geolocation is not activated or supported');
    }
}

function getLngLat(position){
    console.log(position);
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log(`lng: ${lng}`);
    console.log(`lat: ${lat}`);
    return 'test'
}
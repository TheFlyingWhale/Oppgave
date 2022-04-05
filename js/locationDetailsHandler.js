import { buildLocationDataDisplay } from './uiBuilder.js';

let displayState = 0;

export function displayDetails(address, avaBikes, avaParks) {
    if(displayState){
        hideDetails();
    }

    const mapOverlay = document.getElementById('mapOverlay');
    mapOverlay.appendChild(buildLocationDataDisplay(address, avaBikes, avaParks));

    displayState = 1;
}

export function hideDetails() {
    console.log('triggered');
    if(displayState) {
        const mapOverlay = document.getElementById('mapOverlay');
        const detailsDisplay = document.getElementById('locationDetails');
        mapOverlay.removeChild(detailsDisplay);
    }

    displayState = 0;
}
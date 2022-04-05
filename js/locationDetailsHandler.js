import { buildLocationDataDisplay } from './uiBuilder.js';

let displayState = 0;

export function displayDetails(address, avaBikes, avaParks) {
    const mapOverlay = document.getElementById('mapOverlay');
    mapOverlay.classList.add('mapOverlayTint');
    mapOverlay.addEventListener('click', hideDetails);

    if(displayState){
        hideDetails();
    }

    const mapOverlayDetailsContainer = document.getElementById('mapOverlayDetailsContainer');
    mapOverlayDetailsContainer.appendChild(buildLocationDataDisplay(address, avaBikes, avaParks));

    displayState = 1;
}

export function hideDetails() {
    const mapOverlay = document.getElementById('mapOverlay');
    mapOverlay.classList.remove('mapOverlayTint');

    if(displayState) {
        const mapOverlayDetailsContainer = document.getElementById('mapOverlayDetailsContainer');
        const detailsDisplay = document.getElementById('locationDetails');
        mapOverlayDetailsContainer.removeChild(detailsDisplay);
    }

    displayState = 0;
}
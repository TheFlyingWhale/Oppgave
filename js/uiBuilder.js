import attachAnimationHandler, { triggerHideAnimation, triggerShowAnimation } from './landingAnimationHandler.js';
import { hideDetails } from './locationDetailsHandler.js';

/** uiBuilder
 * Builds all the UI layers and applies them to the given parent
 * 
 * @param {object} parent 
 */
export default function uiBuilder(parent){
    buildMap(parent);
    buildLanding(parent);
    buildMapOverlay(parent);
}

/** buildLanding
 *  Creates the landing layer and applies it to the given parent 
 *  The landing layer acts as the menu of the application
 * 
 * @param {object} parent 
 */
export const buildLanding = (parent) =>{
    const landing = document.createElement('div');
    landing.id = 'landing';

    buildLogoContainer(landing);

    buildWeatherContainer(landing);

    buildButtonContainer(landing);

    attachAnimationHandler(landing);

    parent.appendChild(landing);
}

/** buildMap
 *  Creates the map layer and applies it to the given parent
 * 
 * @param {object} parent 
 */
export const buildMap = (parent) => {
    const map = document.createElement('div');
    map.id = 'map';
    // map.addEventListener('click', hideDetails);
    parent.appendChild(map);
}

/** buildMapOverlay
 *  Creates the map overlay and applies it to the given parent
 * 
 * @param {object} parent 
 */
export const buildMapOverlay = (parent) => {
    const mapOverlay = document.createElement('div');
    mapOverlay.id = 'mapOverlay';

    const showLandingButton = buildButton('show menu');
    showLandingButton.classList.add('mapOverlayInteractiveElement');
    showLandingButton.addEventListener('click', triggerShowAnimation);

    mapOverlay.appendChild(showLandingButton);

    parent.appendChild(mapOverlay);
}

/** buildWeatherContainer
 *  Creates the weather container, calls buildWeatherDetail to fill it with information then applies container to the given parent
 * 
 * @param {object} parent 
 */
function buildWeatherContainer(parent){
    const container = document.createElement('div');
    container.classList.add('weatherContainer');

    const weatherAndNameContainer = document.createElement('div');
    weatherAndNameContainer.classList.add('weatherAndNameContainer');
    const weatherIcon = document.createElement('img');
    weatherIcon.src = './assets/svg/weatherIcon.svg';
    weatherAndNameContainer.appendChild(weatherIcon);
    
    const nameElement = document.createElement('p');
    nameElement.textContent = 'Oslo';
    nameElement.classList.add('weatherCityTitle');
    weatherAndNameContainer.appendChild(nameElement);
    container.appendChild(weatherAndNameContainer);

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('weatherInformationContainer');
    buildWeatherDetail(detailsContainer, 'Temperatur', '3', '°');
    buildWeatherDetail(detailsContainer, 'Vind', '3', 'm/s');
    buildWeatherDetail(detailsContainer, 'Regn', '3', 'mm');
    container.appendChild(detailsContainer);

    parent.appendChild(container);
}

/** buildWeatherDetail
 *  Creates weather detail with title and data based on given data then applies it to the given parent
 * 
 * @param {object} parent 
 * @param {string} detailTitle 
 * @param {string} detailData 
 * @param {string} specialChar 
 */
function buildWeatherDetail(parent, detailTitle, detailData, specialChar){
    const container = document.createElement('div');
    container.classList.add('weatherInformationDetailContainer');

    const title = document.createElement('p');
    title.textContent = detailTitle;
    title.classList.add('weatherInformationTitle');
    container.appendChild(title);

    const detail = document.createElement('p');
    detail.textContent = detailData + specialChar;
    detail.classList.add('weatherInformationDetail');
    container.appendChild(detail);

    parent.appendChild(container);
}

/** buildLogo
 * Builds the logo logo element, fills it with a logo and applies to the given parent
 * 
 * @param {object} parent 
 */
function buildLogoContainer(parent){
    const logoElement = document.createElement('img');
    logoElement.src = './assets/svg/logoText.svg';
    parent.appendChild(logoElement);
}

/** buildButtonElement
 * Creates the button container for the landing page
 * fills itself with button based on ./json/buttons
 * 
 * @param {object} parent 
 */
async function buildButtonContainer(parent){
    const buttElement = document.createElement('div');
    buttElement.classList.add('landButtContainer');
    //fetches button information
    const buttons = await fetch('../json/buttons.json')
    .then(response => response.json());
    //creates buttons basted on button information
    buttons.buttons.forEach(button => {
        buttElement.addEventListener('click', triggerHideAnimation, false);
        buttElement.appendChild(buildButton(button.text, button.icon));
    })
    parent.appendChild(buttElement);
}


/** buildButton
 * Creates and return a button with text, and image if given
 * 
 * @param {string} text 
 * @param {string} image 
 * @returns button
 */
function buildButton(text, image){
    const mainEl = document.createElement('button');
    const textEl = document.createElement('p');
    const iconEl = document.createElement('img');

    if(image) {
        iconEl.setAttribute('src', image)
        iconEl.classList.add('buttIcon');
        mainEl.appendChild(iconEl);
    }

    textEl.textContent = text ? text : 'Placeholder';
    mainEl.appendChild(textEl);
    mainEl.classList.add('button');

    return mainEl;
}

export function buildLocationDataDisplay(address, avaBikes, avaParks) {
    const element = document.createElement('div');
    element.id = 'locationDetails';

    const topContainer = document.createElement('div');
    topContainer.classList.add('locationDetailTopContainer');

    const closeDisplayElement = document.createElement('button');
    closeDisplayElement.classList.add('closeLocationDetailsButton')
    closeDisplayElement.addEventListener('click', hideDetails);
    topContainer.appendChild(closeDisplayElement);
    element.appendChild(topContainer);

    const addressElement = document.createElement('p');
    addressElement.textContent = `Adresse: ${address}`;
    element.appendChild(addressElement);

    const availableBikesElement = document.createElement('p');
    availableBikesElement.textContent = `Tilgjengelige sykler: ${avaBikes}`;
    element.appendChild(availableBikesElement);

    const availableParksElement = document.createElement('p');
    availableParksElement.textContent = `Tilgjengelige parkeringer: ${avaParks}`;
    element.appendChild(availableParksElement);

    return element;
}
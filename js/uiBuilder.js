function main(){
    console.log('hello world');
}

export const buildLanding = (parent) =>{
    const landing = document.createElement('div');
    landing.classList.add('landing');

    buildLogo(landing);

    buildWeather(landing);

    buildButtonElement(landing);

    parent.appendChild(landing);
}

export const buildMap = (parent) => {
    const map = document.createElement('div');
    map.setAttribute('id', 'map');
    parent.appendChild(map);
}

function buildWeather(parent){
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
function buildLogo(parent){
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
async function buildButtonElement(parent){
    const buttElement = document.createElement('div');
    buttElement.classList.add('landButtContainer');
    //fetches button information
    const buttons = await fetch('../json/buttons.json')
    .then(response => response.json());
    //creates buttons basted on button information
    buttons.buttons.forEach(button => {
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
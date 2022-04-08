const app = document.querySelector('#app');
import { map } from './js/map.js';
import initializeStations from './js/stations.js';
import uiBuilder from './js/uiBuilder.js';

const main = async () => {
    uiBuilder(app);
    const stations = await initializeStations();
    map(stations);
}

main();
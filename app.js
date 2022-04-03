const app = document.querySelector('#app');
import { map } from './js/map.js';
import stations, { getStations } from './js/stations.js';
import uiBuilder, { buildMap, buildLanding } from './js/uiBuilder.js';

const main = async () => {
    uiBuilder(app);
    // stations();
    map();
    // console.log(stations);
}

main();
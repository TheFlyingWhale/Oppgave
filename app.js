const app = document.querySelector('#app');
import { map } from './js/map.js';
import { getStations } from './js/stations.js';
import { buildMap, buildLanding } from './js/uiBuilder.js';

const main = async () => {
    buildMap(document.getElementById('app'));
    buildLanding(document.getElementById('app'));
    const stations = await getStations();
    map();
    // console.log(stations);
}

main();
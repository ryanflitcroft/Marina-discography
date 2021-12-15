import { renderDiscDetail } from '../render-utils.js';
import { getDisc } from '../fetch-utils.js';

const detailsSection = document.querySelector('#details-section');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const discDetails = await getDisc(id);
    console.log(discDetails);
});


//not sure about all this yet, figure it out tomorrow
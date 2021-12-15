import { renderDiscDetail } from '../render-utils.js';
import { getDisc } from '../fetch-utils.js';

const detailsSection = document.querySelector('#album-details');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    // console.log(id);
    const disc = await getDisc(id);
    // console.log(disc);


    const discEl = renderDiscDetail(disc);
    detailsSection.append(discEl);
});


//not sure about all this yet, figure it out tomorrow
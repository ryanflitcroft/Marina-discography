import { renderDiscDetail } from '../render-utils.js';
import { getDisc } from '../fetch-utils.js';

const detailsSection = document.querySelector('#album-details');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const disc = await getDisc(id);

    const discEl = renderDiscDetail(disc);
    detailsSection.append(discEl);
});
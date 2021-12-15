import { getDiscography } from './fetch-utils.js';
import { renderDiscography } from './render-utils.js';

const discographySection = document.querySelector('#discography-section');

window.addEventListener('load', async() => {
    const discography = await getDiscography();
    // console.log(discography);

    for (let disc of discography) {
        const discographyEl = renderDiscography(disc);
        discographySection.append(discographyEl);
    }
});
export function renderDiscography(disc) {
    const discographyEl = document.createElement('figure');
    const detailsEl = document.createElement('a');
    const titleEl = document.createElement('figcaption');
    const coverEl = document.createElement('img');

    detailsEl.href = `./details/?id=${disc.id}`;
    titleEl.textContent = disc.title;
    coverEl.src = disc.cover;
    coverEl.alt = disc.title;

    titleEl.classList.add('title');
    coverEl.classList.add('covers');

    detailsEl.append(titleEl, coverEl);
    discographyEl.append(detailsEl);
    return discographyEl;
}

export function renderDiscDetail(id) {
    const detailsEl = document.createElement('figure');
    const titleEl = document.createElement('figcaption');
    const coverEl = document.createElement('img');
    const tracklistEl = document.createElement('ol');

    const tracklist = id.tracklist;
    console.log(tracklist);
    // console.log(tracklist);

    // for (let track of tracklist) {
    //     const trackEl = document.createElement('li');
    //     trackEl.textContent = track;
    //     tracklistEl.append(trackEl);
    //     console.log(track);
    // }

    for (let i = 0; i < tracklist.length; i++) {
        const trackEl = document.createElement('li');
        trackEl.textContent = tracklist[i];
        tracklistEl.append(trackEl);
    }

    // why will it only return full array or each letter of each array item??


    titleEl.textContent = id.title;
    coverEl.src = id.cover;
    coverEl.alt = id.title;

    detailsEl.append(titleEl, coverEl, tracklistEl);
console.log(detailsEl);
    return detailsEl;
}
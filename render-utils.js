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
    const tracksEl = document.createElement('ol');

    const tracks = id.tracks;
    console.log(tracks);
    // console.log(tracks);

    for (let track of tracks) {
        const trackEl = document.createElement('li');
        trackEl.textContent = track;
        tracksEl.append(trackEl);
        console.log(track);
    }


    // got it!

    titleEl.textContent = id.title;
    coverEl.src = id.cover;
    coverEl.alt = id.title;

    detailsEl.append(titleEl, coverEl, tracksEl);
    console.log(detailsEl);
    return detailsEl;
}
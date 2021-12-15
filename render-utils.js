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
    const detailsEl = document.createElement
}
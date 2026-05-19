
// per generare urtl immagini nelle card
const getImgURL = (path, size = 'original') => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
}

export { getImgURL };
function searchMovies(searchKeyword) {
    
    const API_KEY = import.meta.env.VITE_MOVIEDB_API_KEY;
    // Compongo l'URL di ricerca
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&language=it-IT`;


    return fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ API_KEY }`
        }
    })
    .then(response => {
                if (response.status === 404) {
                    throw new Error('Pagina non trovata')
                }
                return response.json();
            })
};

export default searchMovies;
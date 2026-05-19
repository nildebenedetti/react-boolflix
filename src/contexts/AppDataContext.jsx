import { useContext } from "react";
import { useState, useEffect, createContext } from "react";
import searchMovies from "../hooks/searchMovies";
import searchSeries from "../hooks/searchSeries";
import fetchPopularMovies from "../hooks/fetchPopular";

const AppDataContext = createContext(null);

function AppDataProvider({ children }) {
    const [moviesList, setMoviesList] = useState([]); //variabile per lista film
    const [seriesList, setSeriesList] = useState([]); // variabile per settare results di series
    const [errorMsg, setErrorMsg] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); //vribile di stato globale che viene aggiornata da form submit
    const [mashedResults, setMashedResults] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    // useEffect per le fetch da eseguire solo all'avvio
    useEffect(() => {
        fetchPopularMovies()
            .then(data => {
                const fetchResults = data.results;
                const popularMoviesList = fetchResults.map(movie => {
                    return {
                        id: `${movie.id}_movie`,
                        title: movie.title,
                        orTitle: movie.original_title,
                        orLanguage: movie.original_language,
                        rating: movie.vote_average,
                        posterPath: movie.poster_path,
                        overview: movie.overview,
                        category: 'movie'
                    };
                }); 
                setPopularMovies(popularMoviesList);
            })
            .catch(error => {
                throw new Error('Errore nella fetch Popular Movies')
            });

    }, []);

    // useEffect per gestione delle ricerche tramite searchbar
    useEffect(() => {

        // Se la query è vuota, evitiamo di fare chiamate a vuoto
        if (!searchQuery.trim()) return;
        // devo chiamare le due funzioni in una promiseall
        // QUANDO CI SONO TUTTI I DATI, 
        // passare i dati con standarList rispettivo
        // restituire una variabile unica con tutte le query
        // che usero nella result section come prop per popolare la result in home.
        Promise.all([
            searchMovies(searchQuery),
            searchSeries(searchQuery)
        ])
            .then(([moviesData, seriesData]) => {

                const moviesResults = moviesData.results || [];
                const seriesResults = seriesData.results || [];

                //rimappo i dati di movielist e seriies list
                const standardMoviesList = moviesResults.map(movie => {
                    return {
                        id: `${movie.id}_movie`,
                        title: movie.title,
                        orTitle: movie.original_title,
                        orLanguage: movie.original_language,
                        rating: movie.vote_average,
                        posterPath: movie.poster_path,
                        overview: movie.overview,
                        category: 'movie'
                    };
                });

                const standardSeriesList = seriesResults.map(show => {
                    return {
                        id: `${show.id}_serie`,
                        title: show.name,
                        orTitle: show.original_name,
                        orLanguage: show.original_language,
                        rating: show.vote_average,
                        posterPath: show.poster_path,
                        overview: show.overview,
                        category: 'series'
                    };
                });

                setMashedResults([...standardMoviesList, ...standardSeriesList]);
            })
            .catch(error => {
                if (error.message === 'Pagina non trovata') {
                    setErrorMsg(error.message);
                } else {
                    setErrorMsg('Errore durante la ricerca globale');
                }
            });



    }, [searchQuery]);


    // Condivido i dati salvati con il resto dell'app
    const value = {
        moviesList,
        setMoviesList,
        seriesList,
        setSeriesList,
        errorMsg,
        setErrorMsg,
        searchQuery,
        setSearchQuery,
        mashedResults,
        setMashedResults,
        popularMovies,
        setPopularMovies
    };

    return (
        <AppDataContext value={value}>
            {children}
        </AppDataContext>
    );
}

export { AppDataContext, AppDataProvider };
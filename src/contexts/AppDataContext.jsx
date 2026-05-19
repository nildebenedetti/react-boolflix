import { useContext } from "react";
import { useState, useEffect, createContext } from "react";
import searchMovies from "../hooks/searchMovies";
import searchSeries from "../hooks/searchSeries";

const AppDataContext = createContext(null);

function AppDataProvider({ children }) {
    const [moviesList, setMoviesList] = useState([]); //variabile per lista film
    const [seriesList, setSeriesList] = useState([]); // variabile per settare results di series
    const [errorMsg, setErrorMsg] = useState('');
    const [searchQuery, setSearchQuery] = useState(''); //vribile di stato globale che viene aggiornata da form submit
        //rimappo i dati di movielist e seriies list
    const standardMoviesList = moviesList.map(movie => {
        return {
            id: movie.id,
            title: movie.title,
            orTitle: movie.original_title,
            orLanguage: movie.original_language,
            rating: movie.vote_average,
            posterPath: movie.poster_path
        };
    });

    const standardSeriesList = seriesList.map(show => {
        return {
            id: show.id,
            title: show.name,
            orTitle: show.original_name,
            orLanguage: show.original_language,
            rating: show.vote_average,
            posterPath: show.poster_path
        };
    });


    useEffect(() => {
        searchMovies(searchQuery)
            .then(data => {
                setMoviesList(data.results)
                console.log(data);
            })
            .catch(error => {
                if (error.message === 'Pagina non trovata') {
                    setErrorMsg(error.message)
                } else {
                    setErrorMsg('errore in ricerca')
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
        standardMoviesList,
        standardSeriesList
    };

    return (
        <AppDataContext value={value}>
            {children}
        </AppDataContext>
    );
}

export { AppDataContext, AppDataProvider };
import { useContext } from "react";
import { useState, useEffect, createContext } from "react";
import searchMovies from "../hooks/searchMovies";
import searchSeries from "../hooks/searchSeries";

const AppDataContext = createContext(null);

function AppDataProvider({ children }) {
    const [moviesList, setMoviesList] = useState([]); //variabile per lista film
    const [seriesList, setSeriesList] = useState([]); // variabile per settare results di series
    const [errorMsg, setErrorMsg] = useState('');


    useEffect(() => {
        searchMovies('crash')
            .then(data => {
                setMoviesList(data)
                console.log(data);

            })
            .catch(error => {
                if (error.message === 'Pagina non trovata') {
                    setErrorMsg(error.message)
                } else {
                    setErrorMsg('errore in ricerca film')
                }
            });
        searchSeries('crash')
            .then(data => {
                setSeriesList(data)
                console.log(data);
            })
            .catch(error => {
                if (error.message === 'Pagina non trovata') {
                    setErrorMsg(error.message)
                } else {
                    setErrorMsg('errore in ricerca serieTV')
                }
            });
        
    }, []);


    // Condivido i dati salvati con il resto dell'app
    const value = {
        moviesList,
        setMoviesList,
        seriesList,
        setSeriesList,
        errorMsg,
        setErrorMsg
    };

    return (
        <AppDataContext value={value}>
            {children}
        </AppDataContext>
    );
}

export { AppDataContext, AppDataProvider };
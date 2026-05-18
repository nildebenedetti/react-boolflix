import { useContext } from "react";
import { useState, useEffect, createContext } from "react";
import searchMovies from "../hooks/searchMovies";

const AppDataContext = createContext(null);


function AppDataProvider({ children }) {
    const [moviesList, setMoviesList] = useState([]); //variabile per lista film
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
                    setErrorMsg('Qualcosa è andato storto')
                }
            });
    }, []);


    // Condivido i dati salvati con il resto dell'app
    const value = {
        moviesList,
        setMoviesList,
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
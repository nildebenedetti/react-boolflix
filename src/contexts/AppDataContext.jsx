import { useContext } from "react";
import { useState, useEffect, createContext } from "react";

const AppDataContext = createContext(null);
const MOVIEBD_API_KEY = import.meta.env.VITE_MOVIEDB_API_KEY;

function AppDataProvider({ children }) {
    const [config, setConfig] = useState(null);
    const [caricamento, setCaricamento] = useState(true);

    useEffect(() => {
        //  oggetto options per configurazione dati richiesta 
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${MOVIEBD_API_KEY}`
            }
        };

        // Fetch di configurazione
        fetch('https://api.themoviedb.org/3/configuration', options)
            .then(res => res.json())
            .then(res => {
                console.log(res);      
                setConfig(res);        // Salvo i dati nello stato così non vanno persi
                setCaricamento(false);  // la fetch è finita
            })
            .catch(err => {
                console.error(err);
                setCaricamento(false);  // Finiamo il caricamento anche in caso di errore
            });

    }, []); 

    // Condivido i dati salvati con il resto dell'app
    const value = {
        config,
        caricamento
    };

    return (
        <AppDataContext value={value}>
            {children}
        </AppDataContext>
    );
}

export { AppDataContext, AppDataProvider };
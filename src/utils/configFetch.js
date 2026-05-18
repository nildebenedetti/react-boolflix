function getConfigFetch(setConfig, setCaricamento) {
    const MOVIEBD_API_KEY = import.meta.env.VITE_MOVIEDB_API_KEY;
    //  oggetto options per configurazione dati richiesta 
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${MOVIEBD_API_KEY}`
            }
        };

        // Fetch di configurazione
        return fetch('https://api.themoviedb.org/3/configuration', options)
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
};

export default getConfigFetch;

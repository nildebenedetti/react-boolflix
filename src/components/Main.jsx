import useAppData from "../hooks/useAppData";
import ResultSection from "./ResultSection";

function Main() {
    const { moviesList, seriesList } = useAppData();
    //rimappo i dati di movielist e seriies list
    const standardMoviesList = moviesList.map(movie => {
        return {
            id: movie.id,
            title: movie.title,
            orTitle: movie.original_title,
            orLanguage: movie.original_language,
            rating: movie.vote_average
        };
    });

    const standardSeriesList = seriesList.map(show => {
        return {
            id: show.id,
            title: show.name,
            orTitle: show.original_name,
            orLanguage: show.original_language,
            rating: show.vote_average
        };
    });

    return <>
    
    <ResultSection items={standardMoviesList} />

    <ResultSection items={standardSeriesList} />
    </>

}
export default Main;
import useAppData from "../hooks/useAppData";
import ResultSection from "../components/ResultSection";

function Movies() {
    const { mashedResults, popularMovies } = useAppData();

    const mashedResultsFilteredMovies = mashedResults.filter((result => {
        return result.category === 'movie';
    }));

    return <>
        <h1> Film</h1>
        {mashedResultsFilteredMovies.length > 0 && <h2>Risultati Ricerca</h2>}
            <ResultSection items={mashedResultsFilteredMovies} />
        <h2>Film Popolari</h2>
        <ResultSection items={popularMovies} />
    </>
}
export default Movies;
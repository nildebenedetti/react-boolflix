import useAppData from "../hooks/useAppData";
import ResultSection from "../components/ResultSection";

function Movies() {
    const { mashedResults } = useAppData();

    const mashedResultsFilteredMovies = mashedResults.filter((result => {
        return result.category === 'movie';
    }));

    return <>
        <h1> Film</h1>
        {/* qui dopo ci metto le serie popolari */}
        <section className="search-results-movies">
            <ResultSection items={mashedResultsFilteredMovies} />
        </section>
    </>
}
export default Movies;
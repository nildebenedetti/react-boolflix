import useAppData from "../hooks/useAppData";
import ResultSection from "../components/ResultSection";

function Series() {
    const { standardMoviesList } = useAppData();

    return <>
        <h1> Film</h1>
        {/* qui dopo ci metto le serie popolari */}
        <section className="search-results-movies">
            <ResultSection items={standardSeriesList} />
        </section>
    </>
}
export default Series;
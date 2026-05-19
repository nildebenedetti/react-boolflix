import useAppData from "../hooks/useAppData";
import ResultSection from "../components/ResultSection";

function Series() {
    const { mashedResults } = useAppData();
    
    const mashedResultsFilteredSeries = mashedResults.filter( (result => {
        return result.category === 'series';
    }));

    return <>
        <h1> Serie TV</h1>
        {/* qui dopo ci metto le serie popolari */}
        <section className="search-results-series">
            <ResultSection items={mashedResultsFilteredSeries} />
        </section>
    </>
}
export default Series;
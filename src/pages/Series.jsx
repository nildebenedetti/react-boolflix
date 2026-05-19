import useAppData from "../hooks/useAppData";
import ResultSection from "../components/ResultSection";

function Series() {
    const { standardSeriesList } = useAppData();

    return <>
        <h1> Serie TV</h1>
        {/* qui dopo ci metto le serie popolari */}
        <section className="search-results-series">
            <ResultSection items={standardSeriesList} />
        </section>
    </>
}
export default Series;
import useAppData from "../hooks/useAppData";
import ResultSection from "./ResultSection";

function Main() {
    const { mashedResults, popularMovies } = useAppData();


    return <>
        {mashedResults.length > 0 && <h1>Risultati Ricerca</h1>}
        <ResultSection items={mashedResults} />
        <h1>Film Popolari</h1>
        <ResultSection items={popularMovies} />
    </>

}
export default Main;
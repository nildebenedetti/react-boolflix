import useAppData from "../hooks/useAppData";
import ResultSection from "./ResultSection";

function Main() {
    const { standardMoviesList, standardSeriesList } = useAppData();


    return <>
    
    <ResultSection items={standardMoviesList} />

    <ResultSection items={standardSeriesList} />
    </>

}
export default Main;
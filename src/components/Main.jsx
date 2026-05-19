import useAppData from "../hooks/useAppData";
import ResultSection from "./ResultSection";

function Main() {
    const { mashedResults } = useAppData();


    return <>
    
    <ResultSection items={mashedResults} />


    </>

}
export default Main;
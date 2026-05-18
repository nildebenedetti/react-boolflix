import useAppData from "../hooks/useAppData";

function Main() {
    const { moviesList } = useAppData();

    return <>
        <div>
            <ul>
                {moviesList.map((movie) => {
                    const {
                        id,
                        name,
                        original_name: orName,         
                        original_language: orLanguage,  
                        vote_average: rating          
                    } = movie;

                    return (
                        <li key={id}>
                            <h3>{`Titolo: ${name}`}</h3>
                            <h5>{`Titolo Originale: ${orName}`}</h5> {/* Ora puoi usare orName! */}
                            <p>{`Lingua Originale: ${orLanguage}`}</p>
                            <p>{`Rating: ${rating}/10`}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    </>

}
export default Main;
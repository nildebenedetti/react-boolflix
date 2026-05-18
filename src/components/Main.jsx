import useAppData from "../hooks/useAppData";

function Main() {
    const { moviesList } = useAppData();

    return <>
        <div>
            <ul className="list-unstyled">
                {moviesList.map((movie) => {
                    const {
                        id,
                        title,
                        original_title: orTitle,         
                        original_language: orLanguage,  
                        vote_average: rating          
                    } = movie;

                    const flagCode = orLanguage === 'en'? 'gb': orLanguage;
                    return (
                        <li key={id}>
                            <h3>{`Titolo: ${title}`}</h3>
                            <h5>{`Titolo Originale: ${orTitle}`}</h5> {/* Ora puoi usare orName! */}
                            <span className={`fi fi-${flagCode} rounded-1`}></span>
                            <p>{`Rating: ${parseFloat(rating.toFixed(1))}/10`}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    </>

}
export default Main;
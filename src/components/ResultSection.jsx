import useAppData from "../hooks/useAppData";

function ResultSection({ items }) {
    // gestione sigle lingua !== da flag code
    const languageToCountry = {
        'en': 'gb', 
        'ja': 'jp', 
        'zh': 'cn',
        'ko': 'kr'
    };

    return <>
        <section>
            <div>
                <ul className="list-unstyled">
                    {items.map((item) => {
                        const {
                            id,
                            title,
                            orTitle,
                            orLanguage,
                            rating
                        } = item;
                        // se trova come chiave orLnguage, assegna valore corrispondente
                        const flagCode = languageToCountry[orLanguage] || orLanguage;
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
        </section>
    </>
};

export default ResultSection;
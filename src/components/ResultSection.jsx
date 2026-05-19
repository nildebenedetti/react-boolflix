import useAppData from "../hooks/useAppData";
import Card from "./Card";

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
                            rating,
                            posterPath
                        } = item;
                        // se trova come chiave orLnguage, assegna valore corrispondente
                        const flagCode = languageToCountry[orLanguage] || orLanguage;
                        return (
                                <Card
                                key={id}
                                {...item}
                                flagCode={flagCode}
                                />
                        );
                    })}
                </ul>
            </div>
        </section>
    </>
};

export default ResultSection;
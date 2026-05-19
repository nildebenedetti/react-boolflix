import { getImgURL } from "../utils/tmdb";



function Card({ title, orTitle, id, orLanguage, rating, flagCode, overview, posterPath, category }) {

  const backdrop_sizes = [
    "w342",
    "w780",
    "w1280",
    "original"
  ]

  return <>
    <li>
      <div className="flipcard-container">
        <div className="flip-card p-3 m-2">
          <div className="card-front">
            <img
              src={getImgURL(posterPath, backdrop_sizes[0])} // estrarlo, normalizzarlo in context e pssarlo
              className="card-img-top"
              alt={`Poster di ${title}`}
            />
          </div>
          <div className="card-back">
            <div className="card-body">
              <div className="py-3">
                <h2 className="card-title">{title}</h2>
              </div>
              <div className="py-3">
                <h5 className="original-title-text card-subtitle mb-2 text-muted h5">Titolo Originale: <br></br> {orTitle}   <br></br>  <span className={`fi fi-${flagCode} rounded-1`}></span></h5>
              </div>
              <div className="py-3">
                <p className="card-text mb-0 fw-bold">
                  Rating: {parseFloat(rating.toFixed(1))}/10
                </p>
                </div>
                <div className="py-3">
                <p className="overview-text">{overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li >
  </>
}

export default Card;
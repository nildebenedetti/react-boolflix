import { getImgURL } from "../utils/tmdb";



function Card({ title, orTitle, id, orLanguage, rating, flagCode, posterPath }) {

  const backdrop_sizes = [
    "w300",
    "w780",
    "w1280",
    "original"
  ]

  return <>
    <li>
      {/* Titolo Principale */}
      <h3 className="card-title">{title}</h3>
      <img
        src={getImgURL(posterPath, backdrop_sizes[0])} // estrarlo, normalizzarlo in context e pssarlo
        className="card-img-top"
        alt={`Poster di ${title}`}
      />


      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          {/* Titolo Originale */}
          <h5 className="card-subtitle mb-2 text-muted h6">Titolo Originale: {orTitle}     <span className={`fi fi-${flagCode} rounded-1`}></span></h5>
        </div>
        <div className="d-flex align-items-center gap-2 mt-3">
          <p className="card-text mb-0 fw-bold">
            Rating: {parseFloat(rating.toFixed(1))}/10
          </p>
        </div>
      </div>
    </li>
  </>
}

export default Card;
import { Link } from 'react-router'

export default function TvShowsCatalogItem({
    _id,
    title,
    genre,
    image,
    description
}) {
    return (

        <div className="band" >

            
            <div className="flip flip-vertical">
                <div className="front">
                    <img src={image}
                        alt={title} />
                </div>
                <div className="back">
                    <h1>{title}</h1>
                    <h2>Genre: {genre}</h2>
                    <p>Description: {description}</p>
                    <Link to={`/tv-shows/${_id}/details`} className="details">Details</Link>
                </div>
            </div>
            </div>
           
            
    );
}

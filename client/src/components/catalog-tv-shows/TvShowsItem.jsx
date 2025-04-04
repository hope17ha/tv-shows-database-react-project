import { Link } from 'react-router'

export default function TvShowsCatalogItem({
    _id,
    title,
    genre,
    image,
    description
}) {
    return (

        <div class="band" >

            
            <div class="flip flip-vertical">
                <div class="front">
                    <img src={image}
                        alt={title} />
                </div>
                <div class="back">
                    <h1>{title}</h1>
                    <h2>Genre: {genre}</h2>
                    <p>Description: {description}</p>
                    <Link to={`/tv-shows/${_id}/details`} class="details">Details</Link>
                </div>
            </div>
            </div>
           
            
    );
}

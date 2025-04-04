import { Link, useParams } from "react-router";
import { useShow } from "../../api/tvShowsApi";
import useAuth from "../../hooks/useAuth";

export default function DetailsTvShow() {
    const { tvShowId } = useParams();
    const { show } = useShow(tvShowId);
    const { userId } = useAuth()

    const isOwner = userId === show._ownerId;

    console.log(userId);
    console.log(show._ownerId);

    return (
        <section id="details-page">
            <div className="main_card">
                <div className="card_left">
                    <div className="card_datails">
                        <h1>{show.title}</h1>
                        <div className="card-movie">
                            <div className="first-info">
                                <p className="card-genre">
                                    Genre: {show.genre}
                                </p>
                                <p className="card-director">
                                    Director: {show.director}
                                </p>
                            </div>
                            <div className="second-info">
                                <p className="card-year">Year: {show.year}</p>
                                <p className="card-ranking">
                                    Rating:{" "}
                                    <span id="stars">{show.rating}</span>
                                </p>
                            </div>
                        </div>

                        <p className="disc">Description: {show.description}</p>
                        <p className="card-category">Seasons: {show.seasons}</p>
                    </div>
                </div>
                <div className="card_right">
                    <img src={show.image} alt={show.title} />
                </div>
            </div>
            {isOwner && (
            <ul className="noBullet">
                <li id="center-btn">
                <Link to={`/tv-shows/${tvShowId}/edit`} id="login-btn">Edit</Link>
                    <button id="login-btn">Delete</button>
                </li>
            </ul>
            )}
        </section>
    );
}

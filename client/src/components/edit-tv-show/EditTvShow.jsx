import { Navigate, useNavigate, useParams } from "react-router";
import { useEditShow, useShow } from "../../api/tvShowsApi";

export default function EditTvShow() {
    const navigate = useNavigate();
    const { tvShowId } = useParams();
    const { show } = useShow(tvShowId);
    const { edit } = useEditShow();

    console.log(show);
    const formAction = async (formData) => {
        const showData = Object.fromEntries(formData);

        edit(tvShowId, showData);

        navigate(`/tv-shows/${tvShowId}/details`);
    };

    return (
        <section id="edit-page">
            <div className="editSection">
                <div className="info-edit">
                    <h2>
                        "One ring to rule them all, one ring to find them, one
                        ring to bring them all and in the darkness bind them."
                    </h2>
                </div>

                <form action={formAction} className="editForm">
                    <h2>Edit Post</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="title"
                                name="title"
                                defaultValue={show.title}
                            />
                        </li>
                        <li>
                            <label htmlFor="genre">Genre:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="genre"
                                name="genre"
                                defaultValue={show.genre}
                            />
                        </li>
                        <li>
                            <label htmlFor="director">Director:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="director"
                                name="director"
                                defaultValue={show.director}
                            />
                        </li>
                        <li>
                            <label htmlFor="date">Year:</label>
                            <input
                                type="number"
                                className="inputFields"
                                id="year"
                                name="year"
                                defaultValue={show.year}
                            />
                        </li>
                        <li>
                            <label htmlFor="image">Movie Poster:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="image"
                                name="image"
                                defaultValue={show.image}
                            />
                        </li>
                        <li>
                            <label htmlFor="image">Rating:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="rating"
                                name="rating"
                                defaultValue={show.rating}
                            />
                        </li>
                        <li>
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                className="inputFields"
                                name="description"
                                defaultValue={show.description}
                            ></textarea>
                        </li>
                        <li>
                            <label htmlFor="seasons">Seasons:</label>
                            <input
                                type="text"
                                className="inputFields"
                                id="seasons"
                                name="seasons"
                                defaultValue={show.seasons}
                            />
                        </li>

                        <li id="center-btn">
                            <button id="edit-btn">Done</button>
                            <button
                                id="cancel-btn"
                                type="button"
                                onClick={() => navigate(-1)}
                            >
                                Cancel
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        </section>
    );
}

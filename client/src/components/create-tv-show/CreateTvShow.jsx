import { useNavigate } from "react-router";
import { useCreateShow } from "../../api/tvShowsApi";


export default function CreateTvShow() {

    const { create } = useCreateShow();
    const navigate = useNavigate();

    const submitAction = async (formData) => {
        const data = Object.fromEntries(formData);
        
        await create(data);

        navigate('/tv-shows')
    }
    

    return (
        <section id="create-page">
                <div className="createSection">
                    <div className="info">
                        <h2>"Today, I consider myself the luckiest man on the face of the earth." -The Pride of the Yankees, 1942</h2>
                    </div>

                    <form action={submitAction} className="createForm">
                        <h2>Add TV Show</h2>
                        <ul className="noBullet">
                            <li>
                                <label htmlFor="title">Title:</label>
                                <input required type="text" className="inputFields" id="title" name="title"  />
                            </li>
                            <li>
                                <label htmlFor="genre">Genre:</label>
                                <input required type="text" className="inputFields" id="genre" name="genre"  />
                            </li>
                            <li>
                                <label htmlFor="director">Seasons:</label>
                                <input required type="text" className="inputFields" id="director" name="seasons" />
                            </li>
                            <li>
                                <label htmlFor="director">Director:</label>
                                <input required type="text" className="inputFields" id="director" name="director" />
                            </li>
                            <li>
                                <label htmlFor="date">Year:</label>
                                <input required type="text" className="inputFields" id="year" name="year" />
                            </li>
                            <li>
                                <label htmlFor="image">TV Show Poster:</label>
                                <input required type="text" className="inputFields" id="image" name="image"/>
                            </li>
                            <li>
                                <label htmlFor="image">Rating:</label>
                                <input required type="text" className="inputFields" id="rating" name="rating"  />
                            </li>
                            <li>
                                <label htmlFor="description">Description:</label>
                                <textarea required id="description" className="inputFields" name="description"></textarea>
                            </li>
                         
                            <li id="center-btn">
                                <button id="create-btn">Add TV Show</button>
                            </li>
                        </ul>
                    </form>
                    

                </div>
            </section>

    )
}
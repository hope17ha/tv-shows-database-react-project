

export default function EditTvShow() {

    return (

        <section id="edit-page">
                <div className="editSection">
                    <div className="info-edit">
                        <h2>"One ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them."</h2>
                    </div>

                    <form action="#" method="" className="editForm">
                        <h2>Edit Post</h2>
                        <ul className="noBullet">
                            <li>
                                <label for="title">Title:</label>
                                <input type="text" className="inputFields" id="title" name="" value="The Little Marmaid" />
                            </li>
                            <li>
                                <label for="genre">Genre:</label>
                                <input type="text" className="inputFields" id="genre" name="" value="Fantasy" />
                            </li>
                            <li>
                                <label for="director">Director:</label>
                                <input type="text" className="inputFields" id="director" name="" value="Rob Marshall" />
                            </li>
                            <li>
                                <label for="date">Year:</label>
                                <input type="number" className="inputFields" id="year" name="" value="2023" />
                            </li>
                            <li>
                                <label for="image">Movie Poster:</label>
                                <input type="text" className="inputFields" id="image" name="" value="https://m.media-amazon.com/images/M/MV5BYTUxYjczMWUtYzlkZC00NTcwLWE3ODQtN2I2YTIxOTU0ZTljXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" />
                            </li>
                            <li>
                                <label for="image">Rating:</label>
                                <input type="text" className="inputFields" id="rating" name="" value="4" />
                            </li>
                            <li>
                                <label for="description">Description:</label>
                                <textarea id="description" className="inputFields" name="description">The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to experience life on land.</textarea>
                            </li>
                            <li id="center-btn">
                                <button id="edit-btn">Edit</button>
                            </li>
                        </ul>
                    </form>

                </div>
            </section>
    )
    
}

export default function CreateTvShow() {

    return (
        <section id="create-page">
                <div className="createSection">
                    <div className="info">
                        <h2>"Today, I consider myself the luckiest man on the face of the earth." -The Pride of the Yankees, 1942</h2>
                    </div>

                    <form action="#" method="" className="createForm">
                        <h2>Add Movie</h2>
                        <ul className="noBullet">
                            <li>
                                <label for="title">Title:</label>
                                <input type="text" className="inputFields" id="title" name="" value="" />
                            </li>
                            <li>
                                <label for="category">Category:</label>
                                <select id="category" className="inputFields" name="category">
                                    <option value="">Select Category</option>
                                    <option value="tv-show">TV Show</option>
                                    <option value="animation">Animation</option>
                                    <option value="movie">Movie</option>
                                    <option value="documentary">Documentary</option>
                                    <option value="short-film">Short Film</option>
                                </select>
                            </li>
                            <li>
                                <label for="genre">Genre:</label>
                                <input type="text" className="inputFields" id="genre" name="" value="" />
                            </li>
                            <li>
                                <label for="director">Director:</label>
                                <input type="text" className="inputFields" id="director" name="" value="" />
                            </li>
                            <li>
                                <label for="date">Year:</label>
                                <input type="number" className="inputFields" id="year" name="" value="" />
                            </li>
                            <li>
                                <label for="image">Movie Poster:</label>
                                <input type="text" className="inputFields" id="image" name="" value="" />
                            </li>
                            <li>
                                <label for="image">Rating:</label>
                                <input type="text" className="inputFields" id="rating" name="" value="" />
                            </li>
                            <li>
                                <label for="description">Description:</label>
                                <textarea id="description" className="inputFields" name="description"></textarea>
                            </li>
                         
                            <li id="center-btn">
                                <button id="create-btn">Add Movie</button>
                            </li>
                        </ul>
                    </form>
                    

                </div>
            </section>

    )
}
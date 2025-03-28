

export default function DetailsTvShow() {

    return (

    <section id="details-page">

        <div class="main_card">
            <div class="card_left">
                <div class="card_datails">

                    <h1>The Little Mermaid</h1>
                    <div class="card-movie">
                        <div class="first-info">
                            <p class="card-genre">Genre: Fantasy</p>
                            <p class="card-director">Directror: Rob Marshall</p>
                        </div>
                        <div class="second-info">
                            <p class="card-year">Year: 2023</p>
                            <p class="card-ranking">Rating: <span id="stars">&#x2605; &#x2605; &#x2605;
                                    &#x2605;</span></p>
                        </div>

                    </div>

                    <p class="disc">Description: The youngest of King Triton's daughters, Ariel is a beautiful
                        and spirited young mermaid with a thirst for adventure. Longing to find out more about
                        the world beyond the sea, Ariel visits the surface and falls for the dashing Prince
                        Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to
                        experience life on land.</p>
                        <p class="card-category">Category: Movie</p>
                </div>
            </div>
            <div class="card_right">
                <img src="/public/images/the-little-mermaid.jpg" alt="image" />
            </div>
        </div>

        <div class="main-cast-card">
            <div class="cast-card">
                <div class="card-img">
                    <img src="https://images.toofab.com/image/4e/1by1/2022/11/08/4ea2669b9964450bb8d3e28d5bff9a1f_xl.jpg"
                        alt="cast" />
                </div>
                <div class="cast-info">
                    <h1>Halle Bailey</h1>
                    <h3>Age: 23</h3>
                    <h3>Born: Atlanta, Georgia, United States</h3>
                    <h3>Name in Movie: Ariel</h3>
                </div>
            </div>
            <div class="cast-card">
                <div class="card-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoIKQIGtYhC0ufGFsJQl6TcR1VMdhjq1A9g&usqp=CAU"
                        alt="cast" />
                </div>
                <div class="cast-info">
                    <h1>Jonah Hauer-King</h1>
                    <h3>Age: 28</h3>
                    <h3>Born: London, England, UK</h3>
                    <h3>Name in Movie: Eric</h3>
                </div>
            </div>
        </div>


    </section>
        
    )
}
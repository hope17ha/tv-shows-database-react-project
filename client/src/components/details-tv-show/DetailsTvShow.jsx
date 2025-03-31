

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


    </section>
        
    )
}
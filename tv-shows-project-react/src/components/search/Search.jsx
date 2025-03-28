

export default function Search() {

    return (

        <>

            <section id="search">
                <h1>Search</h1>
                <form action="" method="" class="form" />
                    <input type="text" class="search" name="search" placeholder="Title..." />
                    <input type="text" name="" class="genre" placeholder="Genre..." />
                    <input type="number" name="" class="year" placeholder="Year..." />
                    <input type="submit" value="search" />
                
            </section>

            <section id="catalog">
                <div class="band">

                    {/* <!-- If there are posts for movie in the database display each of them --> */}
                    <div class="flip flip-vertical">
                        <div class="front">
                            <img src="/public/images/jungle-cruise.jpeg"
                                alt="Jungle-Couise" />
                        </div>
                        <div class="back">
                            <h1>Jungle Cuise</h1>
                            <h2>Genre: Adventure</h2>
                            <p>Description: Dreaming about saving countless lives and having another adventure, the
                                feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden
                                mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton
                                enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff,
                                to guide them through the serpentine Amazon River in La Quila, his swift wooden boat.
                                Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable
                                green maze, searching for something that cannot be found, a centuries-old curse and the
                                ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.
                            </p>
                            <a href="#" class="details">Details</a>
                        </div>
                    </div>



                    {/* <!-- If there are no posts matched display: --> */}
                    {/* <div class="no-posts">
                        <p class="no-offer">There are no movies matched...</p>
                    </div>  */}
                </div>
            </section>

            </>

    )
}
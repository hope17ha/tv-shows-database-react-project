import { useShows } from "../../api/tvShowsApi"
import TvShowsCatalogItem from "./TvShowsItem";


export default function CatalogTvShows(){

    const { shows } = useShows();

    return (
        
        <section id="catalog">
                <h1>All TV Shows</h1>

                {shows.length > 0
                ? shows.map(show => <TvShowsCatalogItem key={show._id} {...show} />)
                : <div className="no-posts">
                <p className="no-offer">There are no added TV Shows yet...</p>
                </div>
            }
                
        </section>
    )
}
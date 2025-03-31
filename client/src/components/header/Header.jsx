
import { Link } from "react-router";

export default function Header(){

    return (
        <>
   
    <h1 className="home"><a href="/">TV Shows</a></h1>
        <nav>
            <img src="/public/images/logo.webp" alt="logo" />

                <ul className="menu">
                    
                    <Link to="/">Home</Link>
                    <Link to="/tv-shows/create">Create TV Series</Link>
                    <Link to="/tv-shows">Catalog</Link>
                    <Link to="/tv-shows/search">Search</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/logout">Logout</Link>
                  
                </ul>

        </nav>
   

        </>
    )
}
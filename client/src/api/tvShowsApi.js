import { useEffect, useState } from "react";
import requester from "../utils/requester";


const baseUrl = 'http://localhost:3030/data/tvShows'

export const useShows = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        requester.get(baseUrl)
            .then(setShows)
    }, []);

    return { shows };
};
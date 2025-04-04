import { useEffect, useState } from "react";
import requester from "../utils/requester";
import useAuth from "../hooks/useAuth";


const baseUrl = 'http://localhost:3030/data/tvShows'

export const useShows = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        requester.get(baseUrl)
            .then(setShows)
    }, []);

    return { shows };
};

export const useShow = (tvShowId) => {
    const [show, setShow] = useState({});

    useEffect(() => {
        requester.get(`${baseUrl}/${tvShowId}`)
            .then(setShow);
    }, [tvShowId])

    

    return {
        show,
    };
};

export const useEditShow = () => {
    

    const edit = (tvShowId, tvShowData) =>
        requester.put(`${baseUrl}/${tvShowId}`, { ...tvShowData, _id: tvShowId });

    return {
        edit,
    }
};
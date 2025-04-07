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
    
    const { request } = useAuth();

    const edit = async (tvShowId, tvShowData) =>
        await request.put(`${baseUrl}/${tvShowId}`, { ...tvShowData, _id: tvShowId });

    return {
        edit,
    }
};

export const useDeleteShow = () => {
    const { request } = useAuth();

    const deleteShow = (tvShowId) =>
        request.delete(`${baseUrl}/${tvShowId}`);

    return {
        deleteShow,
    }
};

export const useCreateShow = () => {
    const { request } = useAuth();

    const create = (showData) =>
        request.post(baseUrl, showData);

    return {
        create,
    }
};
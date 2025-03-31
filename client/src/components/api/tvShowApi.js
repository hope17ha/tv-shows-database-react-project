import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/tvShows';

export const useTvShows = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setShows)
    }, []);

    return { shows };
};

export const useTvShow = (tvShowId) => {
    const [show, setShow] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${gameId}`)
            .then(setShow);
    }, [tvShowId])

    return {
        show,
    };
};


export const useCreateTvShow = () => {
    const { request } = useAuth();

    const create = (tvShowData) =>
        request.post(baseUrl, tvShowData);

    return {
        create,
    }
};

export const useEditTvShow = () => {
    const { request } = useAuth();

    const edit = (tvShowId, tvShowData) =>
        request.put(`${baseUrl}/${gameId}`, { ...tvShowData, _id: tvShowId });

    return {
        edit,
    }
};

export const useDeleteTvShow = () => {
    const { request } = useAuth();

    const deleteTvShow = (tvShowId) =>
        request.delete(`${baseUrl}/${tvShowId}`);

    return {
        deleteTvShow,
    }
};

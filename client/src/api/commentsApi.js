import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/comments';


export const useComments = (tvShowId) => {
    const { request } = useAuth();
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const searchParams = new URLSearchParams({
            where: `tvShowId="${tvShowId}"`,
            load: `author=_ownerId:users`,
        });

        const result = await request.get(`${baseUrl}?${searchParams.toString()}`);
        setComments(result);
    };

    useEffect(() => {
        fetchComments();
    }, [tvShowId]);

    const addComment = (commentData) => {
        setComments(prevComments => {
            const exists = prevComments.find(c => c._id === commentData._id);
            if (exists) {
                return prevComments.map(c => c._id === commentData._id ? commentData : c);
            } else {
                return [...prevComments, commentData];
            }
        });
    };

    const removeComment = (commentId) => {
        setComments(prevComments =>
            prevComments.filter(comment => comment._id !== commentId)
        );
    };

    return {
        comments,
        addComment,
        removeComment, 
        refetch: fetchComments,
    };
};
  


export const useComment = (commentId) => {
    const { request } = useAuth();
    const [comment, setComment] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${commentId}`)
            .then(setComment);
    }, [commentId])


    return {
        comment,
    };
}
// "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
// "tvShowId": "3587274d-0fg4-4afb-8ca9-5b256ae3b348",
// "comment": "hhvmhbmhbm",
// "author": "admin@abv.bg",
// "_createdOn": 1746456136972,
// "_id": "b514c465-5746-485a-960b-ec37d8d9af80"
  
export const useUpdateComment = () => {
    const { request } = useAuth();

    const update = async (commentId, commentText, tvShowId) => {
        const commentData = {
            comment: commentText,
            tvShowId,
        };
    
        const result = await request.put(`${baseUrl}/${commentId}`, commentData);
    
        return result;
    };

    return {
        update,
    };
};

export const useCreateComment = () => {
    const { request } = useAuth();

    const create = async (tvShowId, comment, author) => {
        const commentData = {
            tvShowId,
            comment,
            author,
        };

        const result = await request.post(baseUrl, commentData);

        // Attach `author` info manually (API might only return _ownerId)
        return {
            ...result,
            author, // include full author info in response
        };
    };

    return {
        create,
    };
};

    export const useDeleteComment = () => {
        const { request } = useAuth();
    
        const deleteComment = (commentId) =>
            request.delete(`${baseUrl}/${commentId}`);
    
        return {
            deleteComment,
        }
    };




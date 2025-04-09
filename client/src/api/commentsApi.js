import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useParams } from "react-router";

const baseUrl = 'http://localhost:3030/data/comments';


export const useComments = (tvShowId) => {
    const { request } = useAuth();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        request.get(`${baseUrl}?where=tvShowId%3D%22${tvShowId}%22&load=author%3D_ownerId%3Ausers`)
            .then(setComments)
    }, []);


    const addComment = (commentData) => {
        setComments(prevComments => [...prevComments, commentData]); // Add new comment to the state
    };

    return {
        comments,
        addComment
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
  
export const useUpdateComment = () => {
    
    const { request } = useAuth();

    const update = async (commentId, commentData) =>
        await request.put(`${baseUrl}/${commentId}`, { ...commentData, _id: commentId });

    return {
        update,
    }
};

export const useCreateComment = () => {
    const { request } = useAuth();

    const create = (tvShowId, comment, author) => {
        const commentData = {
            
          tvShowId,
          comment,
          author
        };
    
        // Post the comment and update the local comments state
        return request
          .post(baseUrl, commentData) // Adjust this URL based on your API
    }
          
    
      return {
        create,
      };
    };




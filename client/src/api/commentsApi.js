import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

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

export const useCreateComment = () => {
    const [comments, setComments] = useState([]);
    const { request } = useAuth();

    const create = (tvShowId, comment) => {
        const commentData = {
          tvShowId,
          comment,
        };
    
        // Post the comment and update the local comments state
        return request
          .post(baseUrl, commentData) // Adjust this URL based on your API
          .then(() => {
            // Optimistically add the new comment to the list
            setComments((prevComments) => [...prevComments, commentData]);
          })
          .catch((error) => {
            console.error('Error posting comment:', error);
          });
      };
    
      return {
        comments, // Return the comments state to use in the component
        create,
      };
    };
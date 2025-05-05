import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import useAuth from '../hooks/useAuth';

const CommentsContext = createContext();

export const CommentsProvider = ({ tvShowId, children }) => {


    const baseUrl = 'http://localhost:3030/data/comments';

    const { request } = useAuth();
    const [comments, setComments] = useState([]);

    const fetchComments = useCallback(async () => {
        const searchParams = new URLSearchParams({
            where: `tvShowId="${tvShowId}"`,
            load: `author=_ownerId:users`,
        });

        try {
            const result = await request.get(`${baseUrl}?${searchParams.toString()}`);
            console.log(result);
            if (Array.isArray(result)) {
              setComments(result);
            } else {
              console.warn("Comments result is not an array:", result);
              setComments([]);
            }
          } catch (error) {
            console.error('Failed to fetch comments:', error);
            setComments([]);
          }
    }, [tvShowId, request]);

    useEffect(() => {
        if (tvShowId) {
            fetchComments();
        }
    }, [fetchComments, tvShowId]);

    const addOrUpdateComment = (commentData) => {
        setComments(prev =>
            prev.some(c => c._id === commentData._id)
                ? prev.map(c => (c._id === commentData._id ? commentData : c))
                : [...prev, commentData]
        );
    };

    const removeComment = (commentId) => {
        setComments(prevComments =>
            prevComments.filter(comment => comment._id !== commentId)
        );
    };

    const value = {
        comments,
        setComments,
        addOrUpdateComment,
        removeComment,
        refetch: fetchComments,
    };

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    );
};

export const useCommentsContext = () => useContext(CommentsContext);
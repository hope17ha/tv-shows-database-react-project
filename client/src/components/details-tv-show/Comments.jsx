import { useState } from 'react';
import { useCreateComment } from '../../api/commentsApi';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

export default function Comments() {
    const { create , comments } = useCreateComment();
    const [newComment, setNewComment] = useState('');

    const navigate = useNavigate();
    const {tvShowId} = useParams();

  

 
    // The submit action for the form
  const submitAction = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Create comment data from the form input
    const data = {
      comment: newComment, // Assuming newComment is what the user types
    };

    try {
      // Call the create function from your custom hook to post the new comment
      await create(tvShowId, data); // This adds the comment and updates the state

      // Optionally, clear the comment input after posting
      setNewComment('');
    } catch (error) {
      console.error(error.message);
    }
  };
 

  return (
    <div className="comment">
      <h2 className="comment-add">Leave a Comment</h2>
      <form onSubmit={submitAction}>
      <label htmlFor="comments"></label>
        <textarea
          
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)} // Update state as user types
          placeholder="Write your comment here..."
          name="content"
        />
        <button
          type="submit"
          className="submit-btn"

        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};


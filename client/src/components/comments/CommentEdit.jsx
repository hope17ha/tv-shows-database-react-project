
import {  useNavigate, useParams } from 'react-router';
import {  useComment, useComments, useUpdateComment } from '../../api/commentsApi';
import useAuth from '../../hooks/useAuth';
import { useCommentsContext } from '../../contexts/CommentContext';


export default function EditCommentPage(

) {
    const { tvShowId, commentId } = useParams();
    const { comment } = useComment(commentId);
    const {  addOrUpdateComment } = useCommentsContext();
    const { update } = useUpdateComment();
    const { email, userId, username } = useAuth();
    const navigate = useNavigate();


    const editAction = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const commentText = formData.get("comment");
    
        const updatedComment = await update(commentId, commentText, tvShowId);
        updatedComment.author = {
            _id: userId,
            email,
            username,
          };
    
        addOrUpdateComment(updatedComment);
        navigate("..");
    };
    

    return (
        <div className="edit-comment-page">
            <h1>Edit Comment</h1>
            <form onSubmit={editAction}>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        defaultValue={comment?.comment || ""}
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">Save Changes</button>
            </form>
        </div>
    );
}

import {  useNavigate, useParams } from 'react-router';
import {  useComment, useUpdateComment } from '../../api/commentsApi';

export default function EditCommentPage() {
    const  {commentId}  = useParams();
    const { comment } = useComment(commentId);
    const { update } = useUpdateComment();

    const navigate = useNavigate();

    const editAction = async (formData) => {
        const commentData = Object.fromEntries(formData);

        update(commentId, commentData)

        navigate(-1);
    }

  

  return (
    <div className="edit-comment-page">
      <h1>Edit Comment</h1>
      <form action={editAction}>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            defaultValue={comment.comment}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Save Changes
        </button>
      </form>
    </div>
  );
}
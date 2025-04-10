import { Link, useNavigate, useParams } from "react-router";
import { useUserContext } from "../../contexts/UserContext";
import { useDeleteComment } from "../../api/commentsApi";

export default function CommentsList(
    {
        comments,
    }
) {

    const { tvShowId } = useParams();
    const { _id } = useUserContext();
    const { deleteComment } = useDeleteComment();
    
    const showDeleteClickHandler = async (commentId) => {

        const hasConfirm = confirm(`Are you sure you want to delete this comment?`);

        if (!hasConfirm) {
            return;
        }

        await deleteComment(commentId);

        window.location.reload();
    };

    return (
        <>
            <div className="comment-view">
                {/* Page Header */}
                <h1 className="comments">
                    Comments
                </h1>

                <div className="comment-form">
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div
                                key={comment._id}
                                className="comment-id"
                            >
                         
                                <div className="comment-author">
                                    <p className="comment-author">
                                        {comment.author.email}
                                    </p>
                                    <p className="comment-content">
                                        {comment.comment}
                                    </p>
                                </div>
                                {comment._ownerId === _id && (
                                    <>
                                <Link to={`/tv-shows/${tvShowId}/comments/${comment._id}/edit`}  className="submit-btn" >Edit</Link>
                                <button
                                type="button"
                                className="submit-btn"
                                onClick={() => showDeleteClickHandler(comment._id)}
                                >
                                 Delete
                                </button>
                                 </>
                                )}
                            </div>
                        ))
                    )
                
                     : (
                        <p className="no-comments">
                            No comments yet.
                        </p>
                    )}

                
                </div>
            </div>
        </>
    );
}

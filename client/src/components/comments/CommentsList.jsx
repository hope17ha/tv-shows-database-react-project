import { Link } from "react-router";
import { useUserContext } from "../../contexts/UserContext";
import { useComments, useDeleteComment } from "../../api/commentsApi";
import { useCommentsContext } from "../../contexts/CommentContext";

export default function CommentsList({ comments }) {
    const { _id } = useUserContext();
    const { deleteComment } = useDeleteComment();
    // const { refetch } = useComments();
    const { removeComment } = useCommentsContext();

    const showDeleteClickHandler = async (commentId) => {
        const hasConfirm = confirm(
            `Are you sure you want to delete this comment?`
        );
        if (!hasConfirm) return;

        await deleteComment(commentId); 
        removeComment(commentId);// Call delete function to delete the comment on the server
        // refetch(); // Refetch comments from the backend after deletion
    };

    return (
        <div className="comment-view">
            <h1 className="comments">Comments</h1>
            <div className="comment-form">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment._id} className="comment-id">
                            <div className="comment-author">
                            <p className="comment-author">
                                {comment.author?.email || 'Unknown author'}
                            </p>
                                <p className="comment-content">
                                    {typeof comment.comment === "string"
                                        ? comment.comment
                                              .split("\n")
                                              .map((line, index) => (
                                                  <span key={index}>
                                                      {line}
                                                      <br />
                                                  </span>
                                              ))
                                        : "Invalid comment content"}
                                </p>
                            </div>
                            {comment._ownerId === _id && (
                                <>
                                    <Link
                                        to={`comments/${comment._id}/edit`}
                                        className="submit-btn"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        className="submit-btn"
                                        onClick={() =>
                                            showDeleteClickHandler(comment._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="no-comments">No comments yet.</p>
                )}
            </div>
        </div>
    );
}

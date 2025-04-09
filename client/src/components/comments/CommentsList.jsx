import { Link, useParams } from "react-router";
import { useComment } from "../../api/commentsApi";

export default function CommentsList(
    {
        comments,
    }
) {

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
                                <Link to={`/tv-shows/comments/${comment._id}/edit`}  className="submit-btn" >Edit</Link>
                                 <button type="submit" className="submit-btn">Delete</button>
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


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
                            </div>
                        ))
                    ) : (
                        <p className="no-comments">
                            No comments yet.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

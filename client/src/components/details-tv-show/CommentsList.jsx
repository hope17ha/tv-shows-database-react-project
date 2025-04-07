import { useEffect } from "react";
import { useComments } from "../../api/commentsApi";


export default function CommentsList() {
    const { comments } = useComments();


    return (
        <>
            <div className="comment-view">
                {/* Page Header */}
                <h1 className="comments">
                    Comments
                </h1>

                <div className="comment-form">
                    {comments.length > 0 ? (
                        comments.map(({ _id, comment, author }) => (
                            <div
                                key={_id}
                                className="comment-id"
                            >
                                {/* Bubble-style Comment Box */}
                                <div className="comment-author">
                                    <p className="comment-author">
                                        {author.email}
                                    </p>
                                    <p className="comment-content">
                                        {comment.content}
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

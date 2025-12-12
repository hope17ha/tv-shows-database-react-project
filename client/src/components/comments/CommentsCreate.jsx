

export default function CommentsCreate({ onCreate }) {
  const commentAction = async (formData) => {
    const comment = formData.get('comment');

  
    onCreate(comment);
}


   
  return (
    <div className="comment-create-container">
      <h2>Leave a Comment</h2>
      <form action={commentAction} className="comment-form">
        <textarea
          name="comment"
          className="comment-textarea"
          placeholder="Write your comment here..."
        />
        <button type="submit" className="comment-submit-btn">
          Submit Comment
        </button>
      </form>
    </div>
  );
};


export default function CommentsCreate({ onCreate }) {
  const commentAction = async (formData) => {
    const comment = formData.get('comment');

  
    onCreate(comment);
}


   
  return (
    <div className="comment">
      <h2 className="comment-add">Leave a Comment</h2>
      <form action={commentAction}>
        <label htmlFor="comments"></label>
        <textarea
          placeholder="Write your comment here..."
          name="comment"
        />
        <button type="submit" className="submit-btn">
          Submit Comment
        </button>
      </form>
    </div>
  );
};


export default function CommentsCreate({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from reloading the page
    const formData = new FormData(event.target);
    onCreate(formData); // Calls the onCreate function passed as prop
  };
   
  return (
    <div className="comment">
      <h2 className="comment-add">Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
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
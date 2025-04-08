import { useOptimistic, startTransition } from "react"; // Ensure you're importing startTransition
import { v4 as uuid } from 'uuid';
import { useDeleteShow, useShow } from "../../api/tvShowsApi";
import { Link, useNavigate, useParams } from "react-router";
import CommentsList from "./CommentsList";
import CommentsCreate from "./CommentsCreate";
import { useComments, useCreateComment } from "../../api/commentsApi";
import useAuth from "../../hooks/useAuth";

export default function DetailsTvShow() {
    const { tvShowId } = useParams();
    const { show } = useShow(tvShowId);
    const { email, userId } = useAuth();
    const { deleteShow } = useDeleteShow();
    const { create } = useCreateComment();
    const navigate = useNavigate();
    const { comments, addComment } = useComments(tvShowId);
    const [optimisticComments, setOptimisticComments] = useOptimistic(comments, (state, newComment) => [...state, newComment]);

    const showDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${show.title} TV-Show?`);

        if (!hasConfirm) {
            return;
        }

        await deleteShow(tvShowId);
        navigate('/tv-shows');
    };

    const commentCreateHandler = async (formData) => {
        const comment = formData.get('comment');

        // Create optimistic comment
        const newOptimisticComment = {
            _id: uuid(),
            _ownerId: userId,
            tvShowId,
            comment,
            author: {
                email,
            }
        };
        
        
        startTransition(() => {
            setOptimisticComments(newOptimisticComment);
        });
        console.log(optimisticComments);

        // Server update
        const commentResult = await create(tvShowId, comment);

        // Local state update
        addComment({ ...commentResult });
    };

    const isOwner = userId === show._ownerId;

    return (
        <>
            <section id="details-page">
                <div className="main_card">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>{show.title}</h1>
                            <div className="card-movie">
                                <div className="first-info">
                                    <p className="card-genre">
                                        Genre: {show.genre}
                                    </p>
                                    <p className="card-director">
                                        Director: {show.director}
                                    </p>
                                </div>
                                <div className="second-info">
                                    <p className="card-year">Year: {show.year}</p>
                                    <p className="card-ranking">
                                        Rating:
                                        <span id="stars">{show.rating}</span>
                                    </p>
                                </div>
                            </div>

                            <p className="disc">Description: {show.description}</p>
                            <p className="card-category">Seasons: {show.seasons}</p>
                        </div>
                    </div>
                    <div className="card_right">
                        <img src={show.image} alt={show.title} />
                    </div>
                </div>
                {isOwner && (
                    <ul className="noBullet">
                        <li id="center-btn">
                            <Link to={`/tv-shows/${tvShowId}/edit`} id="login-btn">Edit</Link>
                            <button id="login-btn" onClick={showDeleteClickHandler}>Delete</button>
                        </li>
                    </ul>
                )}
            </section>

            <CommentsList comments={optimisticComments} />
            <CommentsCreate
                tvShowId={tvShowId}
                onCreate={commentCreateHandler}
                email={email}
            />
        </>
    );
}
import { useOptimistic, startTransition } from "react"; // Ensure you're importing startTransition
import { v4 as uuid } from 'uuid';
import { useDeleteShow, useShow } from "../../api/tvShowsApi";
import { Link, useNavigate, useParams } from "react-router";
import CommentsList from "../comments/CommentsList";
import CommentsCreate from "../comments/CommentsCreate";
import { useComments, useCreateComment } from "../../api/commentsApi";
import useAuth from "../../hooks/useAuth";

export default function DetailsTvShow() {
    const { tvShowId } = useParams();
    const { show } = useShow(tvShowId);
    const { email, userId, username } = useAuth();
    const { deleteShow } = useDeleteShow();
    const { create } = useCreateComment();
    const navigate = useNavigate();
    const { comments, addComment } = useComments(tvShowId);

    const showDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${show.title} TV-Show?`);

        if (!hasConfirm) {
            return;
        }

        await deleteShow(tvShowId);
        navigate('/tv-shows');
    };

    const commentCreateHandler = async (newComment) => {
        // Server update
        const commentResult = await create(tvShowId, newComment, email);
    
    
        // Transform the commentResult into the expected format for your state
        const transformedComment = {
            ...commentResult, // Spread other fields like _ownerId, tvShowId, etc.
            author: {
                _id: userId,
                email: email,
                username: username,
            }
        };
    
        // Local state update
        addComment(transformedComment);
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

            <CommentsList comments={comments}/>
            <CommentsCreate
                tvShowId={tvShowId}
                onCreate={commentCreateHandler}
                email={email}
            />
        </>
    );
}
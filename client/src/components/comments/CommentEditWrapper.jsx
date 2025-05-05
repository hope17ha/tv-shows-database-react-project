import { useParams } from "react-router";
import { CommentsProvider } from "../../contexts/CommentContext";
import EditCommentPage from "./CommentEdit";

export default function CommentsEditWrapper() {
    const { tvShowId } = useParams();

    return (
        <CommentsProvider tvShowId={tvShowId}>
            <EditCommentPage />
        </CommentsProvider>
    );
}
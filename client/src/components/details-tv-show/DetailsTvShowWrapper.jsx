import { useParams } from "react-router";
import { CommentsProvider } from "../../contexts/CommentContext";
import DetailsTvShow from "./DetailsTvShow";

export default function DetailsTvShowWrapper() {
    const { tvShowId } = useParams();

    return (
        <CommentsProvider tvShowId={tvShowId}>
            <DetailsTvShow />
        </CommentsProvider>
    );
}
import PostCard from './PostCard';
import { formatDate, formatTime } from '../../utils/formatDate';
import { getExcerpt } from '../../utils/getExcerpt';

function PostFeed({ posts, showCategories = true }) {

    const sortedPosts = [...posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return (
        <div className="flex flex-col gap-6">
            {sortedPosts.map((post) => (
                <PostCard
                    key={post.id}
                    type={post.type}
                    title={post.title}
                    content={getExcerpt(post)}
                    author={post.author}
                    date={formatDate(post.createdAt)}
                    time={formatTime(post.createdAt)}
                    categories={post.categories}
                    tags={post.tags}
                    coverImage={post.coverImage}
                    showCoverInFeed={post.showCoverInFeed}
                    showCategories={showCategories}
                />
            ))}
        </div>
    );
}

export default PostFeed;

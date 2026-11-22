import PostCard from '../components/posts/PostCard';
import { posts } from '../data/posts';

function QuockPage() {
    const quocks = posts.filter((post) => post.type === 'quock');

    return (
        <div className="flex flex-col gap-6">
            {quocks.map((post) => (
                <PostCard
                    key={post.id}
                    type={post.type}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    date={post.date}
                    time={post.time}
                    category={post.category}
                    coverImage={post.coverImage}
                    showCoverInFeed={post.showCoverInFeed}
                />
            ))}
        </div>
    );
}

export default QuockPage;

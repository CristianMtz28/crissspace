import PostCard from '../components/posts/PostCard';
import { posts } from '../data/posts';

function HomePage() {

    return (
        <div className="flex flex-col gap-6">
            {posts.map((post) => (
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

export default HomePage;

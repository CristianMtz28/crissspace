import PostFeed from '../components/posts/PostFeed';
import { posts } from '../data/posts';

function HomePage() {
    return <PostFeed posts={posts} />;
}

export default HomePage;
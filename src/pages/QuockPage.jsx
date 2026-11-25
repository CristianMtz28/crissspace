import PostFeed from '../components/posts/PostFeed';
import { posts } from '../data/posts';

function QuockPage() {
    const quocks = posts.filter(
        (post) => post.type === 'quock'
    );

    return <PostFeed posts={quocks} />;
}

export default QuockPage;

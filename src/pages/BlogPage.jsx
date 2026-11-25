import PostFeed from '../components/posts/PostFeed';
import { posts } from '../data/posts';

function BlogPage() {
    const articles = posts.filter(
        (post) => post.type === 'article'
    );

    return <PostFeed posts={articles} />;
}

export default BlogPage;
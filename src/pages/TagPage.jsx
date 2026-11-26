/*Página que renderiza los tags cuando se da click a alguno */

import { useParams } from 'react-router-dom';
import PostFeed from '../components/posts/PostFeed';
import { posts } from '../data/posts';
import { slugify } from '../utils/slugify';

function TagPage() {
    const { tag } = useParams();

    const filteredPosts = posts.filter((post) =>
        post.tags?.some((item) => slugify(item) === tag)
    );

    return <PostFeed posts={filteredPosts} />;
}

export default TagPage;

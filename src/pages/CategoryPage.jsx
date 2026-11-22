/*Código con props para enviar los componentes de las categorías */

import PostCard from '../components/posts/PostCard';
import { posts } from '../data/posts';

function CategoryPage({ category }) {
    const filteredPosts = posts.filter(
        (post) => post.category === category
    );

    return (
        <div className="flex flex-col gap-6">
            {filteredPosts.map((post) => (
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

export default CategoryPage;

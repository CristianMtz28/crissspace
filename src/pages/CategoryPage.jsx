/*Código con props para enviar los componentes de las categorías */

import PostFeed from '../components/posts/PostFeed';
import { posts } from '../data/posts';

function CategoryPage({ category }) {

    const filteredPosts = posts.filter(
        (post) => post.categories.includes(category)
    );

    return <PostFeed posts={filteredPosts} showCategories={false} />;
}

export default CategoryPage;

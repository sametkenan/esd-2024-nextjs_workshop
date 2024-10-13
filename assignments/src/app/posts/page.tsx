import Link from 'next/link';

// Simulated data for posts
const posts = [
    { id: '1', title: 'First Post' },
    { id: '2', title: 'Second Post' },
    { id: '3', title: 'Third Post' },
];

export default function PostsPage() {
    return (
        <div>
            <h1>All Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

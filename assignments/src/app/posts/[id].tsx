import { useRouter } from 'next/router';

interface Post {
    id: string;
    title: string;
    content: string;
}

// Simulated data
const posts: Post[] = [
    { id: '1', title: 'First Post', content: 'This is the first post content.' },
    { id: '2', title: 'Second Post', content: 'This is the second post content.' },
    { id: '3', title: 'Third Post', content: 'This is the third post content.' },
];

export async function getStaticPaths() {
    // Generate paths for all posts
    const paths = posts.map((post) => ({
        params: { id: post.id },
    }));
    return { paths, fallback: false }; // Disable fallback for simplicity
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    // Simulate fetching post data based on id
    const post = posts.find((p) => p.id === params.id);
    
    // Handle case where post is not found
    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
        },
    };
}

const PostPage = ({ post }: { post: Post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostPage;

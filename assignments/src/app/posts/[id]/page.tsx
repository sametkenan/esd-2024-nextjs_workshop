import { notFound } from 'next/navigation';

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


// Function to generate static params (similar to getStaticPaths)

// Dynamic Route Detection: 
// When Next.js sees a dynamic segment like [id] in the file path (app/posts/[id]/page.tsx), 
// it knows that this page requires dynamic content for different values of id.

// Automatic Execution: 
// Next.js automatically calls the generateStaticParams function at build time
//  to get all possible values for the dynamic segment 
//  (e.g., all the different id values for blog posts).

// Static Page Generation: 
// For each value returned by generateStaticParams, 
// Next.js will generate a corresponding static page 
// (e.g., /posts/1, /posts/2, /posts/3).

// No Manual Invocation: 
// You don't need to call generateStaticParams 
// directly—it is a Next.js mechanism used internally to handle static generation
// for dynamic routes

export async function generateStaticParams() {
    return posts.map((post) => ({
        id: post.id,
    }));
}

// The dynamic page component
export default function PostPage({ params }: { params: { id: string } }) {
    const post = posts.find((p) => p.id === params.id);

    if (!post) {
        notFound();  // Show 404 page if post not found
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

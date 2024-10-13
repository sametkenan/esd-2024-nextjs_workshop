//mock data to simulate posts for static Generation Assignemnt
export const posts = [
    { id: '1', title: 'First Post', content: 'This is the first post.' },
    { id: '2', title: 'Second Post', content: 'This is the second post.' },
    { id: '3', title: 'Third Post', content: 'This is the third post.' },
  ];
  
  // Function to get a post by its ID
  export const getPostById = (id: string) => posts.find((post) => post.id === id);
  
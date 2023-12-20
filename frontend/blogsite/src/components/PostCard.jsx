import { useState, useEffect } from 'react';

const  PostCards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/data')
      .then((response) => response.json())
      .then((fetchedPosts) => setPosts(fetchedPosts));
  }, []);

  // ... render PostCards using the fetched posts data
  return (
    <div className="container mx-auto"> {/* Add some basic styling for spacing */}
      {posts.length > 0 ? ( // Check if posts are fetched before rendering
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
             <img className="w-full" src={url} alt={title} />
             <div className="p-4">
               <h5 className="text-xl font-semibold">{title}</h5>
               <p className="text-gray-700">{excerpt}</p>
               <a href={`/posts/${slug}`} className="text-blue-500 hover:underline">Read More</a>
             </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}
export default PostCards;
// <PostCard key={post.id} {...post} />
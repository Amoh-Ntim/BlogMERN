import { useState, useEffect } from 'react';
import axios from 'axios';
// import Spinner from 'react-loading';

const  PostCard = () => {
  const [posts, setPosts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    setError(null);
  
    axios.get('http://localhost:5000/data') // Adjust the URL to your API endpoint
      .then(response => {
        setPosts(response.data);
        setIsLoading()
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Empty dependency array to fetch data only once
  

  // ... render PostCards using the fetched posts data
  return (
      <div>
        {isLoading && <div className="animate-ping flex justify-center items-center w-16 h-16 m-8 rounded-full bg-sky-600"></div>}
        {error && <p>Error: {error.message}</p>}
        {posts.length > 0 && (
          <ul>
            {posts.map(post => (
              <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full" src={post.url} alt={post.title} />
              <div className="p-4">
                  <h5 className="text-xl font-semibold">{post.title}</h5>
                  <p className="text-gray-700">{post.publishYear}</p> <a href={`/posts/${post._id}`} className="text-blue-500 hover:underline">Read More</a>
              </div>
              </div> 
            ))}
          </ul>
        )}
      </div>
    );
};    

export default PostCard;
// <PostCard key={post.id} {...post} />


// <div className="container mx-auto">
// {isLoading ? (
//   <Spinner/>
// ) : (
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//     {posts.length > 0 ? (
//       posts.map((post) => (
//         <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden">
//   <img className="w-full" src={post.url} alt={post.title} />
//   <div className="p-4">
//       <h5 className="text-xl font-semibold">{post.title}</h5>
//       <p className="text-gray-700">{post.publishYear}</p> <a href={`/posts/${post._id}`} className="text-blue-500 hover:underline">Read More</a>
//   </div>
// </div> 
//       ))
//     ) : (
//       <div className="animate-ping flex justify-center items-center w-16 h-16 m-8 rounded-full bg-sky-600"></div>
//     )}
//   </div>
// )}
// </div>
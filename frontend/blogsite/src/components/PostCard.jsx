import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Empty dependency array to fetch data only once
  
  return (
      <div>
        {isLoading && <div className="animate-ping flex justify-center items-center w-16 h-16 m-8 rounded-full bg-sky-600"></div>}
        {error && <p>Error: {error.message}</p>}
        {posts.length > 0 && (
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full" src={post.url} alt={post.title} />
              <div className="p-4">
                  <h5 className="text-xl font-semibold">{post.title}</h5>
                  <p className="text-gray-700">{post.publishYear}</p> <a href={`/posts/${post._id}`} className="text-blue-500 hover:underline">Read More</a>
              </div>
              <div className='mb-8'>
                  <Link to={`/edit/${post._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Modify Post
                  </button>
                  </Link>
              </div>
              <Link to={`/delete/${post._id}`}>
              <button className='mb-8'>Delete</button>
              </Link>
              </div> 
            ))}
            </div>
        )}
      </div>
    );
};    

export default PostCard;

// PostContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const PostContext = createContext();

export const PostProvider = ({ children}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API
    axios.get('http://localhost:5000/data')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  const createPost = async (newPostData) => {
    try {
      const response = await axios.post('http://localhost:5000/data', newPostData);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PostContext.Provider value={{ posts, createPost }}>
      {children}
    </PostContext.Provider>
  );
};
PostProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

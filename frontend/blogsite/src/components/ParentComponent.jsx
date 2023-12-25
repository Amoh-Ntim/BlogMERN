import { useState } from "react";
import axios from "axios";
import PostForm from "./Postform";
import PostCard from "./PostCard";

const ParentComponent = () => {
    const [posts, setPosts] = useState([]);
  
    const updatePosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching updated posts:', error);
      }
    };
  
    return (
      <div>
        <PostForm updatePosts={updatePosts} />
        <PostCard posts={posts} />
      </div>
    );
  };
  

export default ParentComponent

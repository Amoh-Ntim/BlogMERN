import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleDelete = async () => {
    setIsLoading(true);
    
    try {
      await axios.delete(`http://localhost:5000/data/${id}`);
      setIsLoading(false);
      navigate('/postcards');
      // Handle post-deletion logic here (e.g., remove post from state)
    } catch (error) {
      setIsLoading(false);
      console.error('Error deleting post:', error);
    }
  };
 
  return (
    <button onClick={handleDelete} disabled={isLoading}>
    {isLoading ? 'Deleting...' : 'Delete Post'}
  </button>
);
};

export default DeleteCard

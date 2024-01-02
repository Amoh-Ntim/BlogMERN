import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';

const DeleteCard = () => {
    const { id } = useParams
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
    const handleDelete = async () => {
        try {
        await axios.delete(`http://localhost:5000/data/${id}`);
        } 
        catch (error) {
          setLoading(false);
          console.error(error);
          // Handle error appropriately
        }
      };
    
  return (
    <div>
      {loading && <div className="animate-ping flex justify-center items-center w-16 h-16 m-8 rounded-full bg-sky-600"></div>}
      <div>Are you sure you want to delete this?</div>
      <button onClick={handleOpen}>Delete</button>
      <Modal isOpen={isOpen} onRequestClose={handleClose} contentLabel="My Modal">
        <h2>Delete Post</h2>
        <button onClick={handleDelete}>Close</button>
      </Modal>
    </div>
  )
}

export default DeleteCard

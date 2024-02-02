import { useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


const EditCard = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [url, setUrl] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const { id } = useParams();
  
    const handleEdit = async () => {
      setError(null);
  
      const data = {
        title,
        author,
        publishYear,
        url,
      };
  
      setLoading(true);
      const response = await axios.put(`http://localhost:5000/data/${id}`, data)
        .then(() => {
          setLoading(false);
          console.log(response.data);
        })
        .catch((error) => {
          setError(error.message);
          console.error('Error during form submission:', error);
        });
    };
  return (
    <form className="w-full max-w-md mx-auto p-6">
    {loading && <div className="animate-ping flex justify-center items-center w-16 h-16 m-8 rounded-full bg-sky-600"></div>}
    {error && <div className="error-message">{error}</div>}
      <div className="mb-4">
        <label htmlFor="url" className="block text-gray-700 font-bold mb-2">Url</label>
        <input
          type="text"
          id="url"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Author</label>
        <input
          type="text"
          id="author"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="publishYear" className="block text-gray-700 font-bold mb-2">PublishYear</label>
        <input
          type="text"
          id="publishYear"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
        />
      </div>
      
      <Link to="/postcards">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleEdit}>
        Edit Post
      </button>
      </Link>
    </form>
  );
};

EditCard.propTypes = {
  updatePosts: PropTypes.func.isRequired,
};
export default EditCard;

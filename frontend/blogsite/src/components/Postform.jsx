import { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [url, setUrl] = useState('');

  // ... other imports


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/posts', { // Assuming your server endpoint is '/api/posts'
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          author,
          publishYear,
          url,
          // ... other fields
        }),
      });

      const data = await response.json();

      if (data.message === 'Post created successfully!') {
        // Clear form fields
        setTitle('');
        setAuthor('');
        // ... clear other fields

        // Display a more informative success message
        alert('Your post has been created successfully!');

        // Optionally redirect to a different page
        // window.location.href = '/posts';
      } else {
        // Handle unexpected server response
        console.error('Unexpected response from server:', data);
        alert('An error occurred while creating the post. Please try again.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during form submission:', error);
      alert('An error occurred. Please check your network connection and try again.');
    }
  };


  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6">
      <div className="mb-4">
        <label htmlFor="url" className="block text-gray-700 font-bold mb-2">Url</label>
        <input
          type="text"
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      {/*  */}
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
      {/*  */}
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
      {/*  */}
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
      {/* ...similar fields for excerpt and content... */}

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
};

export default PostForm;

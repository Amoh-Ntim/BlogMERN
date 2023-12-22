// // Parent component
// import { useEffect, useState } from 'react';
// import PostCard from './PostCard';
// import axios from 'axios';

// const Postlist = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/data') // Adjust the URL
//       .then(response => setPosts(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {/* ... other content ... */}
//       <PostCard posts={posts} />
//     </div>
//   );
// };
// export default Postlist;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import PostForm from './components/Postform'
import PostCard from './components/PostCard';
import EditCard from './components/EditCard';
import DeleteCard from './components/DeleteCard';

function App() {

  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<PostForm/>} />
  <Route path="/postcards" element={<PostCard />} />
  <Route path="/edit/:id" element={<EditCard />} />
  <Route path="/delete/:id" element={<DeleteCard />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App

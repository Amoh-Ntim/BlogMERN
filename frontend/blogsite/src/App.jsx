import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import PostForm from './components/Postform'
import PostCard from './components/PostCard';
import EditCard from './components/EditCard';

function App() {

  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<PostForm/>} />
  <Route path="/postcards" element={<PostCard />} />
  <Route path="/edit/:id" element={<EditCard />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App

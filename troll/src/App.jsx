import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Message1 from './pages/message1/Message1'
import Message2 from './pages/message2/Message2'
import Message3 from './pages/message3/Message3'
import Message4 from './pages/message4/Message4'
import Message5 from './pages/message5/Message5'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        
        <Route path="/message1" element={<Message1/>}></Route>
        <Route path="/message2" element={<Message2/>}></Route>
        <Route path="/Message3" element={<Message3/>}></Route>
        <Route path="/message4" element={<Message4/>}></Route>
        <Route path="/Message5" element={<Message5/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

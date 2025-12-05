import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Gift1 from './pages/gift1/Gift1'
import Gift2 from './pages/gift2/Gift2'
import Gift3 from './pages/gift3/Gift3'
import Gift4 from './pages/gift4/Gift4'
import Gift5 from './pages/gift5/Gift5'
import Gift6 from './pages/gift6/Gift6'
import Gift7 from './pages/gift7/Gift7'
import Gift8 from './pages/gift8/Gift8'
import Message1 from './pages/message1/Message1'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/gift1" element={<Gift1/>}></Route>
        <Route path="/gift2" element={<Gift2/>}></Route>
        <Route path="/gift3" element={<Gift3/>}></Route>
        <Route path="/gift4" element={<Gift4/>}></Route>
        <Route path="/gift5" element={<Gift5/>}></Route>
        <Route path="/gift6" element={<Gift6/>}></Route>
        <Route path="/gift7" element={<Gift7/>}></Route>
        <Route path="/gift8" element={<Gift8/>}></Route>
        
        <Route path="/message1" element={<Message1/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

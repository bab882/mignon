import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Message1 from './pages/message1/Message1'
import Message2 from './pages/message2/Message2'
import Message3 from './pages/message3/Message3'
import Message4 from './pages/message4/Message4'
import Message5 from './pages/message5/Message5'
import Message6 from './pages/message6/Message6'
import Message7 from './pages/message7/Message7'
import Message8 from './pages/message8/Message8'
import Message9 from './pages/message9/Message9'
import Message10 from './pages/message10/Message10'
import Message11 from './pages/message11/Message11'
import Message12 from './pages/message12/Message12'
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
        <Route path="/Message6" element={<Message6/>}></Route>
        <Route path="/Message7" element={<Message7/>}></Route>
        <Route path="/Message8" element={<Message8/>}></Route>
        <Route path="/Message9" element={<Message9/>}></Route>
        <Route path="/Message10" element={<Message10/>}></Route>
        <Route path="/Message11" element={<Message11/>}></Route>
        <Route path="/Message12" element={<Message12/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

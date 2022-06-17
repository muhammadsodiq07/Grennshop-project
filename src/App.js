import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Blogs from './components/Blogs/Blogs'
import Care from './components/Care/Care'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/care" element={<Care />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  )
}

export default App

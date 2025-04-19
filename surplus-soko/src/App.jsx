import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing'
import Signup from './Signup'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
    
    </Routes>
  )
}

export default App


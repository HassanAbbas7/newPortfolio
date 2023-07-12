import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Index from './components/Index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
          <Route path="/" exact element={<Index />} />
        </Routes>
    </>
  )
}

export default App

import React, { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Post from './components/Post'
import Signin from './components/Signin'


function App() {

  const [showSignIn, setShowSignIn] = useState(false); // State to control the visibility

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };
  
  return (
    <>
    <Header onToggle={toggleSignIn} />
    <Banner/>
    <Post/>
    {showSignIn && <Signin onClose={() => setShowSignIn(false)} />}
    </>
  )
}

export default App

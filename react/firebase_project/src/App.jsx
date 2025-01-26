import { getAuth } from 'firebase/auth'
import React from 'react'
import { app } from './firebaseConfig';
import Signup from './Components/Signup';
import { Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';

const App = () => {
  const auth = getAuth(app);
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  )
}

export default App
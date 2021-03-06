import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

import Login from './components/Login'
import Home from './container/Home'

const App = () => {
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  })

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App
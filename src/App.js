import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { gapi } from 'gapi-script'
import HomePage from "./page/HomePage";
import Login from "./component/login";


import './App.css'

const clientID = "713497724686-adsqr18kc5kr48urt7eg5uv2opev68l1.apps.googleusercontent.com";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleLogin = (res) => {
     
    setIsLoggedIn(true);
    if (isLoggedIn === true) { 
      navigate('/home');

    }
    console.log(isLoggedIn);

    console.log('Google login success:', res);
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: ""
      });
    }
    gapi.load('client:auth2', start);
  });

  return (
    
    <Routes>
      <Route
        path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/home" element={{ isLoggedIn } ? <HomePage/> : <Navigate to="/login" />} />
    </Routes>

  );
}

export default App;

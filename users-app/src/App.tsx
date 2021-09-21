import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <>
    <BrowserRouter>
      <AuthContextProvider>
          <UserContextProvider>
            <Main/>
          </UserContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;

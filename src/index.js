import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import { ListContextProvider } from './context/listContext/ListContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider> 
        <ListContextProvider>    
          <Router>
            <Routes>          
            <Route path='/*' element={<App />} />          
            </Routes>
        </Router>
      </ListContextProvider> 
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);



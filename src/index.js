import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import DetailPost from "./pages/DetailPost"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Context */}
    {/* Manejo de estados */}
    {/* React-query, useSWR */}
    <BrowserRouter>
      {/* hijos */}
      <Routes>
        {/* algo adentro */}
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detailpost" element={<DetailPost />} />
        </ Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

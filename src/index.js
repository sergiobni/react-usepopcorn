import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={['Fatal', 'Decepcionante', 'Buena', 'Muy buena', 'Excepcional']}
      defaultRating={3}
    />
    <StarRating maxRating={10} size={20} color={'green'} /> */}
  </React.StrictMode>
);

import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Loading.css'; // Import the CSS file

export const Loader = () => {
  return <CircularProgress />;
}




export const Loading = () => {
  return (
    <div className="loading">
      I'm working on it<span className="dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </div>
  );
};

export default Loading;


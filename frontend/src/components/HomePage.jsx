import React from 'react';
import './HomePage.css';
function HomePage({ navigateToPage }) {
  return (
    <div className="relative homepage">
      <nav className="absolute top-4 right-4 navigation">
        <div className="flex">
          <a href="#home" className="nav-link" onClick={() => navigateToPage('home')}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={() => navigateToPage('about')}>
            About
          </a>
          <a href="#browse" className="nav-link" onClick={() => navigateToPage('browse')}>
            Browse
          </a>
          <a href="#try-now" className="nav-link" onClick={() => navigateToPage('try-now')}>
            Try Now
          </a>
        </div>
      </nav>

      <h1 className="title">
        Emotion Echo
      </h1>

      <div className="main-content">
        <p className="main-text">Listen to Your Mood 🎧</p>
        <a href="#try-now" className="explore-link" onClick={() => navigateToPage('try-now')}>
          Explore More
        </a>
      </div>
    </div>
  );
}

export default HomePage;

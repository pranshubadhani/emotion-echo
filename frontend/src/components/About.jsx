import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about'>
        <div className="about-container">
        <h2>About Our Website</h2>
        <p>
            Welcome to our music recommendation platform! We strive to provide you with a personalized music
            experience based on your emotions. Our advanced emotion detection technology analyzes your facial
            expressions to determine your mood and recommends songs that match your current emotional state.
        </p>
        <p>
            Whether you're feeling happy, sad, or somewhere in between, we've got a playlist for you. Simply click
            the "Try Now" button to experience the magic of our emotion-driven music recommendations.
        </p>
        <p>
            Thank you for choosing our platform. We hope you enjoy the music and discover new songs that resonate
            with your emotions.
        </p>
        </div>
    </div>
  );
};

export default About;

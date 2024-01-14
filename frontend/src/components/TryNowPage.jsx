// TryNowPage.jsx
import React, { useState } from 'react';
import './TryNowPage.css';
import EmotionDetection from './EmotionDetection';
import { fetchRecommendedSongs } from '../api';

function TryNowPage() {
  const [recommendedSongs, setRecommendedSongs] = useState([]);
  const [detectedMood, setDetectedMood] = useState('');

const handleGetSongsClick = async (mood) => {
  try {
    console.log('Clicked on Get Songs button');
    console.log('Detected Mood:', mood);

    // Make an API request to fetch recommended songs based on mood
    const response = await fetchRecommendedSongs(mood);

    // Check if response is defined
    if (response) {
      console.log('Response from server:', response);
      setRecommendedSongs(response);
    } else {
      // If response is not as expected, show a default message or handle accordingly
      console.error('Unexpected response format:', response);
      // You can set default songs or handle the situation in another way
      setRecommendedSongs(getRandomSongs());
    }
  } catch (error) {
    console.error('Error fetching recommended songs:', error);
    // Handle the error, e.g., set default songs or display an error message
    setRecommendedSongs(getRandomSongs());
  }
};

  const getRandomSongs = () => {
    return [
      { title: 'Random Song 1', artist: 'Random Artist 1' },
      { title: 'Random Song 2', artist: 'Random Artist 2' },
      { title: 'Random Song 3', artist: 'Random Artist 3' },
    ];
  };

  return (
    <div className="try-now-page">
      {/* Emotion detection component */}
      <EmotionDetection onMoodDetected={setDetectedMood} />

      {/* Get songs button */}
      <button className="detect-mood-button" onClick={() => handleGetSongsClick(detectedMood)}>
        Get songs
      </button>

      {/* Display recommended songs */}
      {recommendedSongs && recommendedSongs.length > 0 && (
        <div className="recommended-songs">
          <h1 >Recommended Songs</h1>
          <ul style={{ height: '500px', overflow: 'auto' }}>
            {recommendedSongs.map((song, index) => (
              <div>
              <a
                href={song.link}
                key={index}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'yellow' , textDecoration: 'none', fontSize: '20px' }}
              >
                {song.title} - {song.artist}
              </a>
            </div>
            

            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TryNowPage;

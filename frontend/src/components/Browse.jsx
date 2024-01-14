// Browse.jsx

import React, { useState } from 'react';
import './Browse.css'; // Import the corresponding CSS file

function Browse() {
  // Example music data
  const musicList = [
    { title: "Happy", artist: 'Pharrell Williams', mood: 'Happy', link: 'https://youtu.be/ZbZSe6N_BXs?si=T5c6nkQ87pPAZ-ie' },
    { title: "Someone Like You", artist: 'Adele', mood: 'Sad', link: 'https://youtu.be/hLQl3WQQoQ0?si=T5c6nkQ87pPAZ-ie' },
    { title: "Can't Stop the Feeling!", artist: 'Justin Timberlake', mood: 'Surprise', link: 'https://youtu.be/ru0K8uYEZWw?si=T5c6nkQ87pPAZ-ie' },
    { title: "Thriller", artist: 'Michael Jackson', mood: 'Fear', link: 'https://youtu.be/sOnqjkJTMaA?si=T5c6nkQ87pPAZ-ie' },
    { title: "The Less I Know The Better", artist: 'Tame Impala', mood: 'Neutral', link: 'https://youtu.be/sBzrzS1Ag_g?si=T5c6nkQ87pPAZ-ie' },
    { title: "Shut Up and Dance", artist: 'WALK THE MOON', mood: 'Happy', link: 'https://youtu.be/6JCLY0Rlx6Q?si=T5c6nkQ87pPAZ-ie' },
    { title: "Someone You Loved", artist: 'Lewis Capaldi', mood: 'Sad', link: 'https://youtu.be/bCuhuePlP8o?si=T5c6nkQ87pPAZ-ie' },
    { title: "Don't Stop Believin'", artist: 'Journey', mood: 'Surprise', link: 'https://youtu.be/1k8craCGpgs?si=T5c6nkQ87pPAZ-ie' },
    { title: "Sweet Child o' Mine", artist: 'Guns N Roses', mood: 'Fear', link: 'https://youtu.be/1w7OgIMMRc4?si=T5c6nkQ87pPAZ-ie' },
    { title: "Lost on You", artist: 'LP', mood: 'Neutral', link: 'https://youtu.be/wDjeBNv6ip0?si=T5c6nkQ87pPAZ-ie' },
    { title: "Happy Together", artist: 'The Turtles', mood: 'Happy', link: 'https://youtu.be/mRCe5L1imxg?si=T5c6nkQ87pPAZ-ie' },
    { title: "Back to Black", artist: 'Amy Winehouse', mood: 'Sad', link: 'https://youtu.be/TJAfLE39ZZ8?si=T5c6nkQ87pPAZ-ie' },
    { title: "Shake It Off", artist: 'Taylor Swift', mood: 'Surprise', link: 'https://youtu.be/nfWlot6h_JM?si=T5c6nkQ87pPAZ-ie' },
    { title: "I Will Always Love You", artist: 'Whitney Houston', mood: 'Fear', link: 'https://youtu.be/3JWTaaS7LdU?si=T5c6nkQ87pPAZ-ie' },
    { title: "Ho Hey", artist: 'The Lumineers', mood: 'Neutral', link: 'https://youtu.be/zvCBSSwgtg4?si=T5c6nkQ87pPAZ-ie' },
    { title: "Happy Birthday", artist: 'Stevie Wonder', mood: 'Happy', link: 'https://youtu.be/inS9gAgSENE?si=T5c6nkQ87pPAZ-ie' },
    { title: "Everybody Hurts", artist: 'R.E.M.', mood: 'Sad', link: 'https://youtu.be/5rOiW_xY-kc?si=T5c6nkQ87pPAZ-ie' },
    { title: "Twist and Shout", artist: 'The Beatles', mood: 'Surprise', link: 'https://youtu.be/znf1zrZ2Hrw?si=T5c6nkQ87pPAZ-ie' },
    { title: "Zombie", artist: 'The Cranberries', mood: 'Fear', link: 'https://youtu.be/6Ejga4kJUts?si=T5c6nkQ87pPAZ-ie' },
    { title: "Lost on You", artist: 'LP', mood: 'Neutral', link: 'https://youtu.be/wDjeBNv6ip0?si=T5c6nkQ87pPAZ-ie' },
    { title: "Best Day of My Life", artist: 'American Authors', mood: 'Happy', link: 'https://youtu.be/Y66j_BUCBMY?si=T5c6nkQ87pPAZ-ie' },
    { title: "Someone You Loved", artist: 'Lewis Capaldi', mood: 'Sad', link: 'https://youtu.be/bCuhuePlP8o?si=T5c6nkQ87pPAZ-ie' },
    { title: "Pumped Up Kicks", artist: 'Foster The People', mood: 'Surprise', link: 'https://youtu.be/SDTZ7iX4vTQ?si=T5c6nkQ87pPAZ-ie' },
    { title: "Sweet Child o' Mine", artist: 'Guns N Roses', mood: 'Fear', link: 'https://youtu.be/1w7OgIMMRc4?si=T5c6nkQ87pPAZ-ie' },
    { title: "Lost on You", artist: 'LP', mood: 'Neutral', link: 'https://youtu.be/wDjeBNv6ip0?si=T5c6nkQ87pPAZ-ie' },
    { title: "I Gotta Feeling", artist: 'The Black Eyed Peas', mood: 'Happy', link: 'https://youtu.be/uSD4vsh1zDA?si=T5c6nkQ87pPAZ-ie' },
    { title: "Back to Black", artist: 'Amy Winehouse', mood: 'Sad', link: 'https://youtu.be/TJAfLE39ZZ8?si=T5c6nkQ87pPAZ-ie' },
    { title: "Can't Stop the Feeling!", artist: 'Justin Timberlake', mood: 'Surprise', link: 'https://youtu.be/ru0K8uYEZWw?si=T5c6nkQ87pPAZ-ie' },
    { title: "Thriller", artist: 'Michael Jackson', mood: 'Fear', link: 'https://youtu.be/sOnqjkJTMaA?si=T5c6nkQ87pPAZ-ie' },
    { title: "Wish You Were Here", artist: 'Pink Floyd', mood: 'Neutral', link: 'https://youtu.be/DPL_SV3n7IU?si=T5c6nkQ87pPAZ-ie' },
    { title: "Happy Together", artist: 'The Turtles', mood: 'Happy', link: 'https://youtu.be/mRCe5L1imxg?si=T5c6nkQ87pPAZ-ie' },
    { title: "My Immortal", artist: 'Evanescence', mood: 'Sad', link: 'https://youtu.be/5anLPw0Efmo?si=T5c6nkQ87pPAZ-ie' },
    { title: "I Gotta Feeling", artist: 'The Black Eyed Peas', mood: 'Surprise', link: 'https://youtu.be/uSD4vsh1zDA?si=T5c6nkQ87pPAZ-ie' },
    { title: "Disturbia", artist: 'Rihanna', mood: 'Fear', link: 'https://youtu.be/E1mU6h4Xdxc?si=T5c6nkQ87pPAZ-ie' },
    { title: "Perfect", artist: 'Ed Sheeran', mood: 'Neutral', link: 'https://youtu.be/2Vv-BfVoq4g?si=T5c6nkQ87pPAZ-ie' },
    { title: "Best Day of My Life", artist: 'American Authors', mood: 'Happy', link: 'https://youtu.be/Y66j_BUCBMY?si=T5c6nkQ87pPAZ-ie' },
    { title: "Stay", artist: 'Rihanna ft. Mikky Ekko', mood: 'Sad', link: 'https://youtu.be/JF8BRvqGCNs?si=T5c6nkQ87pPAZ-ie' },
    { title: "Surfin' U.S.A.", artist: 'The Beach Boys', mood: 'Surprise', link: 'https://youtu.be/2s4slliAtQU?si=T5c6nkQ87pPAZ-ie' },
    { title: "Highway to Hell", artist: 'AC/DC', mood: 'Fear', link: 'https://youtu.be/l482T0yNkeo?si=T5c6nkQ87pPAZ-ie' },
    { title: "Budapest", artist: 'George Ezra', mood: 'Neutral', link: 'https://youtu.be/0dP6vX8k7Kw?si=T5c6nkQ87pPAZ-ie' },
    { title: "Happy", artist: 'Pharrell Williams', mood: 'Happy', link: 'https://youtu.be/ZbZSe6N_BXs?si=T5c6nkQ87pPAZ-ie' },
    { title: "Fix You", artist: 'Coldplay', mood: 'Sad', link: 'https://youtu.be/k4V3Mo61fJM?si=T5c6nkQ87pPAZ-ie' },
    { title: "Can't Stop the Feeling!", artist: 'Justin Timberlake', mood: 'Surprise', link: 'https://youtu.be/ru0K8uYEZWw?si=T5c6nkQ87pPAZ-ie' },
    { title: "Somebody to Love", artist: 'Queen', mood: 'Fear', link: 'https://youtu.be/kijpcUv-b8M?si=T5c6nkQ87pPAZ-ie' },
    { title: "Perfect", artist: 'Ed Sheeran', mood: 'Neutral', link: 'https://youtu.be/2Vv-BfVoq4g?si=T5c6nkQ87pPAZ-ie' },
    // Add more music data entries
  ];
  

  // Example filter options
  const moodOptions = ['All', 'Happy', 'Sad', 'Surprise' ,'Fear', 'Neutral'];

  // State to store the selected mood filter
  const [selectedMood, setSelectedMood] = useState('All');

  // Function to handle mood filter change
  const handleMoodFilterChange = (e) => {
    setSelectedMood(e.target.value);
  };

  // Function to render music listings based on the selected mood filter
  const renderMusicListings = () => {
    return musicList
      .filter((music) => selectedMood === 'All' || music.mood === selectedMood)
      .map((music, index) => (
        <div key={index} className="music-listing">
          {/* Make the song title a clickable link */}
          <a
            href={music.link}
            target="_blank"
            rel="noreferrer"
            className="song-link"
          >
            <h3>{music.title}</h3>
          </a>
          <p>{music.artist}</p>
          <p>Mood: {music.mood}</p>
        </div>
      ));
  };
  

  return (
    <div className="browse-container">
      <h2 className="browse-title">Browse Music</h2>

      {/* Mood filter */}
      <select className="mood-filter" value={selectedMood} onChange={handleMoodFilterChange}>
        {moodOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Music listings based on the selected mood filter */}
      <div className="music-listings">{renderMusicListings()}</div>
    </div>
  );
}

export default Browse;

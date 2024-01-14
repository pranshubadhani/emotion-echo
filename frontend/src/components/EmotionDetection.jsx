// EmotionDetection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { startEmotionDetection } from './emotionDetectionLogic';

const EmotionDetection = ({ onMoodDetected }) => {
  const videoRef = useRef();
  const [displayedMood, setDisplayedMood] = useState('Unknown');

  useEffect(() => {
    const initializeEmotionDetection = async () => {
      try {
        if (videoRef.current) {
          const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
          startEmotionDetection(videoRef.current, handleMoodUpdate);
        } else {
          console.error('Video element not found.');
        }
      } catch (error) {
        console.error('Error during emotion detection:', error);
      }
    };

    const handleMoodUpdate = (mood) => {
      setDisplayedMood(mood);
      onMoodDetected(mood);
    };

    initializeEmotionDetection();

    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();

          tracks.forEach((track) => {
            track.stop();
          });
        }
        videoRef.current.srcObject = null;
      }
    };
  }, [onMoodDetected]);

  return (
    <div>
      <video ref={videoRef} autoPlay muted />
      <p id="mood-display">Current Mood: {displayedMood}</p>
    </div>
  );
};

export default EmotionDetection;

// frontend/src/api.js
import axios from 'axios';

const BASE_URL = "https://emotion-echo-backend.vercel.app";

export const fetchRecommendedSongs = async (mood) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/recommended-songs?mood=${mood}`);
    return response.data.data; // Access the 'data' property of the response
  } catch (error) {
    console.error('Error fetching recommended songs:', error);
    throw error;
  }
};

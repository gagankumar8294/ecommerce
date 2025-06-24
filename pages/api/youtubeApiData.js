// pages/api/videos.js
import axios from 'axios';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems`,
      {
        params: {
          part: 'snippet',
          maxResults: 10,
          playlistId: PLAYLIST_ID,
          key: YOUTUBE_API_KEY,
        },
      }
    );

    res.status(200).json(response.data.items);
  } catch (error) {
    console.error('Failed to fetch YouTube videos:', error.message);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
}

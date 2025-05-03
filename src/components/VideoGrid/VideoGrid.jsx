// src/components/VideoGrid/VideoGrid.js
import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './VideoGrid.css';

const VideoGrid = ({ videos }) => {
  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
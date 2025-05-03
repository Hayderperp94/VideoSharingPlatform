// src/components/VideoCard/VideoCard.js
import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
      <div className="video-details">
        <h3>{video.title}</h3>
        <p>{video.channel}</p>
        <p>{video.views} views • {video.time}</p>
      </div>
    </div>
  );
};

export default VideoCard;
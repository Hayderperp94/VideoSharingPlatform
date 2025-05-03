// src/pages/HomePage/HomePage.js
import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import VideoGrid from '../../components/VideoGrid/VideoGrid';
import FilterBar from '../../components/FilterBar/FilterBar';
import './HomePage.css';

const HomePage = () => {
  const videos = [
    { title: 'Tech n9ne running out of time', channel: 'EvilElward', views: '38K', time: '13 years ago', thumbnail: 'video1-thumbnail.png' },
    { title: 'Tupac "Who Shot Ya" Prison Scene | All Eyez on Me (2017) | Movie Clip 4K', channel: 'VVS Films', views: '723K', time: '1 year ago', thumbnail: 'video2-thumbnail.png' },
    { title: 'Eminem - Habits (Rhyme Scheme)', channel: 'Prime Scheme', views: '102K', time: '8 months ago', thumbnail: 'video3-thumbnail.png' },
    // ... more videos
  ];

  const filters = ['All', 'Music', 'Interscope Records', 'Mixes', 'Hip hop', 'Alternative Hip Hop', 'G-Funk', 'Live', 'Podcasts', 'Freestyle Rap', 'Gaming', 'Disses', 'Arabic'];

  return (
    <div className="home-page">
      <Header />
      <div className="home-content">
        <Sidebar />
        <main className="main-content">
          <FilterBar filters={filters} />
          <VideoGrid videos={videos} />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
import { useState } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Video, Search, NavBar } from './pages/index';
// import { Home, Channel, Video, Search, NavBar } from './pages/index';

// -----------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          {/* <Route path="/channel/:id" element={<Channel />} /> */}
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

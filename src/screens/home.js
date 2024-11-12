import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Trending from './trending'
import Feed from './feed'
import Player from './player'
import Favorites from './favorites'
import Library from './library'

export default function Home() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </Router>
  )
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Feed,
  VideoDetail,
  SearchFeed,
  ChannelDetail,
} from "./components";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
};

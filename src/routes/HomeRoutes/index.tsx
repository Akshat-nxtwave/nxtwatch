import { lazy } from "react";

import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import Home from "../Home";
import AuthHandler from "../AuthHandler";
import TrafficLight from "../TrafficLight";
const CategoryVideos = lazy(() => import("../CategoryVideos"));
const VideoPage = lazy(() => import("../VideoPage"));
const NoRouteFound = lazy(() => import("../NoRouteFound"));

const HomeRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthHandler />}>
        <Route path="/" element={<Home />} />
        <Route path="/nxtwatch" index element={<Home />} />
        <Route path="/trending" element={<CategoryVideos />} />
        <Route path="/gaming" element={<CategoryVideos />} />
        <Route path="/saved-videos" element={<CategoryVideos />} />
        <Route path="/videos/:id" element={<VideoPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/traffic-light" element={<TrafficLight />} />
      <Route path="*" element={<NoRouteFound />} />
    </Routes>
  );
};

export default HomeRoutes;

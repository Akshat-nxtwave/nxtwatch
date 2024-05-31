import { lazy } from "react";

import { Routes, Route } from "react-router-dom";
import Login from "../../components/Login";
import Home from "../../components/Home";
import AuthHandler from "../../components/AuthHandler";
import TrafficLight from '../../components/TrafficLight';
const CategoryVideos = lazy(() => import('../../components/CategoryVideos'));
const VideoPage = lazy(() => import('../../components/VideoPage'));
const NoRouteFound = lazy(()=>import('../../components/NoRouteFound'));

const HomeRoutes = ()=>{

    return (<Routes>
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
      </Routes>)

}

export default HomeRoutes
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import {
  TopicsPageLayout,
  TopicsPage,
  TopicsCodeDetailsPage,
} from "../pages/topics";
import { NotFoundPage } from "../pages";

const TopicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TopicsPageLayout />}>
        <Route path="/" element={<TopicsPage />} />
        <Route path="/:id" element={<TopicsCodeDetailsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default TopicRoutes;

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  HomePage,
  CodeDetailsPage,
  CodeContributePage,
  CodeUploadPage,
  DocumentationPage,
  NotFoundPage,
  AddDiscussionPage,
  DiscussionDetailsPage,
} from "../pages";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileRoutes from "./ProfileRoutes";
import TopicRoutes from "./TopicRoutes";

const RootRoutes = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/codes" element={<CodeUploadPage />} />
        <Route path="/codes/:id" element={<CodeDetailsPage />} />
        <Route path="/codes/:id/contribute" element={<CodeContributePage />} />
        <Route path="/discussions" element={<AddDiscussionPage />} />
        <Route path="/discussions/:id" element={<DiscussionDetailsPage />} />
        <Route path="/upload" element={<CodeUploadPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile/*" element={<ProfileRoutes />} />
        <Route path="/topics/*" element={<TopicRoutes />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="*" exact={true} element={<NotFoundPage />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default RootRoutes;

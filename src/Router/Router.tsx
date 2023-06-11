import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Client/HomePage";
import LayoutClient from "../components/layout/LayoutClient";
import LayoutAdmin from "../components/layout/LayoutAdmin";
import EditAboutPage from "../pages/Admin/about/EditAboutPage";
import AdminProjectPage from "../pages/Admin/project/AdminProjectPage";
import AddProjectPage from "../pages/Admin/project/AddProjectPage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index path="/admin/about" element={<EditAboutPage />} />
        <Route path="/admin/projects" element={<AdminProjectPage />} />
        <Route path="/admin/project/add" element={<AddProjectPage />} />
        <Route path="/admin/project/:id/edit" element={<AddProjectPage />} />
      </Route>
    </Routes>
  );
};

export default Router;

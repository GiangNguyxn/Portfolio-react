import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Contact from "../contact/Contact";

const LayoutClient = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Contact />
    </>
  );
};

export default LayoutClient;

import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar";
import Search from "../Search";

export default function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

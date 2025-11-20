import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer1";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

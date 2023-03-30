import React from "react";
import { Outlet } from "react-router";
import Header from "../Header";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}
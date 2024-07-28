import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../layout/Header/header";
import { loadState } from "../config/storage";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) return <Navigate to="/login" />;
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

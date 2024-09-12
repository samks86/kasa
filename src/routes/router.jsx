import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Footer from "../layout/Footer.jsx";
import Navbar from "../components/NavBar.jsx";
import Cards from "../layout/Cards.jsx";
import ApartmentPage from "../pages/ApartmentPage.jsx";
import About from "../pages/About.jsx"
import ErrorPageNotFound from "../pages/ErrorPageNotFound.jsx"

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Cards>
      <Outlet />
      </Cards>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/flat",
        element: <ApartmentPage/>
      },
      {
        path: "/About",
        element: <About/>
      }
    ]
  }
]);
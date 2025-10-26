import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../Pages/Loading";

function MainLayouts() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 ">{isLoading ? <Loading /> : <Outlet />}</div>

      <Footer />
    </div>
  );
}

export default MainLayouts;

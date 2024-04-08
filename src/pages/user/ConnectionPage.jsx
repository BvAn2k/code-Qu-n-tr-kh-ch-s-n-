import React from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import Connection from "./../../components/user/connect/Connection";

const ConnectionPage = () => {
  return (
    <div className="flex flex-col w-full h-auto">
      <Header />
      <Connection />
      <Footer />
    </div>
  );
};

export default ConnectionPage;

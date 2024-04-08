import React from "react";
import Header from "../../components/user/Header";
import Trial from "../../components/user/home/Trial";
import Product from "../../components/user/home/Product";
import Feature from "../../components/user/home/Feature";
import Footer from "../../components/user/Footer";
import CustomerEz from './../../components/user/home/CustomerEz';
import RegistTrial from "../../components/user/home/RegistTrial";
import QA from "../../components/user/home/QA";
import News from "../../components/user/home/News";
import Blog from "../../components/user/home/Blog";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-auto">
      <Header />
      <Trial/>
      <Product/>
      <Feature/>
      <RegistTrial/>
      <CustomerEz/>
      <News/>
      <Blog/>
      <QA/>
      <Footer/>
    </div>
  );
};

export default HomePage;

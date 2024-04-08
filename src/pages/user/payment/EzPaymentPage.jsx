import React from "react";
import Header from "../../../components/user/Header";
import Footer from "../../../components/user/Footer";
import EzPaymentBody from "../../../components/user/payment/EzPaymentBody";
import EzPaymentHeader from "../../../components/user/payment/EzPaymentHeader";

const EzPaymentPage = () => {
  return (
    <div className="flex flex-col w-full h-auto">
      <Header />
      <EzPaymentHeader/>
      <EzPaymentBody/>
      <Footer/>
    </div>
  );
};

export default EzPaymentPage;

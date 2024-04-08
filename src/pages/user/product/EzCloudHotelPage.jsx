import React from 'react'
import Header from '../../../components/user/Header'
import Footer from '../../../components/user/Footer'
import EzCloudHotelTrial from '../../../components/user/product/EzCloudHotelTrial';
import EzcloudHotelSaving from '../../../components/user/product/EzcloudHotelSaving';
import EzcloudBusiness from '../../../components/user/product/EzcloudBusiness';
import EzcloudSale from '../../../components/user/product/EzcloudSale';
import EzcoudManager from '../../../components/user/product/EzcoudManager';
import EzcloudExperience from '../../../components/user/product/EzcloudExperience';
import RegistTrial from '../../../components/user/home/RegistTrial';
import QA from '../../../components/user/home/QA';
import CustomerEz from '../../../components/user/home/CustomerEz';
import Posts from '../../../components/user/product/Posts';

const EzCloudHotelPage = () => {
  return (
    <div className="flex flex-col w-full h-auto">
    <Header />
    <EzCloudHotelTrial/>
    <EzcloudHotelSaving/>
    <EzcloudBusiness/>
    <EzcloudSale/>
    <EzcoudManager/>
    <EzcloudExperience/>
    <RegistTrial/>
    <QA/>
    <CustomerEz/>
    <Posts/>
    <Footer />
  </div>
  )
}

export default EzCloudHotelPage
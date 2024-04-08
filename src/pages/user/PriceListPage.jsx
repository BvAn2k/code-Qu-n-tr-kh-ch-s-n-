import React from 'react'
import Header from '../../components/user/Header'
import Footer from '../../components/user/Footer'
import PriceList from '../../components/user/price/PriceList'

const PriceListPage = () => {
  return (
    <div>
      <Header/>
      <PriceList/>
      <Footer/>
    </div>
  )
}

export default PriceListPage
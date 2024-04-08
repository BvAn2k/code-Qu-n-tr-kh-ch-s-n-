import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import RegistFormPage from "./pages/RegistFormPage";
import PriceListPage from "./pages/user/PriceListPage";
import BlogsPage from "./pages/user/BlogsPage";
import ConnectionPage from "./pages/user/ConnectionPage";
import EzCloudHotelPage from "./pages/user/product/EzCloudHotelPage";
import LoginFormPage from "./pages/LoginFormPage";
import EzPaymentPage from "./pages/user/payment/EzPaymentPage";
import HomeId from './pages/id/HomeId';
import MyAccountId from './pages/id/MyAccountId';
import Security from './pages/id/Security';
import NewPassword from './pages/id/NewPassword';

function App() {
  return (
    //regist-trial
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/san-pham/ezcloudhotel" element={<EzCloudHotelPage />}></Route>
        <Route path="/san-pham/ezpayment" element={<EzPaymentPage />}></Route>

        <Route path="/regist-trial" element={<RegistFormPage />}></Route>
        <Route path="/login" element={<LoginFormPage />}></Route>

        <Route path="/price" element={<PriceListPage />}></Route>
        <Route path="/blogs" element={<BlogsPage />}></Route>
        <Route path="/connection" element={<ConnectionPage />}></Route>

        <Route path="/id" element={<HomeId/>}></Route>
        <Route path="/id/myaccount" element={<MyAccountId/>}></Route>
        <Route path="/id/security" element={<Security/>}></Route>
        <Route path="/id/changepassword" element={<NewPassword/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

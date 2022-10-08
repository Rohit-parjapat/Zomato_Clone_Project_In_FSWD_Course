import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// pages

import Checkout from './pages/Checkout.page';
import Restaurant from './pages/Restaurant.page';
import Home from './pages/Home.page';
import GoogleAuth from './pages/GoogleAuth.page';

// components
import Overview from './components/Restaurant/Overview';
import Photos from './components/Restaurant/Photos';
import Menu from './components/Restaurant/Menu';
import Reviews from './components/Restaurant/Reviews';
import OrderOnline from './components/Restaurant/OrderOnline';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/delivery" />} />
        <Route path="/:type" element={<Home />} />
        {/* <Route path="/restaurant/:id" element={<RedirectRestaurant />} /> */}
        <Route path="/google/:token" element={<GoogleAuth />} />
        <Route path='/restaurant/:id' element={<Restaurant />} >
          <Route path="overview" element={<Overview />} />
          <Route path="order-online" element={<OrderOnline />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="menu" element={<Menu />} />
          <Route path="photos" element={<Photos />} />
        </Route>
        <Route path="/checkout/orders" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;

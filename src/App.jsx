import React from "react";
import "./App.css";
import Navbar from "./components/header/navigation/Navbar";
import Header from "./components/header/Header";
import Trendingone from "./components/trendingone/Trendingone";
import TrendingTwo from "./components/trendingtwo/TrendingTwo";
import Footer from "./components/footer/Footer";
import MyAccount from "./components/header/navigation/myaccount/MyAccount";
import Support from "./components/header/navigation/support/Support";
import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import InitiateReturn from './components/header/navigation/initiatereturn/InitiateReturn';
import Favorites from './components/header/navigation/favorites/Favorites';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="initiatreturn" element={<InitiateReturn />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="support" element={<Support />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

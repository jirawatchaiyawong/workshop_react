/* App.jsx */

import React from "react";
import "./App.scss";
import  Login from "./components/login/Login";
import  Register from "./components/login/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return(
    <div className="App">
      <Header/>
      {/* <Login/> */}
      {/* <Home/> */}
      <Register/>
      <Footer/>
    </div>
  );
  
};
export default App;


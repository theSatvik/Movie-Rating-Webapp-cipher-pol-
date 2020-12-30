import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/searchbar/Searchmovies"
import Footer from "./components/footer/Footer"
import "./index.css";


ReactDOM.render((
  <div>
     <Navbar></Navbar>
      <Searchbar></Searchbar>
    <App/>
    <Footer></Footer>
  </div>
),document.getElementById('root')
);
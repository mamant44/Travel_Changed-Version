import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Transport from "../Transport";
import './App.scss';

function App() {
  return (
    <div className="main-wrapper">
      <Header/>
      <Transport/>
      <Footer/>
    </div>
  );
}

export default App;
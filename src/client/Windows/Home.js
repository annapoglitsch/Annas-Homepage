import React from 'react';
import '../style/home.css'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import MiddleLink from '../Components/MiddleLink';
import ImageRow from '../Components/ImageRow';

function Home() {
  return (
    <div className='mainDis'>
      {/* Header Section */}
      <Header />

      {/* Welcome Section */}
      <div className='content' >
        <h1 className='welcomeFont'>
          Welcome.
        </h1>
     

      {/* Middle Link Section */}
      <MiddleLink />

      {/* Image and Text Section */}
      <ImageRow />
</div>
      {/* Footer Section */}
      <Footer /> 
      
    </div>
  );
}

export default Home;

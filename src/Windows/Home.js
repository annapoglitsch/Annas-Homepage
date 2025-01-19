import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import MiddleLink from '../Components/MiddleLink';
import ImageRow from '../Components/ImageRow';

function Home() {
  return (
    <div style={{ backgroundColor: "#F7F6E3", minHeight: "100vh" }}>
      {/* Header Section */}
        <Header></Header>

      {/* Welcome Section */}
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1 style={{ fontSize: "100px", fontWeight: "400", fontFamily: "serif", color: "#383C34" }}>Welcome.</h1>
      </div>
      <MiddleLink></MiddleLink>

      {/* Image and Text Section */}
      <ImageRow></ImageRow>

      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
}

export default Home;

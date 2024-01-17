import React from "react";
import "./home.css";
import video from "../../assets/video.mp4";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { RiApps2Line } from "react-icons/ri";

function Home() {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop typeof="video/mp4"></video>

      <div className="container">
        <div className="search-text">
          <h2>Our Packages</h2>
          <h1>Search Your Holiday</h1>
        </div>
        <div className="search-card">
          <form>
            <label htmlFor="">Search your destination:</label>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Destination"
              />
              <HiOutlineLocationMarker className="input-icon" />
            </div>
            <label htmlFor="">Select your date:</label>
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                placeholder="Enter Date"
              />
            </div>
            <label htmlFor="">
              Max price: <span className="max-price">$5000</span>
            </label>
            <div className="form-group">
              <input
                type="range"
                class="form-range"
                min="1000"
                max="5000"
                placeholder="Enter Time"
              />
            </div>
            <button type="submit" className="btn btn-linear">
              Search
            </button>
          </form>
        </div>
        <div className="d-flex mt-5 fs-2 justify-content-between text-white">
          <div>
            <FaFacebook className="me-2" />
            <FaSquareXTwitter className="me-2"/>
            <AiFillInstagram />
          </div>
          <div>
          <FaListUl className="me-2" />
          <RiApps2Line />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

import React, { useEffect } from "react";
import "./home.css";
import video from "../../assets/video.mp4";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { RiApps2Line } from "react-icons/ri";

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init(
      {
        duration: 2000,
      },
      []
    );
  });
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop typeof="video/mp4"></video>

      <div className="container">
        <div className="search-text" data-aos="fade-up">
          <h2>Our Packages</h2>
          <h1>Search Your Holiday</h1>
        </div>
        <div className="search-card">
          <form>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <label htmlFor="">Search your destination:</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Destination"
                  />
                  <HiOutlineLocationMarker className="input-icon" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <label htmlFor="">Select your date:</label>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter Date"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <label htmlFor="">
                  Max price: <span className="max-price">$5000</span>
                </label>
                <div className="form-group">
                  <input
                    type="range"
                    className="form-range"
                    min="1000"
                    max="5000"
                    placeholder="Enter Time"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-linear">
              Search
            </button>
          </form>
        </div>
        <div
          className="d-flex mt-5 fs-2 justify-content-between text-white"
          data-aos="fade-up"
        >
          <div>
            <FaFacebook className="me-2" />
            <FaSquareXTwitter className="me-2" />
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

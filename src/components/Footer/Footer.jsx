import React from "react";
import "./footer.css";
import video from "../../assets/footer-video.mp4";
import logo from "../../assets/logo-dark.svg";

import { BsSend } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer">
      <div className="video">
        <video src={video} loop autoPlay muted typeof="video/mp4"></video>
      </div>
      <div className="container py-5">
        <div className="subscription">
          <div className="lh-sm">
            KEEP IN TOUCH
            <div className="fs-1 fw-bold">Travel with us</div>
          </div>
          <input type="mail" placeholder="Enter Email Adress" />
          <button className="btn btn-linear fw-medium ">
            SEND <BsSend className="fs-5 ms-2" />
          </button>
        </div>
        <div className="card mt-4">
          <div className="card-body">
            <div className="logo">
              <img src={logo} className="me-1" width={30} alt="" />
              <span>My Travel</span>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. icia
              blanditiis, quis alias. Assumenda? Explicabo nemo molestiae
              repellendus assumenda optio, non ignissimos accusamusa recusandae
              ipsam placeat quibusdam saepe repudiandae nihil. Repudiandae,
              officiis maiores.
            </p>
            <div className="d-flex text-dark fs-4 gap-2">
              <FaFacebook />
              <FaSquareXTwitter />
              <AiFillInstagram />
              <FaYoutube />
              <FaTripadvisor />
            </div>
            <div className="footer-links mt-4">
              <div className="row">
                <div className="col-6">
                  <div className="title">OUR AGENCY</div>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#"><FaAngleRight class="icon" />Services</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />Insurance</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />Agency</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />Tourism</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />Payment</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <div className="title">PARTNERS</div>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#"><FaAngleRight class="icon" />Bookings</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />Rentcars</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />HostelWorld</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />Trivago</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />TripAdvisor</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <div className="title">LAST MINUTE</div>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#"><FaAngleRight class="icon" />London</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />California</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />Indonesia</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />Europe</a>
                    </li>
                    <li>
                      <a href="#"><FaAngleRight class="icon" />Oceania</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div>BEST TRAVEL WEBSITE THEME</div>
            <div>COPIYRIGHTS RESERVED - MELIKE 2023</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

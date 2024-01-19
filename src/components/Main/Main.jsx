import React, { useEffect } from "react";
import "./main.css";
import Data from "./Data";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrNext } from "react-icons/gr";

import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init(
      {
        duration: 2000,
      },
      []
    );
  });
  return (
    <section className="main container py-5">
      <h3 data-aos="fade-right">
        Most visited <span className="underline">destinations</span>
      </h3>
      <div className="row gy-3">
        {Data.map((item) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div key={item.id} className="card"  data-aos="fade-up">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title fw-bold fs-4">{item.title}</h4>
                  <div className="d-flex align-items-center text-muted">
                    <HiOutlineLocationMarker className="me-2 fs-4" />
                    <span className="fs-6">{item.location}</span>
                  </div>
                  <hr />
                  <div className="row align-items-center">
                    <div className="col-6">
                      <span className="fs-6 me-2 text-muted">{item.grade}</span>
                      <span className="badge bg-linear px-2">+1</span>
                    </div>
                    <div className="col-6 text-end">
                      <div className="fs-2 fw-bold">{item.fees}</div>
                    </div>
                  </div>
                  <hr />
                  <div className="fs-14 text-muted fw-medium">
                    {item.descriptions}
                  </div>
                  <div className="btn btn-linear mt-3">
                    DETAILS <GrNext className="fs-5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Main;

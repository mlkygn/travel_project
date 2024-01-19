import React from "react";
import Data from "./Data";

function Main() {
  return (
    <section className="main container">
      <h3>Most visited destinations</h3>
      <div className="row gy-3">
        {Data.map((item) => {
          return (
            <div className="col-12">
              <div key={item.id} className="card">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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

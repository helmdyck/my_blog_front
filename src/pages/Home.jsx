import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container-fluid hero-container">
        <h1 className="hero-title">
          La sexualidad es una fuente de placer y felicidad, <br /> aquí te
          ayudaremos a descubrirla.
        </h1>
      </div>
      <div className="section">
        <div className="container categories-container">
          <div className="category-box">
            <button className="btn rounded-pill">TODO</button>
          </div>
          <div className="category-box">
            <button className="btn rounded-pill">JUGUETES</button>
          </div>
          <div className="category-box">
            <button className="btn rounded-pill">SALUD SEXUAL</button>
          </div>
          <div className="category-box">
            <button className="btn rounded-pill">HIGIENE ÍNTIMA</button>
          </div>

          {/* <div className="row tex-center">
            <div className="btn category-box">ALL</div>
            <div className="btn category-box">JUGUETES</div>
            <div className="btn category-box">SALUD SEXUAL</div>
            <div className="btn category-box">HIGIENE ÍNTIMA</div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;

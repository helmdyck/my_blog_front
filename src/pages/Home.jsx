import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);
  // console.log(articles);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_PORT_URL}/`,
        });
        console.log(response.data);
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    getArticles();
  }, []);

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
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

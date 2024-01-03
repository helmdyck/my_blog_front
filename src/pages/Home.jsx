import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Categories from "../components/categories";

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
      <Categories/>
      <div className="section">
        <div className="container-fluid">
          <div className="art-row">
            {articles.map((article) => (
              <div className="art-card" key={article.id}>
                <img src={article.image} alt="" className="art-img" />
                <div className="category-box">
                  <p className="rounded-pill">{article.category.name}</p>
                </div>
                <h2>{article.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

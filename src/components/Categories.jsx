import axios from "axios";
import "../pages/Home.css";
import React, { useEffect, useState } from 'react'

function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
          try {
            const response = await axios({
              method: "get",
              url: `${import.meta.env.VITE_PORT_URL}/categories`,
            });
            console.log(response.data);
            setCategories(response.data.categories);
          } catch (error) {
            console.log(error);
          }
        };
        getCategories();
      }, []);

  return (
    <div className="section">
        <div className="container-fluid categories-container">
          <div className="category-selector">
            <button className="btn rounded-pill">TODO</button>
          </div>
            {categories.map((category)=>(
          <div className="category-selector" key={category.id}>
            <button className="btn rounded-pill">{category.name}</button>
          </div>
          ))}
        </div>
      </div>
  )
}

export default Categories
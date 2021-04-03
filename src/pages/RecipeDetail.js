import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Loading from "../components/Loading";

export default function RecipeDetail({ title }) {
  console.log(title);

  const app_id = "4e9f05eb";
  const api_key = "9b904d703fa0d46a88ce1ac63f29f498";
  const query = title;

  // state data
  const [RecipeData, setRecipeData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDetailData();
  }, []);

  // fetching data from api
  const fetchDetailData = async () => {
    let response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${api_key}`
    );
    let data = await response.json();
    setRecipeData(data.hits[0]);
    setLoading(!loading);
    console.log(data.hits[0]);
  };

  return (
    <div className="recipe-detail-wrapper">
      <div className="container">
        {loading ? (
          <div>
            <div className="recipe-details">
              <div className="image">
                <img src={RecipeData.recipe.image} alt="" />
              </div>

              <div className="description">
                <h3>{RecipeData.recipe.label}</h3>
                <p>
                  <b>Total Callories:</b> {RecipeData.recipe.calories}
                </p>
                <div>
                  <h4>Ingredients:</h4>
                  <ul>
                    {RecipeData.recipe.ingredients.map((ingredient) => {
                      return (
                        <li>
                          {ingredient.text}({ingredient.weight}gm)
                        </li>
                      );
                    })}
                  </ul>
                  <div className="d-flex pl-4">
                    <Link className="btn btn-secondary" to="/">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

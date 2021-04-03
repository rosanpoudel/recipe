import React from "react";
import NoData from "./NoData";

import { Link } from "react-router-dom";

export default function Recipies({ data }) {
  return (
    <div className="container">
      <div className="row">
        {data.length ? (
          data.map(function (data, index) {
            return (
              <div className="col-md-3" key={index}>
                <div className="recipe-card-wrapper">
                  <div className="recipe-card">
                    <img src={data.recipe.image} alt="" className="img-fluid" />
                    <div className="details">
                      <h2>
                        {data.recipe.label.length > 20
                          ? data.recipe.label.substring(0, 22) + "..."
                          : data.recipe.label}
                      </h2>

                      <p>Calories: {data.recipe.calories}</p>

                      <Link
                        to={`RecipeDetail/${data.recipe.label}`}
                        className="btn btn-danger"
                      >
                        View Recipe
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
}

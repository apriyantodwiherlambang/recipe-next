/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import myRecipeStyle from "../styles/pages/MyRecipe.module.css";
import Image from "next/image";

function myRecipe() {
  return (
    <div className={myRecipeStyle.root}>
      <div className="section">
        <div className="container">
          <div className={myRecipeStyle.mbot50}>
            <div className="d-flex">
              <div className="col-3 center">
                <span className={myRecipeStyle.s1}>
                  <img src="/assets/chevron-left.svg" />
                </span>
              </div>
              <div className={myRecipeStyle.s2}>
                <div>My Recipe</div>
              </div>
            </div>
          </div>

          <div className={myRecipeStyle.mbot25}>
            <div className="d-flex">
              <div>
                <img
                  src="/assets/img (6).png"
                />
              </div>
              <div className={myRecipeStyle.contentRecipe}>
                <div className={myRecipeStyle.s3}>Margherita</div>
                <div className={myRecipeStyle.s4}>
                  <small>In Veg Pizza</small>
                </div>
                <div className="b">Spicy</div>
              </div>
            </div>
          </div>

          <div className={myRecipeStyle.mbot25}>
            <div className="d-flex">
              <div>
                <img
                  src="/assets/img (6).png"
                />
              </div>
              <div className={myRecipeStyle.contentRecipe}>
                <div className={myRecipeStyle.s3}>Margherita</div>
                <div className={myRecipeStyle.s4}>
                  <small>In Veg Pizza</small>
                </div>
                <div className="b">Spicy</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default myRecipe;

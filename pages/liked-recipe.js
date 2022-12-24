/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import likedRecipeStyle from "../styles/pages/LikedRecipe.module.css";
import Image from "next/image";

function likedRecipe() {
  return (
    <div className={likedRecipeStyle.root}>
      <div className="section">
        <div className="container">
          <div className={likedRecipeStyle.mbot50}>
            <div className="d-flex">
              <div className="col-3 center">
                <span className={likedRecipeStyle.s1}>
                  <img src="/assets/chevron-left.svg" />
                </span>
              </div>
              <div className={likedRecipeStyle.s2}>
                <div>Liked Recipe</div>
              </div>
            </div>
          </div>

          <div className={likedRecipeStyle.mbot25}>
            <div className="d-flex">
              <div>
                <img
                  src="/assets/img (6).png"
                />
              </div>
              <div className={likedRecipeStyle.contentRecipe}>
                <div className={likedRecipeStyle.s3}>Margherita</div>
                <div className={likedRecipeStyle.s4}>
                  <small>In Veg Pizza</small>
                </div>
                <div className="b">Spicy</div>
              </div>
            </div>
          </div>

          <div className={likedRecipeStyle.mbot25}>
            <div className="d-flex">
              <div>
                <img
                  src="/assets/img (6).png"
                />
              </div>
              <div className={likedRecipeStyle.contentRecipe}>
                <div className={likedRecipeStyle.s3}>Margherita</div>
                <div className={likedRecipeStyle.s4}>
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

export default likedRecipe;

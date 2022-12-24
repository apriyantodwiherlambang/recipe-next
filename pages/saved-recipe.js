/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import savedRecipeStyle from "../styles/pages/SavedRecipe.module.css";
import Image from "next/image";

function savedRecipe() {
  return (
    <div className={savedRecipeStyle.root}>
      <div className="section">
        <div className="container">
          <div className={savedRecipeStyle.mbot50}>
            <div className="d-flex">
              <div className="col-3 center">
                <span className={savedRecipeStyle.s1}>
                  <img src="/assets/chevron-left.svg" />
                </span>
              </div>
              <div className={savedRecipeStyle.s2}>
                <div>Saved Recipe</div>
              </div>
            </div>
          </div>

          <div className={savedRecipeStyle.mbot25}>
            <div className="d-flex">
              <div>
                <img
                  src="/assets/img (6).png"
                />
              </div>
              <div className={savedRecipeStyle.contentRecipe}>
                <div className={savedRecipeStyle.s3}>Margherita</div>
                <div className={savedRecipeStyle.s4}>
                  <small>In Veg Pizza</small>
                </div>
                <div className="b">Spicy</div>
              </div>
            </div>
          </div>

          <div className={savedRecipeStyle.mbot25}>
            <div className="d-flex">
              <div>
                <img
                  src="/assets/img (6).png"
                />
              </div>
              <div className={savedRecipeStyle.contentRecipe}>
                <div className={savedRecipeStyle.s3}>Margherita</div>
                <div className={savedRecipeStyle.s4}>
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

export default savedRecipe;

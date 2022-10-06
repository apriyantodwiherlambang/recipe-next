/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import LikedRecipeStyles from "../styles/pages/LikedRecipe.module.css";

function LikedRecipe() {
  <>
    <div className={LikedRecipeStyles.root}>
      <div className="section">
        <div className="container">
          <div className="row s5">
            <div className="col-3 s7">
              <a href="javascript:history.back()">
                <span className="s1">
                  <img src="assets/chevron-left.svg" />
                </span>
              </a>
            </div>
            <div className="col-9 s2">My Recipe</div>
          </div>
          <div className="row s6">
            <div className="col-4">
              <img src="assets/img (6).png" className="w-100" />
            </div>
            <div className="col-8 s7">
              <div className="s3">Margherita</div>
              <div className="s4">
                <small>In Veg Pizza</small>
              </div>
              <div className="s8">Spicy</div>
            </div>
          </div>
          <div className="row s6">
            <div className="col-4">
              <img src="assets/img (6).png" className="w-100" />
            </div>
            <div className="col-8 s7">
              <div className="s3">Margherita</div>
              <div className="s4">
                <small>In Veg Pizza</small>
              </div>
              <div className="s8">Spicy</div>
            </div>
          </div>
          <div className="row s6">
            <div className="col-4">
              <img src="assets/img (6).png" className="w-100" />
            </div>
            <div className="col-8 s7">
              <div className="s3">Margherita</div>
              <div className="s4">
                <small>In Veg Pizza</small>
              </div>
              <div className="s8">Spicy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default LikedRecipe;

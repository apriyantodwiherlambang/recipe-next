/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import detailIngredientsRecipeStyle from "../styles/pages/DetailIngredientsRecipe.module.css";

function detailIngredientsRecipe() {
  <>
    <div className={detailIngredientsRecipeStyle.root}>
        <div className="section s8">
          <img src="assets/img2.png" className="w-100" />
        </div>

        <div className="section s9">
          <div className="container s10">
            <div className="row">
              <div className="col-12 s11">
                <a href="javascript:history.back()">
                  <img src="assets/arrow-left.svg" className="s1" />
                </a>
              </div>
              <div className="col-8">
                <div className="s2">Sandwich with Egg</div>
                <div className="s12">By Chef Ronald Humson</div>
              </div>
              <div className="col-4 s14 s21">
                <div className="row">
                  <div className="col-6">
                    <span className="s3">
                      <img src="assets/save.svg" className="s15" width={15} />
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="s4">
                      <img src="assets/like.svg" className="s16" width={17} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section s18">
          <div className="container s5">
            <div className="row text-center">
              <div className="col">
                <div className="s20">Ingredients</div>
                <div className="s6">___</div>
              </div>
              <div className="col">
                <div className="s17">Video Step</div>
              </div>
              <div className="col" />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container s22">
            <ul>
              <li>2 slices whole-grain bread (bakery-fresh recommended)</li>
              <li>1 tablespoon hummus</li>
              <li>2 slices tomato</li>
              <li>1/2 small cucumber, thinly sliced lengthwise</li>
              <li>1 slice low-fat cheese</li>
            </ul>
          </div>
        </div>
        
    </div>
  </>;
}

export default detailIngredientsRecipe;

/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import searchRecipeStyle from "../styles/pages/SavedRecipe.module.css";
import Image from "next/image";

function searchRecipe() {
  return (
    <div class="section">
      <div class="container">
        <div class="col-12">
          <label class={searchRecipeStyle.s1}><img src="assets/search.svg" class={searchRecipeStyle.s12} /></label>
          <input type="text" class="form-control s2" placeholder="Search Pasta, Bread, etc" />
        </div>
      </div>

      <div class="container s9">
        <div class="row s10">
          <div class="col-3">
            <div class="col-12 s3">
              <img src="assets/Group.png" />
            </div>
          </div>
          <div class="col-9 s4">
            <div class={searchRecipeStyle.s5}>Black Fish</div>
            <div>
              <img src="assets/star.svg" class={searchRecipeStyle.s6} /> <b>4.6</b>
              <span class={searchRecipeStyle.s7}>&nbsp; . &nbsp;</span>
              <span class="s11">Seafood</span>
            </div>
          </div>
        </div>
        <div class="col-12 s8">Dishes</div>
      </div>
    </div>
  );
}

export default searchRecipe;

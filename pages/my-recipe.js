/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import MyRecipeStyles from "../styles/pages/MyRecipe.module.css";

export default function myRecipe() {
  return (
    <>
      <div className={MyRecipeStyles.root}>
        {/* <div className="d-flex justify-content-center">
        <div className="col-lg-1 col-sm-6">
          <div className={MyRecipeStyles.back}>
            <Image
              src="/images/back-icon.png"
              alt="login"
              width={50}
              height={50}
            />
          
          </div>
        </div>
      </div> */}
        <p className={MyRecipeStyles.text1}>My Recipe</p>
        {/* Popular Recipes */}
        <section className={MyRecipeStyles.popularRecipe}>
          <div className={MyRecipeStyles.position}>
            {[...new Array(6)].map((item, index) => (
              <div
                className="card"
                style={{
                  borderRadius: "15px",
                  padding: "20px",
                  border: "none",
                  boxShadow: "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  WebkitBoxShadow: "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  MozBoxShadow: "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
                key={index}
              >
                <div className="row">
                  <div className="col-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Lotek_Indonesian_food.jpg/1507px-Lotek_Indonesian_food.jpg"
                      width="80px"
                      height="80px"
                      style={{ borderRadius: "16px", objectFit: "cover" }}
                      alt="image"
                    />
                  </div>
                  <div className="col-10">
                    <div style={{ marginLeft: "45px" }}>
                      <h6>Lotek mba ni&apos;mah</h6>
                      <p>Spicy, Salted, Tasty</p>
                      <div className="d-flex gap-1 align-items-center">
                        <img src="/images/star.png" alt="star" height="12px" />
                        <span>4.7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* End Of Popular Recipes */}
      </div>
    </>
  );
}

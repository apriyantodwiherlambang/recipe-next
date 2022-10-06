/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */

/* eslint-disable @next/next/no-img-element */
import React from "react";
import UploadRecipeStyles from "../styles/pages/UploadRecipe.module.css";
import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

export default function uploadRecipe() {
  return (
    <div className={UploadRecipeStyles.root}>
      <MainLayout>
        <div className={UploadRecipeStyles.bg}>
          <p className={UploadRecipeStyles.text1}>Add Your Recipe</p>

          {/* Title Bar */}
          <div className={UploadRecipeStyles.title}>
            <div className="input-group input-group-lg mb-3">
              <span className="input-group-text test" id="basic-addon1"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          {/* End Of Search Bar */}

          {/* Title Bar */}
          <div className={UploadRecipeStyles.description}>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Decsription"
                rows="8"
              ></textarea>
            </div>
          </div>
          {/* End Of Search Bar */}

          {/* Title Bar */}
          <div className={UploadRecipeStyles.video}>
            <div className="input-group input-group-lg mb-3">
              <input
                className="form-control"
                type="file"
                id="formFile"
                title=""
                placeholder="Add Video"
              />
            </div>
          </div>
          {/* End Of Search Bar */}

          {/* Submit Button */}
          <div className={"d-grid gap-2 col-4"}>
            <button className={UploadRecipeStyles.buttonPost} type="button">
              {" "}
              POST
            </button>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

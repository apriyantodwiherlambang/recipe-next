/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import SearchStyles from "../styles/pages/Search.module.css";

function search() {
  <>
    <div className={SearchStyles.root}>
      <div className="section">
        <div className="container">
          <div className="col-12">
            <label className="s1 ">
              <img src="assets/search.svg" className="s12" />
            </label>
            <input
              type="text"
              className="form-control s2"
              placeholder="Search Pasta, Bread, etc"
            />
          </div>
        </div>
      </div>

      <div className="section s9">
        <div className="container">
          <div className="row s10">
            <div className="col-3">
              <div className="col-12 s3">
                <img src="assets/Group.png" />
              </div>
            </div>
            <div className="col-9 s4">
              <div className="s5">Black Fish</div>
              <div>
                <img src="assets/star.svg" className="s6" /> <b>4.6</b>
                <span className="s7">&nbsp; . &nbsp;</span>
                <span className="s11">Seafood</span>
              </div>
            </div>
          </div>
          <div className="col-12 s8">Dishes</div>
        </div>
      </div>
      
    </div>
  </>;
}

export default search;

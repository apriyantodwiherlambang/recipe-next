/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import detailPopularMenuStyle from "../styles/pages/DetailPopularMenu.module.css";

function detailPopularMenu() {
  <>
    <div className={detailPopularMenuStyle.root}>
      <div className="section">
        <div className="container">
          <div className="row s9">
            <div className="col-3 s10">
              <a href="javascript:history.back()">
                <span className="s1">
                  <img src="assets/chevron-left.svg" />
                </span>
              </a>
            </div>
            <div className="col-9 s2">Popular Menu</div>
          </div>
          <div className="row s11">
            <div className="col-4">
              <img src="assets/img (6).png" className="s8" />
            </div>
            <div className="col-5 s10">
              <div className="s3">Margherita</div>
              <div className="s4">
                <small>In Veg Pizza</small>
              </div>
              <div className="s12">Spicy</div>
            </div>
            <div className="col-3 s5 ">
              <div className="row">
                <div className="col-6">
                  <span className="s6">
                    <img src="assets/save.svg" className="s13" width={15} />
                  </span>
                </div>
                <div className="col-6">
                  <span className="s7">
                    <img src="assets/like.svg" className="s14" width={17} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row s11">
            <div className="col-4">
              <img src="assets/img (6).png" className="s8" />
            </div>
            <div className="col-5 s10">
              <div className="s3">Margherita</div>
              <div className="s4">
                <small>In Veg Pizza</small>
              </div>
              <div className="s12">Spicy</div>
            </div>
            <div className="col-3 s5">
              <div className="row">
                <div className="col-6">
                  <span className="s7">
                    <img src="assets/save.svg" className="s14" width={15} />
                  </span>
                </div>
                <div className="col-6">
                  <span className="s7">
                    <img src="assets/like.svg" className="s14" width={17} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row s11">
            <div className="col-4">
              <img src="assets/img (6).png" className="s8" />
            </div>
            <div className="col-5 s10">
              <div className="s3">Margherita</div>
              <div className="s4">
                <small>In Veg Pizza</small>
              </div>
              <div className="s12">Spicy</div>
            </div>
            <div className="col-3 s5 ">
              <div className="row">
                
                <div className="col-6">
                  <span className="s6">
                    <img src="assets/save.svg" className="s13" width={15} />
                  </span>
                </div>

                <div className="col-6">
                  <span className="s7">
                    <img src="assets/like.svg" className="s14" width={17} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default detailPopularMenu;
